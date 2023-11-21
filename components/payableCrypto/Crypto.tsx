"use client"
///Payable Crypto component

///Libraries -->
import styles from "./crypto.module.scss"
//import { useRouter } from 'next/navigation';
//import Image from "next/image";
import { cryptos } from "@/config/database";

///Commencing the code 
///List of crpto accepted payments
//const cryptos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/**
 * @title Payable Crypto Component
 * @returns The Payable Crypto component
 */
const Crypto = () => {
  //console.log('Current page:', routerPath);

  return (
    <div className={styles.main}>
        <div className={styles.heading}>Cryptocurrencies that we accept as a means of payment</div>
        <div className={styles.cryptos}>
            {cryptos.map((crypto, id) => (
                <div className={styles.imageDiv} key={id} >
                    <img 
                        className={styles.image}
                        src={crypto.image.src}
                        alt={crypto.symbol}
                        width={crypto.image.width}
                        height={crypto.image.height}
                        //layout="responsive"
                    />
                </div>
            ))}
        </div>
    </div>
  );
};

export default Crypto;