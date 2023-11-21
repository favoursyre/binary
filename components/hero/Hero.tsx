"use client"
///Hero component

///Libraries -->
import styles from "./hero.module.scss"
//import Image from "next/image";
import { companyName } from "../../config/utils"

///Commencing the code 

/**
 * @title Hero Component
 * @returns The Hero component
 */
const Hero = () => {
  //console.log('Current page:', routerPath);

  return (
    <div className={styles.main}>
        <div className={styles.gradientOverlay}></div>
        <img 
            className={styles.image}
            src={"https://drive.google.com/uc?export=download&id=1g4TFVlmEsL9B6tDBASAUs1z66rns5qhl"}
            alt=""
            width={2048}
            height={1366}
        />
        <div className={styles.brief}>
            <span className={styles.brief1}>At {companyName} you&apos;re more than just an Investor, you&apos;re an Owner.</span>
            <span className={styles.brief2}>{companyName} isn&apos;t owned by public shareholders, It&apos;s owned by the people who invest in our Tokenized Mutual Funds.
            <br />
            <br />
            Our owners have access to personalized financial advice, high-quality diversified investments, top-notch risk management solutions, retirement settlements and relevant market insights that help you build a better and happier future for you and those you love.</span>
        </div>
    </div>
  );
};

export default Hero;