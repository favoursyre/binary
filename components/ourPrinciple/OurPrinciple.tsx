"use client"
///Our principle component

///Libraries -->
import styles from "./principle.module.scss"
//import { useRouter, usePathname } from 'next/navigation';
import RemoveIcon from '@mui/icons-material/Remove';
import { principles } from "@/config/database";
import Image from "next/image";
import LearnMoreAboutUs from "../learnMoreAboutUs/LearnMore";

///Commencing the code 


/**
 * @title Our principle Component
 * @returns The Our principle component
 */
const OurPrinciple = () => {
    // const router = useRouter()
    // const routerPath = usePathname();

  return (
    <>
        <div className={`${styles.principleHero}`}>
            <div className={styles.gradientOverlay}></div>
            <Image 
                className={styles.image}
                src={"https://drive.google.com/uc?export=download&id=1dnj-k7iGYGYuLM3j-0k3BMrYZoQznVLf"}
                alt=""
                width={2048}
                height={1365}
            />
            <div className={styles.brief}>
                <span className={styles.brief1}>Our Principles</span>
                <span className={styles.brief2}>Welcome to the heart of our philosophy. Our principles define who we are and how we serve you. These principles form the core of our ethos, shaping a trustworthy and progressive environment for our investors.
                Join us as we stand by these unwavering values, ensuring your financial aspirations find a home built on trust, sustainability and the power of the blockchain.
                </span>
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.principles}>
                {principles.map((principle, id) => (
                    <div className={styles.principle} key={id}>
                        <div className={styles.heading}>
                            <RemoveIcon className={styles.bullet} />
                            <span className={styles.title}>{principle.title}</span>
                        </div>
                        <span className={styles.text}>{principle.text}</span>
                    </div>
                ))}
            </div>
        </div>
        <LearnMoreAboutUs name={"Our Principles"} />
    </>
  );
};

export default OurPrinciple;