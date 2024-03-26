"use client"
///Compliance component

///Libraries -->
import styles from "./compliance.module.scss"
import { companyName } from "@/config/utils";
import Image from "next/image";

///Commencing the code 

/**
 * @title Compliance Component
 * @returns The Compliance component
 */
const Compliance = () => {

  return (
    <>
        <div className={`${styles.complianceHero}`}>
            <div className={styles.gradientOverlay}></div>
            <Image 
                className={styles.image}
                src={"https://drive.google.com/uc?export=download&id=11at3pZT8b6Ia2SatmKCtbLtdnat5fsXq"}
                alt=""
                width={2048}
                height={1037}
            />
            <div className={styles.brief}>
                <span className={styles.brief1}>Compliance</span>
                <span className={styles.brief2}>In the digital realm of tokenized mutual funds, trust and security is paramount. Our AML and KYC Compliance isn&apos;t just a requirement; it&apos;s a testament to our dedication.
                </span>
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.compliance}>
                <span className={styles.heading}>This is {companyName}&apos;s approach to Anti-Money Laundering (AML) and Know-Your-Customer (KYC) processes</span>
                <span className={styles.text}>
                Money laundering is the process whereby the financial proceeds of a crime are disguised to give the impression of legitimate income. Often criminals target financial service providers through which they attempt to launder criminal proceeds without raising suspicion. In many cases, laundered funds are used to fund further crime or to finance terrorism. Sometimes both.
                <br />
                <br />
                As a means to combat money laundering and to counter terrorist financing (CTF), most countries have implemented AML and CTF legislation which imposes obligations on financial service providers. Although it is not always clear in some of our countries, where we have a presence, whether these obligations fall on cryptocurrency providers, these laws, together with guidance from regulators, applicable task forces and industry best practice, form the cornerstone of {companyName}&apos;s approach to AML and CTF. As such, {companyName} has implemented systems and controls that that seek to emulate the standards applicable to regulated sectors. This decision reflects our desire to prevent money laundering and terrorist financing.
                <br />
                <br />
                Key components of {companyName}&apos;s AML and CTF framework include the following;
                <ul>
                    <li>The appointment of a Money Laundering Reporting Officer (MLRO). This is an individual with a sufficient level of seniority and independence who is tasked with the responsibility of overseeing compliance with the relevant legislation, regulations, rules and industry guidance</li>
                    <li>The appointment of an independent risk committee which reports to our board of directors regularly on all risk and compliance matters</li>
                    <li>Establishing and maintaining a risk-based approach to the assessment and management of money laundering and terrorist financing risks</li>
                    <li>Establishing and maintaining a risk-based approach to Customer Due Diligence (CDD), including customer identification, verification and KYC procedures. To ensure we meet these standards, our customers are required to provide certain personal details and documents when opening a {companyName} Account. In certain circumstances, {companyName} may perform enhanced due diligence procedures for customers presenting a higher risk, such as those transacting large volumes and Politically Exposed Persons (PEPs)</li>
                    <li>Establishing and maintaining risk-based systems and procedures for the monitoring of ongoing customer activity</li>
                    <li>Establishing procedures for reporting suspicious activity internally and to the relevant law enforcement authorities as appropriate</li>
                    <li>Maintaining appropriate KYC records for the minimum prescribed periods</li>
                    <li>Providing training on the framework and raising awareness among all relevant employees</li>
                </ul>
                </span>
            </div>
        </div>
    </>
  );
};

export default Compliance;