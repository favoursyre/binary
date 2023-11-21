"use client"
///Career Info component

///Libraries -->
import styles from "./company.module.scss"
import { useRouter, usePathname } from 'next/navigation';
import { companyName, yearCreated, routeStyle } from "@/config/utils";
//import Image from "next/image";
//import { useState, FormEvent } from "react";
//import companyImage from "../../public/images/company.jpg"
//import { IWhatWeDo } from "@/config/interfaces";
//import LearnMoreAboutUs from "../learnMoreAboutUs/LearnMore";

///Commencing the code 


/**
 * @title Career Info Component
 * @returns The Career Info component
 */
const CareerInfo = () => {
    const router = useRouter()
    const routerPath = usePathname();

  return (
    <>
        <div className={`${styles.careerInfoHero} ${routeStyle(routerPath, styles)}`}>
            <div className={styles.gradientOverlay}></div>
            <img 
                className={styles.image}
                src={""}
                alt=""
                //layout="fill"
                //objectFit="cover"
                //objectPosition="center 65%"
                //width={2048}
                //height={1366}
            />
            <div className={styles.brief}>
                <span className={styles.brief1}>Careers</span>
                <span className={styles.brief2}>Explore our diverse opportunities, embrace challenges and embark on a rewarding career path within the thriving world of Web3 and blockchain technology.</span>
            </div>
        </div>
        <div className={styles.container}>
            <span className={styles.info}>
                Note to all applicants: We are a remote-first team, however, the majority of our employees are based in the EMEA region, so we have a preference for candidates who can work remotely in the EMEA time zones.

                Please also note: as a team who are looking to lead the way in Web 3, we require all applicants to have previous experience in the Web 3 / Blockchain Industry

                Join a leading Web 3 company that&apos;s enabling and powering the builders of the new internet!

                Biconomys foundations were built on making Web 3 accessible and simple to all. We do this by making blockchain transactions seamless, and by doing so, we are accelerating the mainstream adoption of Web 3.

                That&apos;s why ease and accessibility are imperative to our innovations and solutions. While we build for developers, our work radically simplifies the overall user experience on Web 3. By abstracting away blockchain complexities, the end user enjoys the benefits of Web 3 with the familiarity of Web 2.

                We are already solving for some of the leading players in the blockchain space & are emerging as the default transaction stack for Web 3. Some of our numbers:

                - Processed 38+ million transactions
                - Facilitating over $441 million + of transfer volume
                - Saving users over $5.6 million in gas fees!
            </span>
        </div>
    </>
  );
};

export default CareerInfo;