"use client"
///Security component

///Libraries -->
import styles from "./security.module.scss"
import { companyName } from "@/config/utils";
import Image from "next/image";
import SignalCellularOffIcon from '@mui/icons-material/SignalCellularOff';
import KeyIcon from '@mui/icons-material/Key';
import PasswordIcon from '@mui/icons-material/Password';
import GppGoodIcon from '@mui/icons-material/GppGood';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import MessageIcon from '@mui/icons-material/Message';
import SecurityIcon from '@mui/icons-material/Security';
import BugReportIcon from '@mui/icons-material/BugReport';

///Commencing the code 

/**
 * @title Security Component
 * @returns The Security component
 */
const Security = () => {

  return (
    <>
        <div className={`${styles.securityHero}`}>
            <div className={styles.gradientOverlay}></div>
            <Image 
                className={styles.image}
                src={"https://drive.google.com/uc?export=download&id=1XeNap3jRw1CPL6Fwg1wmptxcP3OLify4"}
                alt=""
                width={2048}
                height={1170}
            />
            <div className={styles.brief}>
                <span className={styles.brief1}>Security</span>
                <span className={styles.brief2}>Your investments are guarded with state-of-the-art encryption and proactive measures. In the ever-evolving landscape of web3 finance, trust and security are our cornerstone.
                </span>
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.features}>
                <div className={styles.deepFreeze}>
                    <div className={styles.heading}>
                        <KeyIcon className={styles.icon} />
                        <span className={styles.title}>Deep Freeze Storage</span>
                    </div>
                    <span className={styles.text}>We store the majority of customer tokens in “deep freeze” using a multi signature wallet where the keys are generated and stored entirely offline and offsite</span>
                </div>
                <div className={styles.airGaps}>
                    <div className={styles.heading}>
                        <SignalCellularOffIcon className={styles.icon} />
                        <span className={styles.title}>Air Gaps</span>
                    </div>
                    <span className={styles.text}>Private keys are stored offline, and offsite, on a machine not connected to the internet or other networks. This significantly reduces the attack surface since physical access is required. The airgap machine is stored in a safe, inside a managed security vault, at an undisclosed offsite location.</span>
                </div>
                <div className={styles.hash}>
                    <div className={styles.heading}>
                        <PasswordIcon className={styles.icon} />
                        <span className={styles.title}>Passwords</span>
                    </div>
                    <span className={styles.text}>Passwords are stored in hashed form: nobody other than yourself ever has access to your password. We make sure that users use a strong password when they sign up with {companyName}.</span>
                </div>
                <div className={styles.authorization}>
                    <div className={styles.heading}>
                        <GppGoodIcon className={styles.icon} />
                        <span className={styles.title}>Authorization</span>
                    </div>
                    <span className={styles.text}>{companyName} ensures that you authorise any High-risk actions that are performed on your account, such as withdrawing funds from your account.</span>
                </div>
                <div className={styles.privacy}>
                    <div className={styles.heading}>
                        <EnhancedEncryptionIcon className={styles.icon} />
                        <span className={styles.title}>Privacy</span>
                    </div>
                    <span className={styles.text}>Your personal and financial information is only stored and processed in cloud services that meet our strict infrastructure security requirements. This information is only collected and shared in accordance with our Privacy Policy.</span>
                </div>
                <div className={styles.organization}>
                    <div className={styles.heading}>
                        <SecurityIcon className={styles.icon} />
                        <span className={styles.title}>Organisation Security</span>
                    </div>
                    <span className={styles.text}>All {companyName} employees are required to use cryptographically-secure Multi-Factor Authentication to access internal services. Engineers do not have access to application credentials or production servers.
                   
                    As part of our hiring process, candidates must pass criminal background checks before becoming a {companyName} employee.</span>
                </div>
                <div className={styles.communicate}>
                    <div className={styles.heading}>
                        <MessageIcon className={styles.icon} />
                        <span className={styles.title}>Communication</span>
                    </div>
                    <span className={styles.text}>We keep our members updated in real-time, updating them about the current status of our services, details of any current incident and information about upcoming scheduled maintenance.</span>
                </div>
                <div className={styles.bug}>
                    <div className={styles.heading}>
                        <BugReportIcon className={styles.icon} />
                        <span className={styles.title}>Bug Bounty</span>
                    </div>
                    <span className={styles.text}>We work with an active community of security researchers by organising Bug Bounty Program to continually improve the security of {companyName} and our investors&apos; funds.</span>
                </div>
            </div>
        </div>
    </>
  );
};

export default Security;