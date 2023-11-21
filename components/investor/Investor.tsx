"use client"
///Investors component

///Libraries -->
import styles from "./investor.module.scss"
import { investors } from "@/config/database";
//import Image from "next/image";

///Commencing the code 

/**
 * @title Investors Component
 * @returns The Investors component
 */
const Investor = () => {

  return (
    <div className={styles.main}>
        <div className={styles.heading}>Some of our esteemed partners</div>
        <div className={styles.investors}>
            {investors.map((investor, id) => (
                <div className={styles.imageDiv} key={id} >
                    <img 
                        className={styles.image}
                        src={investor.image.src}
                        alt=""
                        width={investor.image.width}
                        height={investor.image.height}
                    />
                </div>
            ))}
        </div>
    </div>
  );
};

export default Investor;