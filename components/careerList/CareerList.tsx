"use client"
///Careers component

///Libraries -->
import styles from "./careerList.module.scss"
import { useRouter, usePathname } from 'next/navigation';
import { companyName, yearCreated, routeStyle } from "@/config/utils";
//import Image from "next/image";
//import { useState, FormEvent } from "react";
//import companyImage from "../../public/images/company.jpg"
//import { IWhatWeDo } from "@/config/interfaces";
//import LearnMoreAboutUs from "../learnMoreAboutUs/LearnMore";

///Commencing the code 


/**
 * @title Careers Component
 * @returns The Careers component
 */
const Careers = () => {
    const router = useRouter()
    const routerPath = usePathname();

  return (
    <>
        <div className={`${styles.careerHero} ${routeStyle(routerPath, styles)}`}>
            <div className={styles.gradientOverlay}></div>
            <img 
                className={styles.image}
                src={""}
                alt=""
                // layout="fill"
                // objectFit="cover"
                // objectPosition="center 65%"
                //width={2048}
                //height={1366}
            />
            <div className={styles.brief}>
                <span className={styles.brief1}>Careers</span>
                <span className={styles.brief2}>Explore our diverse opportunities, embrace challenges and embark on a rewarding career path within the thriving world of Web3 and blockchain technology.</span>
            </div>
        </div>
    </>
  );
};

export default Careers;