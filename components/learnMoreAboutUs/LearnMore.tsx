"use client"
///Learn More About Us component

///Libraries -->
import styles from "./learn.module.scss"
import { useRouter, usePathname } from 'next/navigation';
import { companyName, routeStyle } from "@/config/utils";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { aboutUsLinks } from "../../config/database";

///Commencing the code 

/**
 * @title Learn More About Us Component
 * @returns The Learn More About Us component
 */
const LearnMoreAboutUs = ({ name }: { name: string }) => {
    const router = useRouter()
    const routerPath = usePathname();

  return (
    <div className={`${styles.learnMore} ${routeStyle(routerPath, styles)}`}>
      <span className={styles.heading}>Learn more about {companyName}</span>
      <div className={styles.links}>
        {aboutUsLinks.map((link, id) => (
          <button className={styles.link} key={id} style={{ display: link.name === name ? "none" : "flex"}} onClick={() => router.push(link.link)}>
            <KeyboardArrowRightIcon className={styles.icon} />
            <span>{link.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LearnMoreAboutUs;