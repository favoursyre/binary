"use client"
///Privacy policy component

///Libraries -->
import styles from "./privacy.module.scss"
import { companyName, companyEmail } from "@/config/utils";
import Image from "next/image";
import Link from "next/link";

///Commencing the code 

/**
 * @title Privacy policy Component
 * @returns The Privacy policy component
 */
const PrivacyPolicy = () => {

  return (
    <>
        <div className={`${styles.privacyHero}`}>
            <div className={styles.gradientOverlay}></div>
            <Image 
                className={styles.image}
                src={"https://drive.google.com/uc?export=download&id=1XeNap3jRw1CPL6Fwg1wmptxcP3OLify4"}
                alt=""
                width={2048}
                height={1170}
            />
            <div className={styles.brief}>
                <span className={styles.brief1}>Privacy Policy</span>
                <span className={styles.brief2}>Your privacy is not just a policy; it&apos;s a sacred trust. In this interconnected digital universe, trust is the cornerstone upon which meaningful relationships are built. As you explore our platform for tokenized mutual funds, rest assured that your data is not just protected but honored</span>
            </div>
        </div>
        <div className={styles.brief}>
            <span className={styles.container}>At {companyName}, we value your privacy and strive to protect your personal data. {companyName} will only collect and use your personal data in accordance with this Privacy Policy and our Terms of Use.
                <br />
                <br />
                This Privacy policy explains;
                    <ul>
                        <li>How we collect, process and share your personal data</li>
                        <li>The important security measures we maintain to secure your personal data</li>
                        <li>What rights you have in respect of the personal data we hold on you</li>
                    </ul>
            </span>
        </div>
        <div className={styles.collectData}>
            <div className={styles.container}>
                <span className={styles.title}>Collecting your personal data</span>
                <span className={styles.text}>In order to open and operate an account for you, provide you with our products and services, or communicate with you, we may need to collect your personal data.
                <br />
                <br />
                We may collect the following types of personal data;
                <ul>
                    <li>personal identification information such as your full name, nationality, email address and country of residence</li>
                    <li>national identity documentation such as a copy of your national identity document, drivers&apos; license, passport (including any relevant visa information), business license, corporate certification and/or any other information deemed necessary to comply with our legal obligations under financial or anti-money laundering laws</li>
                    <li>transaction information such as your transaction data on your {companyName} account and information on the recipient of any transaction(s)</li>
                    <li>correspondence such as information provided to us when engaging with our customer support and/or responses to surveys</li>
                    <li>website usage, device and location information such as geolocation information, browser name and version information, IP address informatiom, authentication data and/or click-stream data</li>
                </ul>
                Personal data is collected in various ways, including;
                <ul>
                    <li>when you provide it to us such as when you sign up for a {companyName} account, use our products and services, or take part in customer surveys, competitions and promotions</li>
                    <li>when you communicate with us by email, chat or any other means, we collect the communication and any personal data provided in it</li>
                    <li>when you use the {companyName} platform we collect information on your transactions and usage of your {companyName} account</li>
                </ul>
                You must be 18 years or older to open a {companyName} account. Our products and services are directed at adults aged 18 years and over, and are not intended for individuals under 18 years old. {companyName} will not knowingly request to collect personal data from individuals under the age of 18. {companyName} makes all efforts to comply with applicable local legal requirements regarding children&apos;s personal data.
                </span>
            </div>
        </div>
        <div className={styles.processData}>
            <div className={styles.container}>
                <span className={styles.title}>Processing your personal data</span>
                <span className={styles.text}>We will only collect, use, share or otherwise process your personal data where it is necessary for us to carry out our lawful business activities and subject to the data protection laws in your country or state.
                <br />
                <br />
                In doing so, we rely on one or more of the following lawful grounds for processing your personal data:
                <br />
                <br />
                <strong>Contractual necessity:</strong> We may process your personal data where it is necessary in order for us to provide our products and services to you or to otherwise comply with our obligations under {companyName}&apos;s Terms of use.
                <br />
                <br />
                <strong>Consent:</strong> In some cases, we will only process your personal data where you provide us with your express consent for such processing.
                <br />
                <br />
                <strong>Legal obligation:</strong> In some cases, we may need to process your personal data in order to comply with an obligation imposed by law.
                <br />
                <br />
                <strong>Legitimate interest:</strong> In some cases, we may need to process your personal data where it is in our legitimate legal interests to do so.
                </span>
            </div>
        </div>
        <div className={styles.useData}>
            <div className={styles.container}>
                <span className={styles.title}>How we use your personal data</span>
                <span className={styles.text}>More specifically, we may process your personal data for one or more of the following purposes;
                <ul>
                    <li>to verify your identity in accordance with Know Your Customer (KYC), Anti-Money Laundering (AML) and Counter-Terrorist Financing (CFT) requirements</li>
                    <li>to manage and maintain your account with us</li>
                    <li>to detect and prevent fraudulent or unauthorised use of our products and services</li>
                    <li>to better manage our business and your relationship with us, including for purposes of quality control and staff training to make sure we continue to provide you with accurate information, products and services</li>
                    <li>to improve our products and services, and to develop new products and services</li>
                    <li>to notify you about benefits and changes to the features of our products and services</li>
                    <li>to provide you with personalised advertising and marketing</li>
                    <li>to respond to your enquiries and to resolve disputes</li>
                    <li>in relation to legal claims, compliance, audit, risk management, law enforcement processes and regulatory functions</li>
                </ul>
                Where we are required to process criminal history information, biometric information or any other type of special personal data about you in connection with any of the purposes listed above, you expressly consent to the collection, use and storage of this personal data about you.
                </span>
            </div>
        </div>
        <div className={styles.shareData}>
            <div className={styles.container}>
                <span className={styles.title}>Sharing your personal data</span>
                <span className={styles.text}>We may share your personal data with;
                <ul>
                    <li>any person that works for us or for one of our group companies</li>
                    <li>third party cryptocurrency (or virtual or digital asset) service providers when you send cryptocurrency over the blockchain. The third party service provider may also use this information to screen and process the relevant transactions</li>
                    <li>companies and organisations that assist us with identity verification, background screening and due diligence.</li>
                    <li>companies and organisations that assist us with fraud prevention services.</li>
                    <li>our professional advisers, consultants and other similar services</li>
                </ul>
                We will otherwise treat your personal data as private and confidential and will not share it with other parties except;
                <ul>
                    <li>where you have given us permission to do so</li>
                    <li>where we believe it is reasonably necessary to comply with any law, regulation, legal process or governmental request (for example to comply with reporting requirements under tax and AML laws or to respond to law enforcement requests), to enforce our Terms of use or other agreements, or to protect the rights, property, or safety of us, our customers or others</li>
                    <li>where we may transfer rights and obligations pursuant to our agreement with you</li>
                </ul>
                </span>
            </div>
        </div>
        <div className={styles.secureData}>
            <div className={styles.container}>
                <span className={styles.title}>Security of your personal data</span>
                <span className={styles.text}>{companyName} places great importance on ensuring the security of your personal data. We regularly review and implement appropriate and reasonable technical and organisational security measures to keep your personal data safe. Employees of {companyName} are trained to handle personal data securely and with the utmost respect, failing which they may be subject to disciplinary action.Importantly, you are responsible for securing the login credentials for your {companyName} account and otherwise complying with the <Link href="/terms-of-use#account-security" className={styles.link}>Account Security</Link> section of {companyName}&apos;s Terms of Use.
                </span>
            </div>
        </div>
        <div className={styles.rightData}>
            <div className={styles.container}>
                <span className={styles.title}>Your rights</span>
                <span className={styles.text}>Most of the data {companyName} collects, and the ways in which we use it, are necessary for us to provide and improve the services we provide to you, or to comply with our obligations. In certain situations, we give you the ability to choose how we use your data.
                <br />
                <br />
                Depending on the country or state in which you live, you may have certain rights relating to your personal data, including the right to;
                <ul>
                    <li>ask us for a copy of the personal data we hold about you</li>
                    <li>ask to have your personal data transferred to you or to a third party chosen by you in a structured, commonly used and machine readable format</li>
                    <li>object to the processing of your personal data, including processing for marketing purposes</li>
                    <li>opt out of the sharing of your personal data with our affiliates or third parties (either for the specific purposes outlined in this policy or for the purpose of marketing their products and services to you)</li>
                    <li>ask that we correct, delete, or restrict the processing of your personal data</li>
                </ul>
                Please submit a request to {companyEmail} if you would like to exercise any of the above rights which you are entitled to exercise free from discrimination. These rights are limited in some situations and we may not be able to agree to your request. This could be because we have a legitimate reason for processing your personal data (for example where we have legal obligation to process your personal data, or it is in our legitimate interests to do so) or the right does not apply to the personal data we hold about you.
                </span>
            </div>
        </div>
    </>
  );
};

export default PrivacyPolicy;