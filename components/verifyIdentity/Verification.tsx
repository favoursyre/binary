"use client"
///Verification component

///Libraries -->
import styles from "./verification.module.scss"
import { useRouter, usePathname } from 'next/navigation';
import { routeStyle, readImageDimension, readFile, isImage, getItemByKey, domainName, 
    //generateWallet, 
    sleep } from "@/config/utils";
import { IAccount, IFileAttachment, IIDentification, IReferralInfo, IVerification, 
    //IWalletInfo 
} from "@/config/interfaces";
import { notify } from "@/config/clientUtils";
import { identifications } from "@/config/database";
import Image from "next/image";
import { useState, FormEvent, useRef, DragEvent, ChangeEvent, MouseEvent, useEffect } from "react";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Loading from "../loadingCircle/Circle";
import { useEdgeStore } from '@/config/edgestore';
import { getDownloadUrl } from '@edgestore/react/utils';

///Commencing the code 

/**
 * @title Verification Component
 * @returns The Verification component
 */
const Verification = ({ account_ }: { account_: IAccount }) => {
    const router = useRouter()
    const [account, setAccount] = useState<IAccount>(account_)
    const routerPath = usePathname();
    const [fileIsImage, setFileIsImage] = useState<boolean>(false)
    const [imageWidth, setImageWidth] = useState<number>(0);
    const [imageHeight, setImageHeight] = useState<number>(0);
    const [documents, setDocuments] = useState<Array<IIDentification>>(getItemByKey(identifications, "category", account?.investorType))
    const [verifyModal, setVerifyModal] = useState<boolean>(false)
    const [selectedDocumentType, setSelectedDocumentType] = useState<string>()
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [done, setDone] = useState<boolean>(false)
    const [file, setFile] = useState<IFileAttachment | null>()
    const [image, setImage] = useState<File>()
    const { edgestore } = useEdgeStore();
    
    useEffect(() => {
        console.log('image has changed:', image);
    
        // You can perform additional actions based on the change here
        // const test = async() => {
        //     if (image) {
        //         console.log('Image: ', image)
        //         const res = await edgestore.publicFiles.upload({ file: image });  
        //         console.log('edge: ', res)      
        //         console.log("Image Url: ", URL.createObjectURL(image))
        //         setUrl(() => URL.createObjectURL(image))
        //         const url_ = getDownloadUrl(res.url);
        //         console.log("Download url: ", url_)
        //     }
        // }
        // //
        // test()
    
      }, [image]);

    const handleFileSelect = async (event: ChangeEvent<HTMLInputElement>  | DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    
        let file_
         //Checking for the event and assinging the file variable accordingly
        if ('target' in event && event.target instanceof HTMLInputElement) { // It is a ChangeEvent<HTMLInputElement>
            file_ = event.target.files && event.target.files[0];
            console.log("Target: ", typeof file_)
          } else if ('dataTransfer' in event && event.dataTransfer instanceof DataTransfer) { // It is a DragEvent<HTMLDivElement>
            file_ = event.dataTransfer.files[0];
          }
        //const file = event.dataTransfer.files[0];
          
        if (file_) {
            setImage(() => file_)
            
            let width, 
                height
            console.log("File: ", typeof file_)
            //Checking that the maximum number of selected files hasn't been exceeded
            console.log("Is Image: ", isImage(file_))
            console.log("Access file drop")

            ///Reading the contents of the file
            const url = await readFile(file_)
            
            const name = file_.name

            if (isImage(file_)) {
                const { imgWidth: width, imgHeight: height } = await readImageDimension(file_)
                setImageHeight(() => height)
                setImageWidth(() => width)
                console.log("Dimensions: ", width, height)
            }
            

            const fileAttachment: IFileAttachment = { name, url, height, width }
            setFile(() => fileAttachment)
            console.log("File: ", file)

            //Update total image size
            // const size = file_.size
            // setTotalImageSize(() => totalImageSize + bytesToMB(size))

            // Handle the dropped files here
            //console.log("Files: ", file);
        }
      };
      //console.log('Current page:', routerPath);
    
      //This function is triggered when the delete file item is clicked
      const deleteFileItem = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void => {
        e.preventDefault()
    
        setFile(() => null)
        console.log("item deleted")
        window.location.reload()
        // selectedFiles?.splice(index, 1)
        // setSelectedFiles(() => selectedFiles)
        // console.log('Updated files: ', selectedFiles)
      }

    //This function executes when login form is submitted
    const handleVerification = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        ///Validating the required args
        if (!selectedDocumentType) {
            notify("error", "Document type is required")
            return
        } else if (!file) {
            notify("error", "You need to upload a file")
            return
        }

        setVerifyModal(() => !verifyModal)
        //http://localhost:3000/2f915829-a56d-4515-861e-6dc007dea052

        //Uploading the image to edgestore
        let res: {
            url: string;
            size: number;
            uploadedAt: Date;
            metadata: Record<string, never>;
            path: Record<string, never>;
            pathOrder: string[];
        }

        if (image) {
            console.log('Image: ', image)
            res = await edgestore.publicFiles.upload({ file: image });  
            console.log('edge: ', res)      
            console.log("Image Url: ", URL.createObjectURL(image))
        }

        const verification: IVerification = { 
            status: false, 
            document: selectedDocumentType, 
            file: { name: file.name, url: getDownloadUrl(res.url), width: imageWidth, height: imageHeight} 
        }
        const referral: IReferralInfo = { referralId: account._id, referralLink: `${domainName}/register/${account._id}`, numberOfReferrees: 0 }
        //const wallet: IWalletInfo = { ...generateWallet() }
        const id: string = account._id
        
        //Send the order to the backend
        try {
            console.log("Account client: ", account)
            const res = await fetch(`${domainName}/api/account/${id}?action=verify-identity`, {
                method: 'PATCH',
                body: JSON.stringify({ verification, referral }),
                headers: {
                'Content-Type': 'application/json',
                },
            });

            console.log("Res: ", res.ok)
            const data = await res.json();
            if (res.ok) {
                notify("success", `${data.message}`)
            } else {
                throw new Error(`${data.message}`)
            }
            setDone(() => true)
        } catch (error) {
            console.log("Error: ", error.message)
            notify("error", `${error.message}`)
            setVerifyModal(() => false)
        }
    };

   ///Handle selected country
   const handleSelectDocument = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedDocumentType(e.target.value);
  };


  return (
    <>
        <div className={`${styles.verificationHero} ${routeStyle(routerPath, styles)}`}>
            <div className={styles.gradientOverlay}></div>
            <Image
                className={styles.image}
                src={"https://drive.google.com/uc?export=download&id=1oKeqFuGe41MjQFaYYYvfwq8NtFM1UIPs"}
                alt=""
                width={2048}
                height={1365}
            />
            <div className={styles.brief}>
                <span className={styles.brief1}>Identity Verification</span>
                <span className={styles.brief2}>Hi {account?.fullName}, let&apos;s verify your identity and embark on a prosperous financial future together.</span>
            </div>
        </div>
        <div className={styles.container}>
            <div 
                className={styles.verification}
                onDragOver={(e) => handleFileSelect(e)}
                onDrop={(e) => handleFileSelect(e)}
            >
                <span className={styles.span1}>Please upload a clear and valid copy of your</span>
                <div className={styles.documentType}>
                    <PermIdentityIcon className={styles.idIcon} />
                    <select value={selectedDocumentType} onChange={(e) => handleSelectDocument(e)}>
                        <option value={''}>Document Type</option>
                        {documents[0].documents.map((document, id) => (
                            <option value={document} key={id}>{document}</option>
                        ))}
                    </select>
                </div>
                <form onSubmit={(e) => handleVerification(e)}>
                    <div className={styles.dragFile}>
                        <span>{file ? file?.name : "Drag and Drop File to Upload Or"}</span>
                        <div className={styles.imageDiv}>
                            {file ? (
                                <img 
                                    className={styles.image}
                                    src={file ? file?.url : ""}
                                    alt=""
                                    width={file ? file?.width : 2048}
                                    height={file ? file?.height : 1587}
                                />
                            ) : (
                                <Image 
                                    className={styles.image}
                                    src={file ? file?.url : "https://drive.google.com/uc?export=download&id=1ViAwi1sFTkqsRUhUPv0uaiN8S9PvHUXw"}
                                    alt=""
                                    width={file ? file?.width : 2048}
                                    height={file ? file?.height : 1587}
                                />
                            )}
                        </div>
                        <button type="button" onClick={(e) => file ? deleteFileItem(e) : fileInputRef.current?.click()}>
                            {file ? (
                                <DeleteOutlineIcon className={styles.icon} /> 
                            ) : (
                                <AttachFileIcon className={styles.icon} /> 
                            )}
                            <span>{file ? "Remove" : "Select File"}</span>
                        </button>
                        <input 
                            type="file"
                            style={{ display: "none" }}
                            accept="image/png, image/gif, image/jpeg, image/jpg"
                            onChange={(e) => handleFileSelect(e)}
                            ref={fileInputRef}
                        />
                    </div>
                    <button className={styles.submit}>Submit</button>
                </form>
            </div>
        </div>
        <div className={`${verifyModal ? styles.activeVerifyModal : styles.inActiveVerifyModal}`} >
            {done ? (
                <div className={styles.container}>
                <CloseIcon 
                    className={styles.closeIcon} 
                    onClick={() => {
                        setVerifyModal(!verifyModal)
                        router.push("/")
                    }} 
                />
                <span className={styles.span1}>Thank you for submitting your document for review, we are currently reviewing a large volume of documents  and we are making every effort to expedite the review process without compromising quality. Your understanding is deeply appreciated. </span>
                <div className={styles.imageDiv}>
                    <Image 
                        className={styles.image}
                        src={"https://drive.google.com/uc?export=download&id=16QAmBJNQ1XcJKclCL8W9ivbJ-V-4Dzxc"}
                        alt=""
                        width={2048}
                        height={1021}
                    />
                </div>
                <span className={styles.span2}>We will notify you promptly upon completion of the review. If you have any urgent concerns or queries, please feel free to reach out to our support team.</span>
            </div>
            ) : (
                <Loading />
            )}
            
        </div>
    </>
  );
};

export default Verification;