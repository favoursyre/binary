"use client"
///Terms of use component

///Libraries -->
import styles from "./terms.module.scss"
import { companyName, companyEmail, lockInPeriod } from "@/config/utils";
//import Image from "next/image";

///Commencing the code 

/**
 * @title Terms of use Component
 * @returns The Terms of use component
 */
const Terms = () => {

  return (
    <>
        <div className={`${styles.termsHero}`}>
            <div className={styles.gradientOverlay}></div>
            <img 
                className={styles.image}
                src={"https://drive.google.com/uc?export=download&id=1F0sG-uI_LcbEZUt6tiwHUXWXNmIN0YMd"}
                alt=""
                width={2048}
                height={1035}
            />
            <div className={styles.brief}>
                <span className={styles.brief1}>Terms of Use</span>
                <span className={styles.brief2}>Our Terms of Use are not just legalities; they are the cornerstones of a trusted partnership, a bridge connecting your aspirations to the vast potential of the digital financial landscape.
                Let&apos;s shape a prosperous future together.</span>
            </div>
        </div>
        <div className={styles.term1}>
            <div className={styles.container}>
                <span className={styles.heading}>
                    <span className={styles.number}>1.</span>
                    <span className={styles.title}>Acceptance of Terms</span>
                </span>
                <span className={styles.text}>Thank you for choosing {companyName}. The following Terms and Conditions and the Privacy Policy (together, the Terms”) apply to any person that registers for and/or opens a {companyName} Account.
                <br />
                <br />
                The Terms constitute a legally binding agreement between you and {companyName}, which is a company incorporated under the laws of the USA. For the purposes of these Terms, any reference to “we” “us” “our” “{companyName}” and/or any similar term shall be construed as reference to {companyName}.
                <br />
                <br />
                By registering for and opening a {companyName} Account, you unconditionally accept these Terms and agree to be bound by and act in accordance with them. You also accept and agree that you are solely responsible for understanding and complying with all laws, rules, regulations and requirements of the jurisdiction in which you live that may be applicable to your use of the {companyName} Site and/or your {companyName} Account, including but not limited to, those related to export or import activity, taxes or foreign currency transactions. Depending on your country of residence, you may not be able to use all the functions of the {companyName} Site.
                <br />
                <br />
                Please read these Terms carefully before using the {companyName} Site because they affect your legal rights and obligations.</span>
            </div>
        </div>
        <div className={styles.term2}>
            <div className={styles.container}>
                <span className={styles.heading}>
                    <span className={styles.number}>2.</span>
                    <span className={styles.title}>Amendment of Terms</span>
                </span>
                <span className={styles.text}>{companyName} may amend the Terms from time to time. You should visit the {companyName} website regularly to check when the Terms were last updated (as displayed at the top of this document) and to review the current Terms. We will do our best to notify you of any amendments to the Terms that we consider likely to materially affect your rights and obligations. Any such notice will be posted on the {companyName} Site or sent by email to the address associated with your {companyName} Account.
                <br />
                <br />
                The continued use of your {companyName} Account, after any amendment to these Terms, constitutes your acceptance of the Terms, as modified by such amendment. If you do not accept the Terms, or any amendment to them, you must immediately stop using the {companyName} Site and your {companyName} Account.</span>
            </div>
        </div>
        <div className={styles.term3}>
            <div className={styles.container}>
                <span className={styles.heading}>
                    <span className={styles.number}>3.</span>
                    <span className={styles.title}>Eligibility</span>
                </span>
                <span className={styles.text}>By opening a {companyName} Account, you expressly warrant and represent that;
                <ul>
                    <li>You are 18 years of age or over and have full capacity to accept the Terms and enter any transaction available through the {companyName} Site</li>
                    <li>You will not open, or attempt to open, a {companyName} Account under any name except your own; or use your {companyName} Account to carry out transactions on behalf of a third party</li>
                    <li>You will register as a {companyName} Business account if you seek to open and use a {companyName} Account for a non-individual legal entity (e.g. a company, trust or partnership)</li>
                    <li>You will not have more than one {companyName} Account; use or access any {companyName} Account other than your own; or assist any other person in obtaining unauthorised access to any {companyName} Account</li>
                    <li>You will not use your {companyName} Account for or in relation to any illegal or prohibited activity, in violation of any laws, statutes, ordinances or regulations</li>
                </ul>
                By opening a {companyName} Account you accept and agree that {companyName} may, without further notice and in its sole discretion, terminate, suspend or restrict the account of any customer who uses, or who we reasonably suspect may be using, the {companyName} Site or any {companyName} Account in a manner that is inconsistent with the letter or spirit of these Terms.
                </span>
            </div>
        </div>
        <div className={styles.term4}>
            <div className={styles.container}>
                <span className={styles.heading}>
                    <span className={styles.number}>4.</span>
                    <span className={styles.title}>Electronic Communications</span>
                </span>
                <span className={styles.text}>You accept and agree that;
                <ul>
                    <li>Any communications, agreements, notices and/or any other documents (together “Communications”) relating to your {companyName} Account or your use of {companyName}&apos;s services will be provided to you electronically by posting them on the {companyName} Site, emailing them to the email address you have provided to us, or through any other form of electronic communication. You consent to receiving all Communications electronically</li>
                    <li>You will at all times have available to you the necessary hardware and software to receive, access and retain Communications sent to you electronically, including a device with an internet connection and a valid and accessible email addres</li>
                    <li>You assume full responsibility for providing {companyName} with a valid and accessible email address to which any Communications may be sent, and for ensuring that email address and any other contact information is kept up to date. Any Communication sent to the email address you have provided to us will be deemed to have been received by you. You can amend your contact information by signing-in to your {companyName} Account and accessing the Settings page</li>
                </ul>
                </span>
            </div>
        </div>
        <div className={styles.term5}>
            <div className={styles.container}>
                <span className={styles.heading}>
                    <span className={styles.number}>5.</span>
                    <span className={styles.title}>Identity Verification</span>
                </span>
                <span className={styles.text}>{companyName} implements and maintains the highest standards of Know Your Customer (“KYC”) processes and controls as part of our commitment to combating fraud and assisting in the prevention of money laundering and terrorist financing.
                <br />
                <br />
                To ensure we meet these standards, our customers are required to provide certain personal details and documents when opening a {companyName} Account (“Identity Verification”). {companyName} may also perform enhanced due diligence (“EDD”) procedures in relation to your {companyName} Account. You accept and agree that you will remain subject to such procedures at all times.
                <br />
                <br />
                {companyName} reserves the right to, at any time;
                <ul>
                    <li>restrict or suspend your {companyName} Account when we, in our sole discretion, consider it necessary to carry out further Identity Verification and/or EDD or</li>
                    <li>terminate your {companyName} Account if you provide, or we suspect you have provided, false information or refuse to provide information we require for Identity Verification and/or EDD</li>
                </ul>
                You accept and agree that there may be delays in accessing your {companyName} Account, or in carrying out transactions through your {companyName} Account, while we undertake any Identity Verification and/or EDD procedures.
                </span>
            </div>
        </div>
        <div className={styles.term6}>
            <div className={styles.container}>
                <span className={styles.heading}>
                    <span className={styles.number}>6.</span>
                    <span className={styles.title}>Investment/Wallet</span>
                </span>
                <span className={styles.text}>The {companyName} Wallet allows you to send, receive and store {companyName} Token.
                <br />
                <br />
                <strong>Ownership of Token held in {companyName} Wallet.</strong> Legal ownership of token held in a {companyName} Wallet shall at all times remain with you, the user, as the sole owner and shall not pass to {companyName}.
                <br />
                <br />
                <strong>Full Control of Token.</strong> Subject to applicable laws (including, without limitation, Anti Money-Laundering laws) you acknowledge and agree that you, as customer, exercise full control over all token held in your {companyName} Wallet since you may at any time sell or withdraw your token by instructing {companyName} to transfer it to a different {companyName} wallet address.
                <br />
                <br />
                <strong>Investment Lock-In Period.</strong> This period refers to the duration for which your invested funds remain untouched and unwithdrawable after being invested in our tokenized mutual funds. In our case, this lock-in period is set at {lockInPeriod}. This period is essential for optimizing the performance of your investment, ensuring stability and the best possible returns, allowing our experts the time needed to make strategic decisions and navigate the often-volatile financial markets effectively. After the completion of this lock-in period, you gain the flexibility to withdraw your funds or leave them as you see fit, based on your financial goals and market conditions.
                <br />
                <br />
                <strong>Transaction instructions.</strong> {companyName} will process {companyName} Wallet Transactions according to your instructions. You are solely responsible for ensuring all transaction details are correct, and you should carefully verify all transaction information prior to submitting transaction instructions to {companyName}.
                <br />
                <br />
                {/* <strong>Receiving Token.</strong> You may receive {companyName} token into your {companyName} Wallet by providing the sender with a receive address generated in your {companyName} Wallet. Your {companyName} Wallet will only be credited with Supported token sent to a receive address generated through your {companyName} Wallet and associated with {companyName} token.
                <br />
                <br /> */}
                <strong>Funds received in error.</strong> In the event you know, suspect, or should reasonably know or suspect, that {companyName} token has been credited to your {companyName} Wallet in error, you must immediately notify {companyName} of the error by contacting our Support Team at {companyEmail}. You accept and agree that you have no claim or entitlement to any {companyName} token received in error and must immediately return such funds in accordance with the instructions received from {companyName}.
                </span>
            </div>
        </div>
        <div className={styles.term7}>
            <div className={styles.container}>
                <span className={styles.heading}>
                    <span className={styles.number}>7.</span>
                    <span className={styles.title}>Limit/Fees</span>
                </span>
                <span className={styles.text}>{companyName} doesn&apos;t charge any fees for investing in {companyName} token or managing your mutual funds investment for you.
                <br />
                <br />
                <strong>Withdrawal Limit.</strong> We have a policy in place to maintain a minimum withdrawal limit of $10. This means that you can request a withdrawal from your investment account only if the amount you wish to withdraw exceeds $10, this is so in other to be able to cover for any fees that would be charged by the blockchain network processing the crypto transaction.
                <br />
                <br />
                {/* <strong>Send and Receive fees.</strong> Transferring {companyName} token from one {companyName} Wallet Address to another would incur a fee which could vary depending on congestions on the {companyName} Blockchain Network.
                <br />
                <br /> */}
                <strong>Withdrawal fees.</strong> {companyName} doesn&apos;t charge any fee for withdrawing your token. However, {companyName} Token is withdrawn using the cryptocurrency you select as a mode of payment.  
                </span>
            </div>
        </div>
        <div className={styles.term8} id="account-security">
            <div className={styles.container}>
                <span className={styles.heading}>
                    <span className={styles.number}>8.</span>
                    <span className={styles.title}>Account Security</span>
                </span>
                <span className={styles.text}>{companyName} takes security very seriously. However, you are solely responsible for;
                <ul>
                    <li>maintaining adequate security and control over your {companyName} Account sign-in details, including but not limited to any passwords, personal identification numbers (PINs) or any other codes associated with your {companyName} Account</li>
                    <li>keeping your contact details up to date so that you can receive any notices or alerts we may send to you in relation to security</li>
                    <li>maintaining security and control over the email mailbox, phone number or devices associated with your {companyName} Account</li>
                </ul>
                Failure to take the above measures, and any other security measures available to you, may result in unauthorised access to your {companyName} Account and the loss or theft of your {companyName} Token held in your {companyName} Wallet. {companyName} shall have no liability to you for or in connection with any unauthorised access to your {companyName} Account, where such unauthorised access was due to no fault of {companyName}, and/or any failure by you to act upon any notice or alert that we send to you.
                <br />
                <br />
                The security of your {companyName} Account may be compromised, or interruption caused to it, by phishing, spoofing or other attack, computer viruses, spyware, scareware, Trojan horses, worms or other malware that may affect your computer or other equipment. {companyName} strongly recommends that you regularly use reputable virus screening and prevention software and remain alert to the fact that SMS, email services and search engines are vulnerable to spoofing and phishing attacks.
                <br />
                <br />
                Care should be taken in reviewing messages purporting to originate from {companyName} and, should you have any uncertainty regarding the authenticity of any communication, you should log in to your {companyName} Account through the valid {companyName} website to review any transactions or required actions.
                <br />
                <br />
                To the maximum extent permitted by applicable law, you accept and agree that you have full responsibility for all activity that occurs in or through your {companyName} Account and accept all risks of any unauthorised or authorised access to your {companyName} Account. 
                </span>
            </div>
        </div>
        <div className={styles.term9}>
            <div className={styles.container}>
                <span className={styles.heading}>
                    <span className={styles.number}>9.</span>
                    <span className={styles.title}>Intellectual Property</span>
                </span>
                <span className={styles.text}>The content contained on this Website is owned or licensed by {companyName} and its third-party information providers and is protected by applicable copyrights, trademarks, service marks, and/or other intellectual property rights. Such content is solely for your personal, non-commercial use. Accordingly, you may not copy, distribute, modify, post, frame or deep link this Website, including any text, graphics, video, audio, software code, user interface design or logos
                <br />
                <br />
                All trademarks, service marks, trade names, and logos displayed on this Website are proprietary to {companyName} and/or their respective owners. Nothing contained on this Website should be construed as granting, by implication, estoppel, or otherwise, any license or right to use any trademark displayed on this Website without the written permission of {companyName} or such other third party that may own the trademark displayed on this Website. Your use of the trademarks displayed on this Website, except as provided herein, is strictly prohibited.
                <br />
                <br />
                The use of the images displayed on this Website by you, or anyone else authorized by you, is prohibited. Any unauthorized use of the images may violate copyright laws, trademark laws, and the laws of privacy and publicity, and communications, as well as other regulations and statutes. If you download any information from this Website, you agree that you will not copy it or remove or obscure any copyright or other notices or legends contained in any such information. 
                </span>
            </div>
        </div>
    </>
  );
};

export default Terms;