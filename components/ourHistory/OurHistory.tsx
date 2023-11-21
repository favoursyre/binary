"use client"
///Our history component

///Libraries -->
import styles from "./history.module.scss"
import { companyName } from "@/config/utils";
import { milestones } from "@/config/database";
//import Image from "next/image";
import LearnMoreAboutUs from "../learnMoreAboutUs/LearnMore";

///Commencing the code 

/**
 * @title Our history Component
 * @returns The Our history component
 */
const OurHistory = () => {

  return (
    <>
        <div className={`${styles.historyHero}`}>
            <div className={styles.gradientOverlay}></div>
            <img 
                className={styles.image}
                src={"https://drive.google.com/file/d/1QSoiXVXYKXR2EPFOSe57JD-tZX2p2Qcl/view?usp=drive_link"}
                alt=""
                width={2048}
                height={1365}
            />
            <div className={styles.brief}>
                <span className={styles.brief1}>Our History</span>
                <span className={styles.brief2}>In the dynamic landscape of decentralized finance, our story begins with a shared vision among pioneers and innovators. {companyName} was born from the convergence of technological brilliance and financial expertise. Founded in the heart of the digital revolution, we embarked on a journey to redefine the future of investments.
                With every challenge we&apos;ve overcomed and every innovation embraced, we have grown into a symbol of trust and excellence. We are not just witnesses to history; we are the architects, shaping the financial future one block at a time.
                </span>
            </div>
        </div>
        <div className={styles.journey}>
            <span className={styles.heading}>See how {companyName}&apos;s journey has unfolded</span>
            <div className={styles.milestones}>
                {milestones.map((milestone, id) => (
                    <div className={styles.milestone} key={id}>
                        <div className={styles.heading}>
                            <span className={styles.year}>{milestone.year}</span>
                            <span className={styles.title}>{milestone.title}</span>
                        </div>
                        <span className={styles.story}>{milestone.story}</span>
                    </div>
                ))}
            </div>
        </div>
        <LearnMoreAboutUs name={"Our History"} />
    </>
  );
};

export default OurHistory;