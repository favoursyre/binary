"use client"
///Journey component

///Libraries -->
import styles from "./journey.module.scss"
//import Image from "next/image";
import { annualPercentage, companyName, minInvestAmount, referralBonusPercent } from "@/config/utils";

///Commencing the code 

/**
 * @title Journey Component
 * @returns The Journey component
 */
const Journey = () => {

  return (
    <div className={styles.main}>
        <div className={styles.heading}>Here&apos;s how you can get on board</div>
        <div className={styles.section1}>
            <div className={styles.step1}>
                <div className={styles.step}>Step 1</div>
                <div className={styles.title}>Create Account</div>
                <div className={styles.card}>
                    <div className={styles.imageDiv}>
                        <img 
                            className={styles.image}
                            src={"https://drive.google.com/uc?export=download&id=1a4ZAkNpBf_yqdqXmi5EPEjy1VLvXElDw"}
                            alt=""
                            width={2048}
                            height={1366}
                        />
                    </div>
                    <div className={styles.brief}>Begin your investment journey by registering an account on our user-friendly platform. Our intuitive interface ensures a seamless signup process, allowing you to create an account swiftly and hassle-free.</div>
                </div>
            </div>
            <div className={styles.step2}>
                <div className={styles.step}>Step 2</div>
                <div className={styles.title}>Verify Identity</div>
                <div className={styles.card}>
                    <div className={styles.imageDiv}>
                        <img 
                            className={styles.image}
                            src={"https://drive.google.com/uc?export=download&id=1oKeqFuGe41MjQFaYYYvfwq8NtFM1UIPs"}
                            alt=""
                            width={2048}
                            height={1365}
                        />
                    </div>
                    <div className={styles.brief}>To maintain the utmost security and compliance with KYC, we require identity verification. Our robust verification process ensures that your investments are protected, and you can confidently engage in financial transactions on our platform.</div>
                </div>
            </div>
            <div className={styles.step3}>
                <div className={styles.step}>Step 3</div>
                <div className={styles.title}>Buy {companyName} Token</div>
                <div className={styles.card}>
                    <div className={styles.imageDiv}>
                        <img 
                            className={styles.image}
                            src={"https://drive.google.com/uc?export=download&id=1G68RjWAOVMJQvseZX0lphqOsI5kbnVs4"}
                            alt=""
                            width={2048}
                            height={1435}
                        />
                    </div>
                    <div className={styles.brief}>Once your identity is verified, you can dive into the world of our tokenized mutual funds with a minimum of ${minInvestAmount}. Purchase tokens of our company with ease with any of the crypto that we accept as a means of payment by investing an amount you&apos;re comfortable with through our transparent purchasing system.</div>
                </div>
            </div>
        </div>
        <div className={styles.section2}>
            <div className={styles.step4}>
                <div className={styles.step}>Step 4</div>
                <div className={styles.title}>Earn Dividends</div>
                <div className={styles.card}>
                    <div className={styles.imageDiv}>
                        <img 
                            className={styles.image}
                            src={"https://drive.google.com/uc?export=download&id=1ZGEye-WzFeEwzquQUvDPK_yxFwA35Hzf"}
                            alt=""
                            width={2048}
                            height={1365}
                        />
                    </div>
                    <div className={styles.brief}>Watch your investments grow as you earn dividends of {annualPercentage}% annually on your {companyName} token. Our expertly managed mutual funds are designed to generate substantial returns, providing you with a reliable source of passive income. Dividends are paid monthly.</div>
                </div>
            </div>
            <div className={styles.step5}>
                <div className={styles.step}>Step 5</div>
                <div className={styles.title}>Referral Bonus</div>
                <div className={styles.card}>
                    <div className={styles.imageDiv}>
                        <img 
                            className={styles.image}
                            src={"https://drive.google.com/uc?export=download&id=1jJ-USN7JWPBELrmafaYNnw2_99mls1MS"}
                            alt=""
                            width={2048}
                            height={1250}
                        />
                    </div>
                    <div className={styles.brief}>Share the wealth with your friends and family! Introduce others to {companyName} and earn referral bonuses of {referralBonusPercent}%. It&apos;s our way of thanking you for being part of our community and helping others discover the benefits of investing with us.</div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Journey;