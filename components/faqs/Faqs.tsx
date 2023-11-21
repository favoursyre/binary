"use client"
///FAQs component

///Libraries -->
import styles from "./faqs.module.scss"
import { useRouter, usePathname } from 'next/navigation';
import Link from "next/link";
import { faqs } from "@/config/database";
import { routeStyle } from "@/config/utils";
//import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

///Commencing the code 

/**
 * @title FAQs Component
 * @returns The FAQs component
 */
const FAQs = () => {
    const routerPath = usePathname();
    const [activeHeading, setActiveHeading] = useState(0);

    ///This function triggers when someone opens an accordian
  const handleHeadingClick = (index: any) => {
    setActiveHeading(index === activeHeading ? null : index);
  };

  return (
    <>
        <div className={`${styles.faqsHero} ${routeStyle(routerPath, styles)}`}>
            <div className={styles.gradientOverlay}></div>
            <img 
                className={styles.image}
                src={"https://drive.google.com/uc?export=download&id=1IUijgKEBpZqmRs4uL7lezKLijukfwlnV"}
                alt=""
                width={2048}
                height={1366}
            />
            <div className={styles.brief}>
                <span className={styles.brief1}>FAQs</span>
                <span className={styles.brief2}>Curiosity fuels growth and we understand that every investor&apos;s path is paved with questions. 
                Here, we unravel the complexities, demystify the jargon and provide clear, concise answers to your most pressing queries.
                Whether you&apos;re a seasoned investor or taking your first steps into the realm of decentralized finance, consider this your compass in the ever-evolving landscape of modern investments — let&apos;s navigate the world of financial possibilities together.
                </span>
            </div>
        </div>
        <div className={styles.faqMain}>
            <div className={styles.accordian}>
                {faqs.map((faq, index) => ( 
                    <div key={index} className={`${styles.accordianItem} ${activeHeading === index ? styles.activeAccordian : styles.inactiveAccordian}`}>
                        <button
                            className={`${styles.question} ${activeHeading === index ? styles.activeQuestion : styles.inactiveQuestion}`}
                            onClick={() => handleHeadingClick(index)}
                        >
                            {faq.question}
                            <AddIcon className={`${activeHeading === index ? styles.activeSymbol : styles.inactiveSymbol}`} />
                        </button>
                        <div className={`${styles.answer} ${activeHeading === index ? styles.answerActive : ''}`}>
                            {faq.answer} {index === 17 ? <Link href="/terms-of-use/#account-security"><span>Learn more</span></Link> : (<></>)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  );
};

export default FAQs;