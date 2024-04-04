"use client"
///Stat component

///Libraries -->
import styles from "./stat.module.scss"
import PaidIcon from '@mui/icons-material/Paid';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import BeenhereIcon from '@mui/icons-material/Beenhere';

///Commencing the code 

/**
 * @title Stat Component
 * @returns The Stat component
 */
const Stat = () => {
  //console.log('Current page:', routerPath);

  return (
    <div className={styles.main}>
        <div className={styles.investment}>
            <div className={styles.icon}><PaidIcon className={styles.iconTag} /></div>
            <div className={styles.brief}>
                <span className={styles.brief1}>$70B+</span>
                <span className={styles.brief2}>Mutual Funds Size</span>
            </div>
        </div>
        <div className={styles.clients}>
            <div className={styles.icon}><SentimentSatisfiedAltIcon className={styles.iconTag} /></div>
            <div className={styles.brief}>
                <span className={styles.brief1}>30M+</span>
                <span className={styles.brief2}>Satisfied Clients</span>
            </div>
        </div>
        <div className={styles.experience}>
            <div className={styles.icon}><BeenhereIcon className={styles.iconTag} /></div>
            <div className={styles.brief}>
                <span className={styles.brief1}>7+ Years</span>
                <span className={styles.brief2}>Management Experience</span>
            </div>
        </div>
    </div>
  );
};

export default Stat;