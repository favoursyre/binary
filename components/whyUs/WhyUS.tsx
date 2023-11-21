"use client"
///Why Us component

///Libraries -->
import styles from "./whyUs.module.scss";
import { useRouter } from 'next/navigation';
import { companyName } from "@/config/utils";
import SecurityIcon from '@mui/icons-material/Security';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

///Commencing the code 

/**
 * @title Why Us Component
 * @returns The Why Us component
 */
const WhyUs = () => {
    const router = useRouter()
  //console.log('Current page:', routerPath);

  return (
    <div className={styles.main}>
        <div className={styles.brief}>
            <span className={styles.brief1}>Here are a few reasons why you should choose {companyName}</span>
            <span className={styles.brief2}>The most trusted Tokenized Mutual Funds</span>
        </div>
        <div className={styles.reason}>
            <div className={styles.reason1}>
                <SecurityIcon className={styles.icon} />
                <div className={styles.text}>
                    <div className={styles.text1}>Secure</div>
                    <div className={styles.text2}>Your tokens are kept safe by industry-leading security measures.</div>
                    <button className={styles.text3} onClick={() => router.push("/security")}>
                        <span>Learn more</span> 
                        <ArrowForwardIcon className={styles.arrowIcon} />
                    </button>
                </div>
            </div>
            <div className={styles.reason2}>
                <VerifiedUserIcon className={styles.icon} />
                <div className={styles.text}>
                    <div className={styles.text1}>Compliance</div>
                    <div className={styles.text2}>We comply with the same AML and KYC regulations your local bank does.</div>
                    <button className={styles.text3} onClick={() => router.push("/compliance")}>
                        <span>Learn more</span> 
                        <ArrowForwardIcon className={styles.arrowIcon} />
                    </button>
                </div>
            </div>
            <div className={styles.reason3}>
                <PriceCheckIcon className={styles.icon} />
                <div className={styles.text}>
                    <div className={styles.text1}>Professional Management</div>
                    <div className={styles.text2}>Our top-notch risk management measures are designed to protect your assets.</div>
                    <button className={styles.text3} onClick={() => router.push("/professional-management")}>
                        <span>Learn more</span> 
                        <ArrowForwardIcon className={styles.arrowIcon} />
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default WhyUs;