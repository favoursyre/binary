"use client"
///Contact component

///Libraries -->
import { useRouter, usePathname } from 'next/navigation';
import { useState, FormEvent, ChangeEvent } from 'react';
import validator from 'validator';
import styles from "./contact.module.scss"
import Image from "next/image"
import { domainName, routeStyle, companyEmail, companyNumber, capitalizeFirstLetter } from "@/config/utils";
import { notify } from "@/config/clientUtils";
import LocationIcon from "@mui/icons-material/LocationOn";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import Loading from "../loadingCircle/Circle";
// import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import { IInquiry } from '@/config/interfaces';

///Commencing the code 

/**
 * @title Contact Component
 * @returns The Contact component
 */
const Contact = () => {
    //const [contact, setContact] = useState(contact_)
    const router = useRouter()
    const routerPath = usePathname();
    const [fullName, setFullName] = useState<string>("");
    const [emailAddress, setEmailAddress] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [textAreaCount, setTextAreaCount] = useState(0);
    const [textMaxLength, setTextMaxLength] = useState(500)
    const [verifyModal, setVerifyModal] = useState<boolean>(false)

    // useEffect(() => {
    //     document.title = "Contacts ~ IB Cakes & Catering";

    //     const currentDate = new Date();
    //     const nextWeek = new Date(currentDate.getTime() + 8 * 24 * 60 * 60 * 1000);
    //     const options: Intl.DateTimeFormatOptions = { weekday: "long", year: 'numeric', month: 'long', day: 'numeric' };
    //     const formattedDate = nextWeek.toLocaleDateString('en-US', options);
    //     console.log("Date: ", formattedDate)
    //   }, []);

    // //This function handles the textarea onchange
    const handleTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();

        setTextAreaCount(e.target.value.length);
        setMessage(e.target.value);
    };

    // //This function executes when form is submitted
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        ///Validating the required args
        if (!fullName) {
            notify("error", "Fullname is required")
            return
        } else if (!emailAddress) {
            notify("error", "Email address is required")
            return
        } else if (!validator.isEmail(emailAddress)) {
            notify("error", "Email address is not valid")
            return
        } else if (!subject) {
            notify("error", "Subject is required")
            return
        } else if (!message) {
            notify("error", "Message is required")
            return
        }

        const inquiry: IInquiry = { fullName, emailAddress, subject, message }
        setVerifyModal(() => !verifyModal)
        //Send the account to the backend
        try {
            //console.log("Account client: ", account)
            const res = await fetch(`${domainName}/api/inquiry/`, {
                method: 'POST',
                body: JSON.stringify(inquiry),
                headers: {
                'Content-Type': 'application/json',
                },
            });

            console.log("Res: ", res.ok)
            const data = await res.json();
            if (res.ok) {
                notify("success", `${data?.message}`)
                window.location.reload()
            } else {
                throw new Error(`${data?.message}`)
            }
            setVerifyModal(() => false)
        } catch (error) {
            console.log("Error: ", error)
            notify("error", `${error?.message}`)
            setVerifyModal(() => false)
        } 
    };
  //console.log('Current page:', routerPath);

  return (
    <>
        <div className={`${styles.contactHero} ${routeStyle(routerPath, styles)}`}>
            <div className={styles.gradientOverlay}></div>
            <Image 
                className={styles.image}
                src={"https://drive.google.com/uc?export=download&id=1eeNCZLPibEhrwE6rahqqp41WuLqwG0P0"}
                alt=""
                width={2048}
                height={1358}
            />
            <div className={styles.brief}>
                <span className={styles.brief1}>Contact Us</span>
                <span className={styles.brief2}>Whether you have questions, ideas or simply want to explore the innovative universe of web3 investments, our team is here to guide you. Reach out and let&apos;s help shape your financial future together.</span>
            </div>
        </div>
        <div className={styles.container}>
        <div className={styles.contact}>
            <div className={styles.brief}>
                <div id={styles.brief1}>
                    <h3>
                        <strong>Get in touch</strong>
                    </h3>
                    <span>We value your feedback and would be delighted to hear from you. Our team is always available to chat and assist you in any way we can.</span>
                </div>
                <div id={styles.brief2}>
                    <div className={styles.heading}>
                        <EmailIcon className={styles.icon} />
                        <h4>
                            <strong>Email</strong>
                        </h4>
                    </div>
                    <span>{companyEmail}</span>
                </div>
                <div id={styles.brief3}>
                    <div className={styles.heading}>
                        <LocationIcon className={styles.icon} />
                        <h4>
                            <strong>Address</strong>
                        </h4>
                    </div>
                    <span>541 Montgomery Street, San Francisco, CA 94111, United States.</span>
                </div>
                <div id={styles.brief4} style={{ display: "none" }}>
                    <div className={styles.heading}>
                        <WhatsappIcon className={styles.icon} />
                        <h4>
                            <strong>Whatsapp</strong>
                        </h4>
                    </div>
                    <span>{companyNumber}</span>
                </div>
            </div>
            <div className={styles.form}>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input
                        placeholder="Full Name"
                        type="text"
                        onChange={(e) => setFullName(capitalizeFirstLetter(e.target.value))}
                        value={fullName}
                    />
                    <br />
                    <input
                        placeholder="Email"
                        type="email"
                        onChange={(e) => setEmailAddress(e.target.value)}
                        value={emailAddress}
                    />
                    <br />
                    <input
                        placeholder="Subject"
                        type="text"
                        onChange={(e) => setSubject(e.target.value)}
                        value={subject}
                    />
                    <br />
                    <textarea
                        placeholder="Message"
                        onChange={(e) => handleTextArea(e)}
                        maxLength={textMaxLength}
                        value={message}
                    ></textarea>
                    <p id="textCount">{textAreaCount}/{textMaxLength}</p>
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        </div>
        </div>
        <div className={`${verifyModal ? styles.activeVerifyModal : styles.inActiveVerifyModal}`} >
        <Loading />
        </div>
    </>
  );
};

export default Contact;