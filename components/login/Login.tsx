"use client"
///Login component

///Libraries -->
import styles from "./login.module.scss"
import { useRouter, usePathname } from 'next/navigation';
import { domainName, sleep, routeStyle, accountIdKey, requestTimeKey } from "@/config/utils";
import { getItem, notify, removeItem, setItem } from "@/config/clientUtils";
//import Image from "next/image";
import { useState, FormEvent, useEffect, MouseEvent } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockResetIcon from '@mui/icons-material/LockReset';
import CloseIcon from '@mui/icons-material/Close';
import validator from "validator"
import SecurityIcon from '@mui/icons-material/Security';
import Loading from "../loadingCircle/Circle";

///Commencing the code 

/**
 * @title Login Component
 * @returns The Login component
 */
const Login = () => {
    const router = useRouter()
    const routerPath = usePathname();
    const [emailAddress, setEmailAddress] = useState<string>("");
    const [password, setPassword] = useState<string>("")
    const [visible, setVisible] = useState<boolean>(false)
    const [rememberMe, setRememberMe] = useState<boolean>(false)
    const [loginModal, setLoginModal] = useState<boolean>(false)
    const [reset, setReset] = useState<boolean>(false)
    const [link, setLink] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [loginLoading, setLoginLoading] = useState<boolean>(false)
    const [requestCountdown, setRequestCountDown] = useState<number>(0)
    const [id, setId] = useState<number>(0)

    //Checking if an account already exist
    useEffect(() => {
        
        const id = getItem(accountIdKey);
        //console.log('ID:', id);
      
        if (id !== null) {
          //console.log('Id detected');
          notify("info", "Redirecting you to your dashboard")
          router.push(`/account/dashboard/${id}`)
        }
      }, [reset, link, requestCountdown]);


    ///This function is trigerred when the remember me box is checked
    const checkRememberMe = () => {
        setRememberMe(!rememberMe);
      };

    //This function executes when login form is submitted
    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("logging in")

        ///Validating the required args
        if (!emailAddress) {
            notify("error", "Email address is required")
            return
        } else if (!validator.isEmail(emailAddress)) {
            notify("error", "Email address is not valid")
            return
        } else if (!password) {
            notify("error", "Password is required")
            return
        }

        setLoginLoading(() => true)
        setLoginModal(() => !loginModal)
        //Send the account to the backend
        try {
            //console.log("Account client: ", account)
            const res = await fetch(`${domainName}/api/account/login?action=login&email=${emailAddress}&pass=${password}`, 
            {
                method: 'GET',
                //body: JSON.stringify({ emailAddress, password }),
                // headers: {
                // 'Content-Type': 'application/json',
                // },
            }
            );

            console.log("Res: ", res.ok)
            const data = await res.json();
            if (res.ok) {
                notify("success", `${data.message}`)
                console.log('Data: ', data.account)
                //window.location.reload()
                const id = data.account[0]._id
                if (rememberMe) {
                    setItem(accountIdKey, id)
                    console.log("account id saved")
                }

                router.push(`/account/dashboard/${id}`)
                setLoginModal(() => false)
                setLoginLoading(() => false)
                removeItem(requestTimeKey)
            } else {
                throw new Error(`${data.message}`)
            }
            
        } catch (error) {
            console.log("Error: ", error)
            notify("error", `${error.message}`)
            setLoginLoading(() => false)
            setLoginModal(() => false)
        } 

    };

    ///This function is trigerred when the submit button in the login modal is clicked
    const handleLoginModal = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        ///Validating the required args
        if (!emailAddress) {
            notify("error", "Email address is required")
            return
        } else if (!validator.isEmail(emailAddress)) {
            notify("error", "Email address is not valid")
            return
        }

        //setReset(() => false)
        setLoading(() => true)
        console.log("Email Addr: ", emailAddress)

        if (reset) {
            

            try {
                //console.log("Account client: ", account)
                const res = await fetch(`${domainName}/api/account/password?action=reset-link`, 
                {
                    method: 'PATCH',
                    body: JSON.stringify(emailAddress),
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
                    await sleep(2000)
                    window.location.reload()
    
                } else {
                    throw new Error(`${data.message}`)
                }
                setLoginModal(() => false)
                setLoading(() => false)
                setReset(() => false)
            } catch (error) {
                console.log("Error reset: ", error)
                notify("error", `${error.message}`)
                setLoginModal(() => false)
                setReset(() => false)
            } 
        } else if (link) {
            

            try {
                //console.log("Account client: ", account)
                const res = await fetch(`${domainName}/api/account/login?action=verify-email&email=${emailAddress}`, 
            {
                method: 'GET',
                //body: JSON.stringify({ emailAddress, password }),
                // headers: {
                // 'Content-Type': 'application/json',
                // },
            }
            );
    
                console.log("Res: ", res.ok)
                const data = await res.json();
                if (res.ok) {
                    notify("success", `${data.message}`)
                    console.log('Data: ', data)
                    await sleep(2000)
                    window.location.reload()
    
                } else {
                    throw new Error(`${data.message}`)
                }
                setLoginModal(() => false)
                setLoading(() => false)
                setLink(() => false)
            } catch (error) {
                console.log("Error link: ", error)
                notify("error", `${error.message}`)
                setLoginModal(() => false)
                setLink(() => false)
            } 
        }
        
    }

    //This button handles the reset password modal
    const loginPageModal = (
        e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent> | MouseEvent<SVGSVGElement, globalThis.MouseEvent>, 
        mode: boolean,
        action: string | null
        ) => {
        e.preventDefault()

        setLoading(() => !mode)

        if (action === "reset") {
            setReset(() => mode)
        } else if (action === "link") {
            setLink(() => mode)
        }
        

        if (!mode) {
            if (reset) {
                setReset(() => mode)
            } else if (link) {
                setLink(() => mode)
            }
        }
        
        setLoginModal(() => !loginModal)
    }

    //This counts time 
    const checkAndSaveTime = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent> | MouseEvent<SVGSVGElement, globalThis.MouseEvent>): { lastSavedTime: Date | null; countdown: number } | void => {
        e.preventDefault()
        
        const currentTime: number = new Date().getTime();
        console.log("Time: ", currentTime)
      
        const lastSavedTime = getItem(requestTimeKey)
        console.log("Last: ", lastSavedTime)
        console.log(`Countdown 1: ${requestCountdown}s`);
        console.log(`Difference: ${currentTime - lastSavedTime}`)

        
        let j: number
        //setRequestCountDown(() => j)
        if (lastSavedTime === null || (currentTime - lastSavedTime) > 90000) {
            //Saving current time
            setItem(requestTimeKey, currentTime)
            loginPageModal(e, true, "link")
            console.log("opening modal")
            //Start countdown from 60 seconds
            //let requestCountdown = 60;
            let j = 90
        setRequestCountDown(() => j)

            console.log(`Countdown 4: ${j}s`);
            //for (let i = j; i >= j; i--) {
            //    console.log(`Iteration ${i}`)
           // }
      
           const countdownInterval = setInterval(() => {
             if (j > 0) {
                
               j--;
                 //setRequestCountDown(() => requestCountdown--);
                  setRequestCountDown(() => j)
                   console.log(`Countdown 2: ${j}s`);
                    
                    console.log(`Countdown 3: ${requestCountdown}s`);
                    //setRequestCountDown(() => countdown)
              } else if (j === 0) {
                    setItem(requestTimeKey, currentTime)
                    setRequestCountDown(() => j)
                    console.log("Ended")
                    clearInterval(countdownInterval);
                }
    
          }, 1000);

            //return () => clearInterval(countdownInterval);
            //const countdownInterval = setInterval(() => {
            //    if (requestCountdown > 0) {
                
            //        setRequestCountDown(() => requestCountdown--);
                    //console.log(`Countdown 2: ${requestCountdown}s`);
                    //setRequestCountDown(() => countdown)
            //    } else {
                    
            //        clearInterval(countdownInterval);
                } else {
                    notify("info", `You would be able to re-request an email verification link in the next ${90 - Number(((currentTime - lastSavedTime) / 1000).toFixed(0))}seconds`)
                   console.log("closed")
                }
           // }, 1000);
        } 
        // if (!lastSavedTime || currentTime.getTime() - lastSavedTime.getTime() > 60000) {
        //   // Save the current time
        //   console.log('Saving current time:', currentTime.toISOString());
      
        //   // Start countdown from 60 seconds
        //   let countdown = 60;
      
        //   const countdownInterval = setInterval(() => {
        //     if (countdown > 0) {
        //       console.log(`Countdown: ${countdown}s`);
        //       countdown--;
        //     } else {
        //       clearInterval(countdownInterval);
        //     }
        //   }, 1000);
      
        //   return { lastSavedTime: currentTime, countdown };
        // } else {
        //   // Ignore the operation
        //   console.log('Ignoring operation. Last saved time:', lastSavedTime.toISOString());
        //   return { lastSavedTime, countdown: 0 };
        // }

      

  return (
    <>
        <div className={`${styles.loginHero} ${routeStyle(routerPath, styles)}`}>
            <div className={styles.gradientOverlay}></div>
            <img 
                className={styles.image}
                src={"https://drive.google.com/uc?export=download&id=1ylwbDdAsMk7M2hPmnbOSIe2O01Ju_jmU"}
                alt=""
                width={2048}
                height={1366}
            />
            <div className={styles.brief}>
                <span className={styles.brief1}>Login</span>
                <span className={styles.brief2}>Sign in to your account, Let&apos;s continue this remarkable journey together!</span>
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.login}>
                <AccountCircleIcon className={styles.icon} />
                <form onSubmit={(e) => handleLogin(e)}>
                    <div className={styles.emailId}>
                        <EmailIcon className={styles.emailIcon} />
                        <input
                            placeholder="Email ID"
                            type="email"
                            onChange={(e) => setEmailAddress(e.target.value)}
                            value={emailAddress}
                        />
                    </div>
                    <div className={styles.password}>
                        <LockIcon className={styles.lockIcon} />
                        <input
                            placeholder="Password"
                            type={visible ? 'text' : 'password'}
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                        {visible ? (
                            <VisibilityIcon className={styles.visibleIcon} onClick={() => setVisible(!visible)} />
                        ) : (
                            <VisibilityOffIcon className={styles.visibleIcon} onClick={() => setVisible(!visible)} />
                        )}
                    </div>
                    <div className={styles.remember}>
                        <input 
                            type="checkbox" 
                            id="myCheckbox" 
                            checked={rememberMe}
                            onChange={checkRememberMe}
                        />
                        <label htmlFor="myCheckbox">Remember me</label>
                    </div>
                    <button>Login</button>
                </form>
                <div className={styles.brief}>
                    <button className={styles.brief1} onClick={(e) => loginPageModal(e, true, "reset")}>Forgot password?</button>
                    <div className={styles.brief2}>
                        <span>Don&apos;t have an account?</span>
                        <button onClick={() => router.push(`/register/${id}`)}>Register</button>
                    </div>
                    <div className={styles.brief3}>
                        <button  onClick={(e) => checkAndSaveTime(e)}>{requestCountdown === 0 ? `Didn't get an email verification link?` : `Request a verification link in ${requestCountdown}secs`}</button>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className={`${loginModal ? styles.activeForgotModal : styles.inActiveForgotModal}`} >
            {!loginLoading ? (
                <div className={styles.container}>
                <CloseIcon className={styles.closeIcon} onClick={(e) => loginPageModal(e, false, null)} />
                {reset ? (
                    <LockResetIcon className={styles.icon} />
                ) : link ? (
                    <SecurityIcon className={styles.icon} /> 
                ) : (
                    <></>
                )}
                
                <div className={styles.main}>
                    {!loading ? (
                        <>
                            <span>Enter your email and we will {reset ? `send you a link to reset your password` : link ? "resend your email verification link" : ""}</span>
                            <form onSubmit={(e) => handleLoginModal(e)}>
                                <div className={styles.emailId}>
                                    <EmailIcon className={styles.emailIcon} />
                                    <input
                                        placeholder="Email ID"
                                        type="email"
                                        onChange={(e) => setEmailAddress(e.target.value)}
                                        value={emailAddress}
                                    />
                                </div>
                                <button>Submit</button>
                            </form>
                        </>
                            
                    ) : (
                        <Loading />
                    )}
                </div>
                
            </div>
            ) : (
                <Loading /> 
            )}
            
        </div>
    </>
  );
}

export default Login;