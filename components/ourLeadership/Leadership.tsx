"use client"
///Leadership component

///Libraries -->
import styles from "./leadership.module.scss"
import { useRouter, usePathname } from 'next/navigation';
import { routeStyle, toKebabCase } from "@/config/utils";
import { leaders } from "@/config/database";
//import Image from "next/image";
//import { useState, MouseEvent } from "react";
import LearnMoreAboutUs from "../learnMoreAboutUs/LearnMore";
//import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

///Commencing the code 

/**
 * @title Leadership Component
 * @returns The Our Leadership component
 */
const OurLeadership = () => {
    //const router = useRouter()
    const routerPath = usePathname();

    ///This function is triggered for the bio
    // const openBio = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, name: string) => {
    //     e.preventDefault()

    //     //console.log("Name: ", name)
    //     router.push(`/about-us/our-leadership/${name}`)
    // }

  return (
    <>
        <div className={`${styles.leadershipHero} ${routeStyle(routerPath, styles)}`}>
            <div className={styles.gradientOverlay}></div>
            <img 
                className={styles.image}
                src={"https://drive.google.com/uc?export=download&id=1Wgx--ellkwhHrFpnjRXxmIEFvt-GxKVX"}
                alt=""
                width={2048}
                height={1298}
            />
            <div className={styles.brief}>
                <span className={styles.brief1}>Our Leadership</span>
                <span className={styles.brief2}>We proudly introduce the brilliant minds steering our ship, guiding us toward new horizons in the world of tokenized mutual funds; they are architects of financial evolution, each member bringing a wealth of experience, passion and foresight to redefine the investment paradigms. Explore their profiles and discover the driving force behind our commitment to excellence and your financial success.</span>
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.leaders}>
                {leaders.map((leader, id) => (
                    <div className={styles.leader} key={id}>
                        <div className={styles.imageDiv}>
                            <img 
                                className={styles.image}
                                src={leader.image.src}
                                alt=""
                                width={leader.image.width}
                                height={leader.image.height}
                            />
                        </div>
                        <span className={styles.name}>{leader.name}</span>
                        <span className={styles.role}>{leader.role}</span>
                        {/* <button className={styles.more} onClick={(e) => openBio(e, toKebabCase("Cabella Fisherman"))}>
                            <KeyboardArrowRightIcon className={styles.icon} />
                            <span>Read bio</span>
                        </button> */}
                    </div>
                ))}
            </div>
        </div>
        <LearnMoreAboutUs name={"Our Leadership"} />
    </>
  );
};

export default OurLeadership;