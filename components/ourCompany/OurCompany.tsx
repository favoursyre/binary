"use client"
///Our company component

///Libraries -->
import styles from "./company.module.scss"
import { useRouter, usePathname } from 'next/navigation';
import { companyName, yearCreated, routeStyle } from "@/config/utils";
import Image from "next/image";
import { whatWeDo } from "@/config/database";
import LearnMoreAboutUs from "../learnMoreAboutUs/LearnMore";

///Commencing the code 
/**
 * @title Our company Component
 * @returns The Our company component
 */
const OurCompany = () => {
    const router = useRouter()
    const routerPath = usePathname();

  return (
    <>
        <div className={`${styles.aboutHero} ${routeStyle(routerPath, styles)}`}>
            <div className={styles.gradientOverlay}></div>
            <Image 
                className={styles.image}
                src={"https://drive.google.com/uc?export=download&id=1yxCMljUgk8bobu-sqh3YL653LXUZy_Ss"}
                alt=""
                width={2048}
                height={1373}
            />
            <div className={styles.brief}>
                <span className={styles.brief1}>About {companyName}</span>
                <span className={styles.brief2}>{companyName} is one of the world&apos;s leading providers of investment, advisory and risk management solutions. We are a fiduciary to our clients. We&apos;re investing for the future on behalf of our clients, inspiring our employees and contributing to a more equitable and resilient world – today and for generations to come.</span>
            </div>
        </div>
        <div className={styles.whoWeAre}>
            <div className={styles.container}>
                <span className={styles.heading}>Who We Are</span>
                <span className={styles.text}>
                    At {companyName}, we are pioneers in the world of decentralized finance, redefining investment paradigms with cutting-edge technology. Founded by a team of visionaries deeply rooted in finance, investment and blockchain expertise, we embark on a mission to democratize finance. Our core belief is that everyone should have access to seamless and secure investment opportunities.
                    <br />
                    <br />
                    Driven by innovation and guided by integrity, our team comprises of technologists, finance experts and customer-focused professionals. We are united by the shared vision of creating a future where financial empowerment knows no boundaries. Our commitment to transparency, security and excellence fuels our journey towards reshaping the future of investments.
                </span>
            </div>
        </div>
        <div className={styles.whatWeDo}>
        <div className={styles.heading}>What We Do</div>
        <div className={styles.container}>
            {whatWeDo.map((job, id) => (
                <div className={styles.carousel} key={id}>
                    <div className={styles.title}>{job.title}</div>
                    <div className={styles.card}>
                        <div className={styles.imageDiv}>
                            <Image 
                                className={styles.image}
                                src={job.image.src}
                                alt=""
                                width={job.image.width}
                                height={job.image.height}
                            />
                        </div>
                        <div className={styles.brief}>{job.text}</div>
                    </div>
                </div>
            ))}
        </div>
        
        </div>
        <div className={styles.whoWeServe}>
            <div className={styles.heading}>Who We Serve</div>
            <div className={styles.individual}>
                <div className={styles.brief}>
                    <span className={styles.title}>Individual Investors</span>
                    <span className={styles.text}>
                        We cater to individual investors seeking opportunities beyond conventional markets. Whether you are a seasoned investor or a newcomer to the world of finance, our platform provides a user-friendly interface and innovative way to invest in a future that aligns with your ambitions.
                    </span>
                </div>
                <div className={styles.imageDiv}>
                    <Image 
                        className={styles.image}
                        src={"https://drive.google.com/uc?export=download&id=1S9TuFQD3jg-6jeXB5RVAcGtxTz0PdesD"}
                        alt=""
                        width={2048}
                        height={1366}
                    />
                </div>
            </div>
            <div className={styles.institution}>
                <div className={styles.brief}>
                    <span className={styles.title}>Institutional Investors</span>
                    <span className={styles.text}>
                        Institutional investors and corporates find a reliable partner in us. We offer cutting-edge solutions that align with the unique financial goals and ambitions of institutions. Our blockchain-based investment products provide diversification and liquidity, addressing the specific needs of corporate portfolios.
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
        </div>
        <LearnMoreAboutUs name={"Our Company"} />
    </>
  );
};

export default OurCompany;