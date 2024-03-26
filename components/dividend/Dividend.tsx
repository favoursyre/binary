"use client"
///Dividends component

///Libraries -->
import styles from "./dividend.module.scss"
import { useRouter, usePathname } from 'next/navigation';
import { companyName, getItemByKey, routeStyle, annualPercentage } from "@/config/utils";
import { dividends } from "@/config/database";
import Image from "next/image";
import { useState, ChangeEvent } from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

///Commencing the code 
const headers: Array<string> = [
    "Record Date",
    'Pay Date',
    "Amount ($)",
    'Frequency'
]

/**
 * @title Dividends Component
 * @returns The Dividends component
 */
const Dividends = () => {
    const router = useRouter()
    const routerPath = usePathname();
    const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())

    ///Handle selected year
    const handleSelectYear = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedYear(Number(e.target.value));
    };

    ///This function calculates the monthly dividend of a number
    const calcMonthlyDividend = (num: number): number => {
        const month: number = annualPercentage / 12
        const monthPercent: number = month / 100
        const dividend: number = num * monthPercent
        //console.log("Percentage: ", dividend)
        return dividend
    }

    //This function calculates the total monthly dividends
    const totalMonthlyDividend = (arr: Array<number>): number => {
        const monthlyDividends: Array<number> = arr.map(calcMonthlyDividend)
        const total: number = monthlyDividends.reduce((acc, curr) => acc + curr, 0);
        return total
    }

    //console.log("test: ", Number(totalMonthlyDividend(getItemByKey(dividends, "year", selectedYear)[0].totalMutualFunds).toFixed(2)).toLocaleString("en-US"))

  return (
    <>
        <div className={`${styles.dividendHero} ${routeStyle(routerPath, styles)}`}>
            <div className={styles.gradientOverlay}></div>
            <Image 
                className={styles.image}
                src={"https://drive.google.com/uc?export=download&id=1q1mB6dKO-FTdQQWcixxqEMgssNoSR8u-"}
                alt=""
                width={2048}
                height={1365}
            />
            <div className={styles.brief}>
                <span className={styles.brief1}>Dividends</span>
                <span className={styles.brief2}>Explore this page not just as a record of numbers but as a story of mutual triumphs. Every dividend paid echoes our dedication to our investor&apos;s prosperity. Thank you to all our investors for being part of our financial narrative. Together, we continue to redefine investment excellence.</span>
            </div>
        </div>
        <div className={styles.container}>
            <span className={styles.dividendBrief}>
                At {companyName}, we believe in the power of shared success. Our dividend history page is a testament to the fruitful partnerships we&apos;ve cultivated with our investors over the years. It&apos;s a chronicle of the trust you&apos;ve placed in us and the rewards reaped from our collective financial journey.
                <br/>
                <br/>
                <strong>Understanding the Terms;</strong>
                <ol>
                    <li><strong>Record Date:</strong> This is the cut-off date set by the company to determine which token holders are eligible to receive dividends. If you own {companyName} tokens on this date, you qualify for the upcoming dividend payment.
                    </li>
                    <li><strong>Pay Date: </strong> This is the date when the dividend payments are actually made to eligible token holders. It&apos;s the day you see your investments turn into tangible returns, deposited directly into your account.</li>
                    <li><strong>Amount:</strong> This figure represents the cumulative sum of dividends distributed to all token holders in that particular month. It mirrors the collective earnings our investors have gained, showcasing the stability and growth of your investments.</li>
                    <li><strong>Frequency:</strong> This represents the frequency of the paid dividends, dividends are paid on a monthly basis.</li>
                </ol>
            </span>
            <div className={styles.dividendTable}>
                <div className={styles.selectYear}>
                    <CalendarMonthIcon className={styles.yearIcon} />
                    <select value={selectedYear} onChange={handleSelectYear}>
                        {dividends.slice().reverse().map((dividend, did) => (
                            <option value={dividend.year} key={did}>{dividend.year}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.table}>
                    <div className={styles.tableHead}>
                        {headers.map((header, id) => (
                            <span className={`${styles.title} ${styles[`title${id}`]}`} key={id}>{header}</span>
                        ))}
                    </div>
                    {getItemByKey(dividends, "year", selectedYear).map((dividend, did) => (
                        dividend.recordDate.map((recordDate: string, index: number) => (
                            <div className={`${styles.tableBody} ${styles[`body${index}`]}`} key={index}>
                                <span className={styles.span1}>{recordDate}</span>
                                <span className={styles.span2}>{dividend.payDate[index]}</span>
                                <span className={styles.span3}>{Number(calcMonthlyDividend(dividend.totalMutualFunds[index]).toFixed(2)).toLocaleString("en-US")}</span>
                                <span className={styles.span4}>Monthly</span> 
                            </div>
                        ))
                    ))}
                    <div className={styles.tableBottom}>
                        <span className={styles.span1}>Total dividends paid in {selectedYear}</span>
                        <span className={styles.span2}>{Number(totalMonthlyDividend(getItemByKey(dividends, "year", selectedYear)[0].totalMutualFunds).toFixed(2)).toLocaleString("en-US")}</span>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Dividends;