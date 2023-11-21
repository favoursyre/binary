"use client"
///Footer component

///Libraries -->
import styles from "./footer.module.scss"
import { useRouter, usePathname } from 'next/navigation';
import { companyName, domainName, routeStyle } from "@/config/utils";
import { notify } from "@/config/clientUtils";
import { useState, FormEvent, useEffect } from "react";
import validator from "validator";
import Loading from "../loadingCircle/Circle";
import { INews } from "@/config/interfaces";

///Commencing the code 

/**
 * @title Footer Component
 * @returns The Footer component
 */
const Footer = () => {
    const router = useRouter()
    const routerPath = usePathname();
    const [email, setEmail] = useState<string>("")
    const [verifyModal, setVerifyModal] = useState<boolean>(false)
    const [date, setDate] =  useState<number>(new Date().getFullYear())
  //console.log('Current page:', routerPath);

  ///This function is trigerred when the user subscribes to newsletter
  const subNewsLetter = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    ///Validating args
    if(!email) {
      notify("error", "Email Address is required")
      return
    } else if (!validator.isEmail(email)) {
      notify("error", "Email address is not valid")
      return
    }

    const subscriber: string = email
    const newsletter: INews = { subscriber }

    setVerifyModal(() => !verifyModal)

      //Send the order to the backend
    try {
        //console.log("Account client: ", account)
        const res = await fetch(`${domainName}/api/news/`, {
            method: 'POST',
            body: JSON.stringify(newsletter),
            headers: {
            'Content-Type': 'application/json',
            },
        });

        console.log("Res: ", res.ok)
        const data = await res.json();
        console.log("Data: ", data)
        if (res.ok) {
            notify("success", `${data.message}`)
        } else {
            throw new Error(`${data.message}`)
        }
        setVerifyModal(() => false)
        
    } catch (error) {
        console.log("Error: ", error)
        notify("error", `${error.message}`)
        setVerifyModal(() => false)
    }
  }

  return (
    <>
      <div className={`${styles.main} ${routeStyle(routerPath, styles)}`}>
          <div className={styles.top}>
            <div className={styles.brief}>
              <span className={styles.brief1}>{companyName}</span>
              <span className={styles.brief2}>
                As a global investment manager and fiduciary to our clients, our purpose at {companyName} is to help everyone experience financial well-being. We offer you more than just tokenized mutual funds; we provide a gateway to a future where investments are borderless, secured and tailored to your dreams.
              </span>
            </div>
            <div className={styles.newsletter}>
              <span className={styles.span1}>Newsletter</span>
              <span className={styles.span2}>
                Get expert tips, market updates and special offers delivered directly to your inbox. Stay informed, stay confident.
              </span>
              <form onSubmit={(e) => subNewsLetter(e)}>
                  <input  
                      type="email" 
                      placeholder="Enter your email" 
                      onChange={(e) => setEmail(() => e.target.value)}
                      value={email}
                  />
                  <button>
                      Subscribe
                  </button>
              </form>
              <span className={styles.span3}>By subscribing you agree with our Privacy Policy</span>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.section1}>
              <button onClick={() => router.push("/terms-of-use")}>Terms of Use</button>
              <button onClick={() => router.push("/privacy-policy")}>Privacy Policy</button>
            </div>
            <div className={styles.section2}>Copyright &copy; {date} {companyName}, All rights reserved</div>
          </div>
      </div>
      <div className={`${verifyModal ? styles.activeVerifyModal : styles.inActiveVerifyModal}`} >
        <Loading />
        </div>
    </>
  );
};

export default Footer;