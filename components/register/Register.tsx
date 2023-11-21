"use client"
///Register component

///Libraries -->
import styles from "./register.module.scss"
import { useRouter, usePathname } from 'next/navigation';
import { routeStyle, domainName, capitalizeFirstLetter } from "@/config/utils";
import { notify } from "@/config/clientUtils";
import { countryList } from "@/config/database";
//import Image from "next/image";
import { useState, FormEvent, ChangeEvent } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import FlagIcon from '@mui/icons-material/Flag';
import Loading from "../loadingCircle/Circle";
import validator from "validator"
import { IAccount } from "@/config/interfaces";

///Commencing the code 

/**
 * @title Register Component
 * @returns The Register component
 */
const Register = ({ id }: { id: string | undefined }) => {
    const router = useRouter()
    const routerPath = usePathname();
    const [fullName, setFullName] = useState<string>("")
    const [referrerId, setReferrerId] = useState<string>(id)
    const [emailAddress, setEmailAddress] = useState<string>("");
    const [password1, setPassword1] = useState<string>("")
    const [password2, setPassword2] = useState<string>("")
    const [visible1, setVisible1] = useState<boolean>(false)
    const [visible2, setVisible2] = useState<boolean>(false)
    const [verifyModal, setVerifyModal] = useState<boolean>(false)
    const [selectedInvestor, setSelectedInvestor] = useState<string>("")
    const [selectedCountry, setSelectedCountry] = useState<string>("")
    const [done, setDone] = useState<boolean>(false)

    ///Handle selected investor
    const handleSelectInvestor = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedInvestor(e.target.value);
      };

      ///Handle selected country
    const handleSelectCountry = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedCountry(e.target.value);
      };

    //This function executes when login form is submitted
    const handleRegistration = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        ///Validating the required args
        if (!fullName) {
            notify("error", "Full name is required")
            return
        } else if (!emailAddress) {
            notify("error", "Email address is required")
            return
        } else if (!validator.isEmail(emailAddress)) {
            notify("error", "Email address is not valid")
            return
        } else if (!selectedInvestor) {
            notify("error", "Investor type is required")
            return
        } else if (!selectedCountry) {
            notify("error", "Country is required")
            return
        } else if (!password1) {
            notify("error", "Password is required")
            return
        } else if (!password2) {
            notify("error", "Confirm Password is required")
            return
        } else if (password1 !== password2) {
            notify("error", "Passwords doesn't match")
            return
        }
        //const password = password1
        //const country
        setVerifyModal(() => !verifyModal)
        //Arranging the data
        const account: IAccount = {
            fullName: fullName, 
            emailAddress: emailAddress, 
            password: password1, 
            country: selectedCountry, 
            investorType: selectedInvestor, 
            referrerId: referrerId,
            verification: undefined
        }

        //Send the account to the backend
        try {
            console.log("Account client: ", account)
            const res = await fetch(`${domainName}/api/account/`, {
                method: 'POST',
                body: JSON.stringify(account),
                headers: {
                'Content-Type': 'application/json',
                },
            });

            console.log("Res: ", res.ok)
            const data = await res.json();
            if (res.ok) {
                notify("success", `${data.message}`)
                //router.push(`/account/dashboard/352121320`)
            } else {
                throw new Error(`${data.message}`)
            }
            
            setDone(() => true)
        } catch (error) {
            console.log("Error: ", error)
            notify("error", `${error.message}`)
            setVerifyModal(() => false)
        }
    };

  return (
    <>
        <div className={`${styles.registerHero} ${routeStyle(routerPath, styles)}`}>
            <div className={styles.gradientOverlay}></div>
            <img 
                className={styles.image}
                src={"https://drive.google.com/uc?export=download&id=1a4ZAkNpBf_yqdqXmi5EPEjy1VLvXElDw"}
                alt=""
                width={2048}
                height={1366}
            />
            <div className={styles.brief}>
                <span className={styles.brief1}>Register</span>
                <span className={styles.brief2}>Join our community of savvy investors and discover the seamless world of tokenized mutual funds. By creating an account with us, you&apos;re taking the first step towards secure, smart and sustainable investments.</span>
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.register}>
                <AccountCircleIcon className={styles.icon} />
                <form onSubmit={(e) => handleRegistration(e)}>
                    <div className={styles.fullName}>
                        <PersonIcon className={styles.nameIcon} />
                        <input
                            placeholder="Full Name"
                            type="text"
                            onChange={(e) => setFullName(capitalizeFirstLetter(e.target.value))}
                            value={fullName}
                        />
                    </div>
                    <div className={styles.emailId}>
                        <EmailIcon className={styles.emailIcon} />
                        <input
                            placeholder="Email Address"
                            type="email"
                            onChange={(e) => setEmailAddress(e.target.value)}
                            value={emailAddress}
                        />
                    </div>
                    <div className={styles.investorType}>
                        <SwitchAccountIcon className={styles.investorIcon} />
                        <select value={selectedInvestor} onChange={(e) => handleSelectInvestor(e)}>
                            <option value={''}>Investor Type</option>
                            <option value={"Individual"}>Individual</option>
                            <option value={"Institution"}>Institution</option>
                        </select>
                    </div>
                    <div className={styles.country}>
                        <FlagIcon className={styles.countryIcon} />
                        <select value={selectedCountry} onChange={handleSelectCountry}>
                            <option value={""}>Country</option>
                            {countryList.map((country, cid) => (
                                <option value={country} key={cid}>{country}</option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.password}>
                        <LockIcon className={styles.lockIcon} />
                        <input
                            placeholder="Password"
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
                    <div className={styles.resetPassword}>
                        <LockIcon className={styles.lockIcon} />
                        <input
                            placeholder="Confirm Password"
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
                    <div className={styles.referrerId}>
                        <PersonIcon className={styles.nameIcon} />
                        <input
                            placeholder="Referrer ID"
                            type="text"
                            onChange={(e) => setReferrerId(e.target.value)}
                            value={referrerId === "0" ? "" : referrerId}
                        />
                    </div>
                    <button>Register</button>
                </form>
                <div className={styles.brief}>
                    <div className={styles.brief1}>
                        <span>Already have an account?</span>
                        <button onClick={() => router.push("/login")}>Sign In</button>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${verifyModal ? styles.activeVerifyModal : styles.inActiveVerifyModal}`} >
            {done ? (
                <div className={styles.container}>
                <CloseIcon className={styles.closeIcon} onClick={() => {
                    setVerifyModal(!verifyModal)
                    window.location.reload()
                }} />
                <span className={styles.span1}>A verification link has been sent to your email, check your inbox/spam</span>
                <div className={styles.imageDiv}>
                    <img 
                        className={styles.image}
                        src={"https://drive.google.com/uc?export=download&id=1l6toWHyg0Mht8CwtLmm0g_C3AfmFjUIN"}
                        alt=""
                        width={2048}
                        height={1639}
                    />
                </div>
                <span className={styles.span2}>Verify your email address to continue registration</span>
            </div>
            ) : (
                <Loading />
            )}
        </div>
    </>
  );
};

export default Register;