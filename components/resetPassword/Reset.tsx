"use client"
///Reset password component

///Libraries -->
import styles from "./reset.module.scss"
import { useRouter, usePathname } from 'next/navigation';
import { routeStyle, domainName } from "@/config/utils";
import { notify } from "@/config/clientUtils";
//import Image from "next/image";
import { useState, FormEvent } from "react";
import { IAccount } from "@/config/interfaces";
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockResetIcon from '@mui/icons-material/LockReset';
import Loading from "../loadingCircle/Circle";

///Commencing the code 

/**
 * @title Reset password Component
 * @returns The Reset password component
 */
const ResetPassword = ({ account_ }: { account_: IAccount }) => {
    const router = useRouter()
    const routerPath = usePathname();
    const [account, setAccount] = useState<IAccount>(account_)
    const [password1, setPassword1] = useState<string>("")
    const [password2, setPassword2] = useState<string>("")
    const [visible1, setVisible1] = useState<boolean>(false)
    const [visible2, setVisible2] = useState<boolean>(false)
    const [forgotModal, setForgotModal] = useState<boolean>(false)

    ///This function is trigerred when the reset button is clicked
    const resetPassword = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        ///Validating the required args
        if (!password1) {
            notify("error", "Password is required")
            return
        } else if (!password2) {
            notify("error", "Confirm Password is required")
            return
        } else if (password1 !== password2) {
            notify("error", "Passwords doesn't match")
            return
        } 

        setForgotModal(() => !forgotModal)
        const emailAddress: string = account?.emailAddress
        const password: string = password1
        //Send the account to the backend
        try {
            //console.log("Account client: ", account)
            const res = await fetch(`${domainName}/api/account/password?action=reset`, 
            {
                method: 'PATCH',
                body: JSON.stringify({ emailAddress, password }),
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
                router.push("/login")
            } else {
                throw new Error(`${data.message}`)
            }
            setForgotModal(() => false)
        } catch (error) {
            console.log("Error: ", error)
            notify("error", `${error.message}`)
            setForgotModal(() => false)
        } 
    }

  return (
    <>
        <div className={`${styles.resetHero} ${routeStyle(routerPath, styles)}`}>
            <div className={styles.gradientOverlay}></div>
            <img 
                className={styles.image}
                src={"https://drive.google.com/uc?export=download&id=1ylwbDdAsMk7M2hPmnbOSIe2O01Ju_jmU"}
                alt=""
                width={2048}
                height={1366}
            />
            <div className={styles.brief}>
                <span className={styles.brief1}>Reset Password</span>
                <span className={styles.brief2}>Hi {account?.fullName}, Let&apos;s continue this remarkable journey together as you reset your password and regain access to your account.</span>
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.login}>
                <LockResetIcon className={styles.icon} />
                <form onSubmit={(e) => resetPassword(e)}>
                    <div className={styles.password}>
                        <LockIcon className={styles.lockIcon} />
                        <input
                            placeholder="New Password"
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
                    <button>Reset Password</button>
                </form>
            </div>
        </div>
        <div className={`${forgotModal ? styles.activeForgotModal : styles.inActiveForgotModal}`} >
            <Loading />
        </div>
    </>
  );
};

export default ResetPassword;