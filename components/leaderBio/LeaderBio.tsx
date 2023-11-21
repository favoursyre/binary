"use client"
///Leadership bio component

///Libraries -->
import styles from "./bio.module.scss"
import { useRouter, usePathname } from 'next/navigation';
import { routeStyle } from "@/config/utils";
//import Image from "next/image";
import { ILeader } from "@/config/interfaces";

///Commencing the code 

/**
 * @title Leadership Component
 * @returns The Our Leadership component
 */
const LeaderBio = ({ leader }: { leader: ILeader }) => {
    const router = useRouter()
    const routerPath = usePathname();
    //const [leader, setLeader] = useState<ILeader>(leader_)
    console.log("Leader: ", leader)
    

  return (
    <>
        <div className={`${styles.leaderHero} ${routeStyle(routerPath, styles)}`}>
            <div className={styles.gradientOverlay}></div>
            {/* <Image 
                className={styles.image}
                src={ziImage}
                alt=""
                //width={2048}
                //height={1366}
            /> */}
            <div className={styles.brief}>
                <span className={styles.brief1}>{leader.name}</span>
                <span className={styles.brief2}>{leader.role}</span>
            </div>
        </div>
        <div className={styles.container}>
            <span className={styles.bio} dangerouslySetInnerHTML={{ __html: leader.bio }}></span>
        </div>
    </>
  );
};

export default LeaderBio;