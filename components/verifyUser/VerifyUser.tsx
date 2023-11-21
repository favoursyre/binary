"use client"
///Admin verify user component

///Libraries -->
import styles from "./verify.module.scss"
//import Image from "next/image";
import { useState, MouseEvent } from "react";
import { domainName } from "../../config/utils"
import { notify } from "@/config/clientUtils";
import { IAccount, IVerification } from "@/config/interfaces"

///Commencing the code 

/**
 * @title Admin verify user  Component
 * @returns The Admin verify user  component
 */
const VerifyUser = ({ account_ }: { account_: IAccount }) => {
  const [account, setAccount] = useState<IAccount>(account_)
  //console.log('Current page:', routerPath);

  ///Verify user
  const verifyUser = async (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault()

    const verification: IVerification = { status: true, document: account?.verification?.document, file: account?.verification?.file }
    const id = account._id

    try {
        console.log("Account client: ", account)
        const res = await fetch(`${domainName}/api/account/${id}?action=verify-user`, {
            method: 'PATCH',
            body: JSON.stringify({ verification }),
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
    } catch (error) {
        console.log("Error: ", error.message)
        notify("error", `${error.message}`)
    }
  }

  return (
    <div className={styles.main}>
        <div className={styles.profile}>
            <span><strong>Name:</strong>{account?.fullName}</span>
            <span><strong>Document Type:</strong>{account?.verification?.document}</span>
            <div className={styles.imageDiv}>
                <img 
                    className={styles.image}
                    src={account?.verification?.file?.url}
                    alt=""
                    width={account?.verification?.file?.width}
                    height={account?.verification?.file?.height}
                />
            </div>
        </div>
        <button onClick={(e) => verifyUser(e)}>Verify User</button>
    </div>
  );
};

export default VerifyUser;