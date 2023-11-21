"use client"
///Profile component

///Libraries -->
import styles from "./profile.module.scss"
import { useRouter, usePathname } from 'next/navigation';
import { readFile, isImage, readImageDimension, domainName, sleep, companyName } from "@/config/utils";
import { copyToClipboard, notify } from "@/config/clientUtils";
//import Image from "next/image";
import WalletIcon from '@mui/icons-material/Wallet';
import { useState, ChangeEvent, DragEvent, MouseEvent, FormEvent, useRef, useEffect } from "react";
import { IFileAttachment, IAccount } from "@/config/interfaces";
import CloseIcon from '@mui/icons-material/Close';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockResetIcon from '@mui/icons-material/LockReset';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Loading from "../loadingCircle/Circle";
import { useEdgeStore } from '@/config/edgestore';
import { getDownloadUrl } from '@edgestore/react/utils';

///Commencing the code 

/**
 * @title Dashboard Component
 * @returns The Dashboard component
 */
const Profile = ({ account_ }: { account_: IAccount }) => {
    const router = useRouter()
    const routerPath = usePathname();
    const [imageWidth, setImageWidth] = useState<number>(0);
    const [imageHeight, setImageHeight] = useState<number>(0);
    const [password1, setPassword1] = useState<string>()
    const [password2, setPassword2] = useState<string>()
    const [password3, setPassword3] = useState<string>()
    const [visible1, setVisible1] = useState<boolean>(false)
    const [visible2, setVisible2] = useState<boolean>(false)
    const [visible3, setVisible3] = useState<boolean>(false)
    const [profileInfoContent, setProfileInfoContent] = useState<boolean>(false)
    const [profileImageContent, setProfileImageContent] = useState<boolean>(false)
    const [passwordContent, setPasswordContent] = useState<boolean>(false)
    const [walletInfoContent, setWalletInfoContent] = useState<boolean>(false)
    const [referralInfoContent, setReferralInfoContent] = useState<boolean>(false)
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState<IFileAttachment | null>()
    const [modal, setModal] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [container, setContainer] = useState<boolean>(true)
    const [account, setAccount] = useState<IAccount>(account_)
    const [image, setImage] = useState<File>()
    const { edgestore } = useEdgeStore();

    //keeping track of image
    useEffect(() => {
      console.log('image has changed:', image);

      if (account === undefined) {
        //notify("error", "Network error or probably this account doesn't exist. Reloading page in 3seconds")
        //sleep(3000)
        window.location.reload()
      }

  
    }, [image, account]);

    ///This is triggered when user wants to view more details about a modal
    const viewModalContent = (
      e: MouseEvent<SVGSVGElement, globalThis.MouseEvent> | MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, 
      action: string, 
      content: string | null
    ) => {
      e.preventDefault()

      if (action === "open") {
        if (content === "profile-info") {
          setProfileInfoContent(() => true)
        } else if (content === "profile-image") {
          setProfileImageContent(() => true)
          //setInvestComponent(() => content)
        } else if (content === "password") {
          setPasswordContent(() => true)
          //setInvestComponent(() => content)
        } else if (content === "wallet-info") {
          setWalletInfoContent(() => true)
        } else if (content === "referral-info") {
          setReferralInfoContent(() => true)
        }

      } else if (action === "close") {
        if (profileInfoContent) {
          setProfileInfoContent(() => false)
        } else if (profileImageContent) {
          setProfileImageContent(() => false)
        } else if (passwordContent) {
          setPasswordContent(() => false)
        } else if (walletInfoContent) {
          setWalletInfoContent(() => false)
        } else if (referralInfoContent) {
          setReferralInfoContent(() => false)
        }
      }
      
      setModal(() => !modal)
    }

    ///This function copies address to clipboard
    const copyText = (e: MouseEvent<SVGSVGElement, globalThis.MouseEvent> | MouseEvent<HTMLSpanElement, globalThis.MouseEvent>, content: string) => {
      e.preventDefault()

      //navigator.clipboard.writeText(content);
      copyToClipboard(content)
      notify("success", "Copied to clipboard successfully")
    }

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
    const handleUpload = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        ///Validating the required args
        if (!file) {
            notify("error", "You need to upload an image")
            return
        }

        setContainer(() => false)
        setLoading(() => true)
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

        const profileImage: IFileAttachment = { name: file.name, url: getDownloadUrl(res.url), width: imageWidth, height: imageHeight }
        const id: string = account._id
        
        //Send the order to the backend
        try {
            console.log("Account client: ", account)
            const res = await fetch(`${domainName}/api/account/${id}?action=profile-image`, {
                method: 'PATCH',
                body: JSON.stringify({ profileImage }),
                headers: {
                'Content-Type': 'application/json',
                },
            });

            console.log("Res: ", res.ok)
            const data = await res.json();
            if (res.ok) {
                notify("success", `${data.message}`)
                setLoading(() => false)
            } else {
                throw new Error(`${data.message}`)
            }
            setModal(() => false)
            setContainer(() => true)
        } catch (error) {
            console.log("Error: ", error.message)
            notify("error", `${error.message}`)
            setModal(() => false)
            setContainer(() => true)
        }
    };

    

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

      ///This function is trigerred when the reset button is clicked
    const resetPassword = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      ///Validating the required args
      if (!password1) {
          notify("error", "Current Password is required")
          return
      } else if (!password2) {
          notify("error", "New Password is required")
          return
      } else if (!password3) {
        notify("error", "Confirm New Password is required")
        return
    } else if (password2 !== password3) {
          notify("error", "Passwords doesn't match")
          return
      } 

      //setModal(() => !modal)
      setContainer(() => false)
      setLoading(() => true)
        const emailAddress: string = account?.emailAddress
        const currentPassword: string = password1
        const newPassword: string = password2
        //Send the account to the backend
        try {
            //console.log("Account client: ", account)
            const res = await fetch(`${domainName}/api/account/password?action=change`, 
            {
                method: 'PATCH',
                body: JSON.stringify({ emailAddress, currentPassword, newPassword }),
                headers: {
                'Content-Type': 'application/json',
                },
            }
            );

            console.log("Res: ", res.ok)
            const data = await res.json();
            if (res.ok) {
                notify("success", `${data.message}`)
                console.log('Data: ', data)
                setLoading(() => false)
                window.location.reload()
            } else {
                throw new Error(`${data.message}`)
            }
            setModal(() => false)
            setContainer(() => true)
        } catch (error) {
            console.log("Error: ", error)
            notify("error", `${error.message}`)
            setModal(() => false)
            setContainer(() => true)
        }
  }

  return (
    <>
      <div className={styles.main} id="profile">
        <div className={styles.container}>
            <div className={styles.profile}>
                <div className={styles.imageDiv}>
                  {account && account?.profileImage && account?.profileImage.url ? (
                    <img
                      className={styles.image}
                      src={account?.profileImage?.url}
                      alt=""
                      width={account?.profileImage?.width}
                      height={account?.profileImage?.height}
                      //layout="responsive"
                    />
                    ) : (
                      <PersonIcon className={styles.icon} />
                    )}
                  </div>
                <div className={styles.brief}>
                    <span className={styles.brief1}>{account?.fullName}</span>
                    <span className={styles.brief2}>{account?.emailAddress}</span>
                </div>
            </div>
            <div className={styles.buttons}>
                <button className={styles.profileInfo} onClick={(e) => viewModalContent(e, "open", "profile-info")}>
                    <div className={styles.div1}>
                        <AccountBoxIcon className={styles.icon} />
                        <span>Profile Information</span>
                    </div>
                    <OpenInNewIcon className={styles.openIcon} />
                </button>
                <button className={styles.profilePic} onClick={(e) => viewModalContent(e, "open", "profile-image")}> 
                    <div className={styles.div1}>
                        <AccountCircleIcon className={styles.icon} />
                        <span>Change Profile Picture</span>
                    </div>
                    <OpenInNewIcon className={styles.openIcon} />
                </button>
                <button className={styles.password} onClick={(e) => viewModalContent(e, "open", "password")}>
                    <div className={styles.div1}>
                        <LockResetIcon className={styles.icon} />
                        <span>Change Password</span>
                    </div>
                    <OpenInNewIcon className={styles.openIcon} />
                </button>
                <button className={styles.walletInfo} onClick={(e) => viewModalContent(e, "open", "wallet-info")}>
                    <div className={styles.div1}>
                        <WalletIcon className={styles.icon} />
                        <span>Wallet Information</span>
                    </div>
                    <OpenInNewIcon className={styles.openIcon} />
                </button>
                <button className={styles.referralInfo} onClick={(e) => viewModalContent(e, "open", "referral-info")}>
                    <div className={styles.div1}>
                        <PersonIcon className={styles.icon} />
                        <span>Referral Information</span>
                    </div>
                    <OpenInNewIcon className={styles.openIcon} />
                </button>
            </div>
        </div>
      </div>
      <div className={`${modal ? styles.activeModal : styles.inActivemModal}`} >
        <div className={styles.container} style={{ display: container ? "flex" : "none"}}>
          <CloseIcon className={styles.closeIcon} onClick={(e) => viewModalContent(e, "close", null)} />
          <div className={styles.profileInfoContent} style={{ display: profileInfoContent ? "flex" : "none"}}>
            <AccountBoxIcon className={styles.profile} />
            <div className={styles.content}>
              <span><strong>Name:</strong> {account?.fullName}</span>
              <span><strong>Email:</strong> {account?.emailAddress}</span>
              <span><strong>Verification Status:</strong> {account?.verification && account?.verification?.status ? "True" : "False"}</span>
              <span><strong>Verification Document:</strong> {account?.verification && account?.verification?.document ? account?.verification?.document : "N/A" }</span>
              <span><strong>Investor Type:</strong> {account?.investorType}</span>
              <span><strong>Country:</strong> {account?.country}</span>
            </div>
          </div>
          <div 
            className={styles.profileImageContent} 
            style={{ display: profileImageContent ? "flex" : "none"}}
            onDragOver={(e) => handleFileSelect(e)}
            onDrop={(e) => handleFileSelect(e)}
          >
            {/* <AccountCircleIcon className={styles.account} /> */}
            <form onSubmit={(e) => handleUpload(e)}>
                <div className={styles.dragFile}>
                    <span>{file ? file.name : "Drag and Drop Image to Upload Or"}</span>
                    <div className={styles.imageDiv}>
                      {file ? (
                        <img 
                          className={styles.image}
                          src={file?.url}
                          alt=""
                          width={file?.width}
                          height={file?.height}
                        />
                      ) : (
                        <AccountCircleIcon className={styles.imageAccount} />
                      )}
                    </div>
                    <button type="button" onClick={(e) => file ? deleteFileItem(e) : fileInputRef.current?.click()}>
                        {file ? (
                            <DeleteOutlineIcon className={styles.icon} /> 
                        ) : (
                            <AddPhotoAlternateIcon className={styles.icon} /> 
                        )}
                        <span>{file ? "Remove" : "Select"}</span>
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
          <div className={styles.passwordContent} style={{ display: passwordContent ? "flex" : "none"}}>
            <LockResetIcon className={styles.lock} />
            <form onSubmit={(e) => resetPassword(e)}>
              <div className={styles.currentPassword}>
                <LockIcon className={styles.lockIcon} />
                  <input
                      placeholder="Current Password"
                      type={visible1 ? 'text' : 'password'}
                      onChange={(e) => setPassword1(e.target.value)}
                      value={password1}
                  />
                  {visible1 ? (
                      <VisibilityIcon className={styles.visibleIcon} onClick={() => setVisible1(!visible1)} />
                  ) : (
                      <VisibilityOffIcon className={styles.visibleIcon} onClick={() => setVisible1(!visible1)} />
                  )}
              </div>
              <div className={styles.newPassword}>
                <LockIcon className={styles.lockIcon} />
                  <input
                      placeholder="New Password"
                      type={visible2 ? 'text' : 'password'}
                      onChange={(e) => setPassword2(e.target.value)}
                      value={password2}
                  />
                  {visible2 ? (
                      <VisibilityIcon className={styles.visibleIcon} onClick={() => setVisible2(!visible2)} />
                  ) : (
                      <VisibilityOffIcon className={styles.visibleIcon} onClick={() => setVisible2(!visible2)} />
                  )}
              </div>
              <div className={styles.confirmPassword}>
                  <LockIcon className={styles.lockIcon} />
                  <input
                      placeholder="Confirm Password"
                      type={visible3 ? 'text' : 'password'}
                      onChange={(e) => setPassword3(e.target.value)}
                      value={password3}
                  />
                  {visible3 ? (
                      <VisibilityIcon className={styles.visibleIcon} onClick={() => setVisible3(!visible3)} />
                  ) : (
                      <VisibilityOffIcon className={styles.visibleIcon} onClick={() => setVisible3(!visible3)} />
                  )}
              </div>
              <button>Reset Password</button>
            </form>
          </div>
          <div className={styles.walletInfoContent} style={{ display: walletInfoContent ? "flex" : "none"}}>
            <WalletIcon className={styles.wallet} />
            <div className={styles.content}>
              <span className={styles.span1}>Please keep these informations secret to you as you may risk loosing your funds if a malicious actor gets access to these informations.</span>
              <br />
              <span><strong>Network:</strong> {companyName} Network</span>
              <span><strong>Currency:</strong> {companyName} Token</span>
              <span className={styles.span4} onClick={(e) => copyText(e, account?.wallet?.mnemonic)}>
                <strong>Mnemonic:</strong> 
                <span>{account?.wallet?.mnemonic}</span>
                <ContentCopyIcon className={styles.icon} />
              </span>
              <span className={styles.span5} onClick={(e) => copyText(e, account?.wallet?.privateKey)}>
                <strong>Private Key:</strong> 
                <span>{account?.wallet?.privateKey}</span>
                <ContentCopyIcon className={styles.icon} />
              </span>
              <span className={styles.span6} onClick={(e) => copyText(e, account?.wallet?.publicKey)}>
                <strong>Public Key:</strong> 
                <span>{account?.wallet?.publicKey}</span>
                <ContentCopyIcon className={styles.icon} />
              </span>
              <span className={styles.span7} onClick={(e) => copyText(e, account?.wallet?.address)}>
                <strong>Address:</strong> 
                <span>{account?.wallet?.address}</span>
                <ContentCopyIcon className={styles.icon} />
              </span>
            </div>
          </div>
          <div className={styles.referralInfoContent} style={{ display: referralInfoContent ? "flex" : "none"}}>
            <PersonIcon className={styles.referral} />
            <div className={styles.content}>
              <span className={styles.span1} onClick={(e) => copyText(e, account?.referral?.referralId)} >
                <strong>Id:</strong> 
                <span>{account?.referral?.referralId} </span>
                <ContentCopyIcon className={styles.copy}  />
              </span>
              <span className={styles.span2} onClick={(e) => copyText(e, `${domainName}/register/${account?.referral?.referralId}`)}>
                <strong>Link:</strong> 
                <span>{`${domainName}/register/${account?.referral?.referralId}`} </span>
                <ContentCopyIcon className={styles.copy} />
                </span>
              <span><strong>Number of Referrees:</strong> {account?.referral?.numberOfReferrees}</span>
            </div>
          </div>
        </div>
        {loading ? (
          <Loading />
           
        ) : (
          <></> 
        )}
        </div>
    </>
  );
};

export default Profile;