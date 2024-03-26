"use client"
///Professional managed assets component

///Libraries -->
import styles from "./professional.module.scss"
import Image from "next/image";

///Commencing the code 

/**
 * @title Our principle Component
 * @returns The Our principle component
 */
const Professional = () => {

  return (
    <>
        <div className={`${styles.professionalHero}`}>
            <div className={styles.gradientOverlay}></div>
            <Image 
                className={styles.image}
                src={"https://drive.google.com/uc?export=download&id=1ITwhTmvvEOU4uB9f8ZpiJ3mOzmvEZzYO"}
                alt=""
                width={2048}
                height={1230}
            />
            <div className={styles.brief}>
                <span className={styles.brief1}>Professional Management</span>
                <span className={styles.brief2}>Your investments are entrusted to the hands of seasoned professionals and masters of the financial craft. With a blend of expertise and innovative risk management, our dedicated team curates investment strategies that stand the test of time.
                </span>
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.expert}>
                    <div className={styles.brief}>
                        <span className={styles.title}>Expert Oversight</span>
                        <span className={styles.text}>
                        Your investments are entrusted to skilled financial architects equipped with a wealth of experience. Our experts continuously monitor markets, swiftly adapting to trends, and foreseeing potential shifts, ensuring your funds are always one step ahead. Invest with confidence, knowing that your resources are in the hands of professionals who are as committed to your financial success
                        </span>
                    </div>
                    <div className={styles.imageDiv}>
                        <Image 
                            className={styles.image}
                            src={"https://drive.google.com/uc?export=download&id=1CFAU5USv1h2XaSQ4r7F1ScK-tciPfbix"}
                            alt=""
                            width={2048}
                            height={1365}
                        />
                    </div>
            </div>
            <div className={styles.diversification}>
                    <div className={styles.brief}>
                        <span className={styles.title}>Smart Diversification</span>
                        <span className={styles.text}>
                        Our team of financial virtuosos curates your portfolio with a blend of artistry and analytics, diversifying your investments across a spectrum of assets. This strategic approach optimizes your potential returns while mitigating risks. We continually explore new horizons, adapting to the evolving digital landscape and securing your financial future with cutting-edge solutions.
                        </span>
                    </div>
                    <div className={styles.imageDiv}>
                        <Image 
                            className={styles.image}
                            src={"https://drive.google.com/uc?export=download&id=1Ufj769R0wPMUtxycT6JlUm8TQ_qaaTPj"}
                            alt=""
                            width={2048}
                            height={1266}
                        />
                    </div>
            </div>
            <div className={styles.risk}>
                    <div className={styles.brief}>
                        <span className={styles.title}>Risk Management</span>
                        <span className={styles.text}>
                        In a dynamic financial landscape, risk is ever-present. Our team of seasoned professionals employs top-tier risk management solutions to ensure that your investments thrive even in uncertain times. We don&apos;t just mitigate risks; we transform them into opportunities for growth. Every move is a carefully calculated step toward your financial goals.
                        </span>
                    </div>
                    <div className={styles.imageDiv}>
                        <Image 
                            className={styles.image}
                            src={"https://drive.google.com/uc?export=download&id=1mJyhofEmhQqfVwwTAxUYXcZ5Y5KrtFUw"}
                            alt=""
                            width={2048}
                            height={1132}
                        />
                    </div>
            </div>
        </div>
    </>
  );
};

export default Professional;