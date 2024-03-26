"use client"
///Our foundation component

///Libraries -->
import styles from "./foundation.module.scss"
import { useRouter, usePathname } from 'next/navigation';
import { companyName,  routeStyle } from "@/config/utils";
import Image from "next/image";
import RemoveIcon from '@mui/icons-material/Remove';
import LearnMoreAboutUs from "../learnMoreAboutUs/LearnMore";
import { endeavors } from "@/config/database";

///Commencing the code 

/**
 * @title Our foundation Component
 * @returns The Our foundation component
 */
const OurFoundation = () => {
    //const router = useRouter()
    const routerPath = usePathname();

  return (
    <>
        <div className={`${styles.foundationHero} ${routeStyle(routerPath, styles)}`}>
            <div className={styles.gradientOverlay}></div>
            <Image 
                className={styles.image}
                src={"https://drive.google.com/uc?export=download&id=1DS4d_ipXJY8QoVmV1NlJnLhRqOw4BuzQ"}
                alt=""
                width={2048}
                height={1366}
            />
            <div className={styles.brief}>
                <span className={styles.brief1}>Our Foundation</span>
                <span className={styles.brief2}>At {companyName}, we are driven by a profound sense of responsibility to create positive ripples of change across the globe. Our commitment finds its expression through {companyName} Foundation, the heart of our philanthropic endeavors. Rooted in the belief that businesses should be a force for good, our foundation has been instrumental in catalyzing transformative initiatives worldwide.
                <br />
                Every investment made with us is not just a financial decision; it&apos;s a contribution to a brighter, more inclusive future. Join us in our journey of philanthropy and innovation, where each choice echoes with the promise of a better tomorrow for all.</span>
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.endeavors}>
                {endeavors.map((endeavor, id) => (
                    <div className={styles.endeavor} key={id}>
                        <div className={styles.heading}>
                            <RemoveIcon className={styles.bullet} />
                            <span className={styles.title}>{endeavor.title}</span>
                        </div>
                        <span className={styles.text}>{endeavor.text}</span>
                    </div>
                ))}
            </div>
        </div>
        <LearnMoreAboutUs name={"Our Foundation"} />
    </>
  );
};

export default OurFoundation;