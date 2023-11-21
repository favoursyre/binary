///This contains all the utilities

///Libraries -->
import { IWalletInfo, TxDescription, ITransaction, TxStatus, IAccount, IDividendStatus } from "./interfaces" 
//import crypto from "crypto-js"
import * as bip39 from "bip39"
import { hdkey } from "ethereumjs-wallet"
//import { Account } from "@/models/account";
//import { ethers } from "ethers";

///Commencing the code
export const companyName = "Bytemutual"

export const yearCreated = "2015"

export const minInvestAmount: number = 100

export const annualPercentage: number = 24

export const lockInPeriod = "9 months"

export const lockPeriodMonth: number = 9

export const companyEmail = "support@bytemutual.tech"

export const companyNumber = "+1-3102691924"

export const referralBonusPercent: number = 5

export const SUPPORT_EMAIL: string = process.env.NEXT_PUBLIC_SENDER_EMAIL!

export const SUPPORT_PASSWORD: string = process.env.NEXT_PUBLIC_SENDER_PASSWORD!

//This holds the variable for minimum dividend withdrawable amount
export const minWithdrawAmount: number = 10

//This holds the variable for minimum re-invest amount
export const minReinvestAmount: number = 10

///This holds the frontend domain name
console.log("Domain Name: ", process.env.NEXT_PUBLIC_DOMAIN_NAME)
//export const domainName: string = "https://www.bytemutual.tech"
export const domainName: string = process.env.NEXT_PUBLIC_DOMAIN_NAME!
//export const domainName = "http://localhost:3000"
//export const domainName = "http://127.0.0.1"

//Account Id key for local storage
export const accountIdKey = `${companyName}-accountId`

//request time key for local storage
export const requestTimeKey = `${companyName}-requestTime`

//Company wallet info
export const companyWallet: IWalletInfo = {
    mnemonic: 'hidden brass trim range silent palm dumb culture weird spend rail warfare',
    privateKey: '0x46ce0301d4d825f0feedc79120ee80f14ec3b7a10ec0dd4c18501848002878d7', 
    publicKey: '0xfa50a82fa640059f3e18d425aa93285c9134bbaa74b90b996f94d1b579523db63d4bdc2ccbd5866e43ee34cc0dad475f832b5cbaf5bbc33301aea613695a7fb2', 
    address: 'byte0x97859e8bd1432d97730b7a2404e6c56ebd81397e'
}

///This function converts `Xi Wei` to `xi-wei`
export const toKebabCase = (input: string): string => {
    return input.replace(/\s+/g, '-').toLowerCase();
}

///This function converts `xi-wei` to `Xi Wei`
export const toTitleCase = (input: string): string => {
    return input
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}


///The function delays the code
export const sleep = (milliseconds: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

///This function capitalizes the first letter of every word
export const capitalizeFirstLetter = (str: string | undefined): string | undefined => {
    if (str) {
        return str.replace(/\b\w/g, (match) => match.toUpperCase());
    }
  }



///This checks for a router path and renders the necessary style for it
export const routeStyle = (router: string, styles: { readonly [key: string]: string } ): string => {
    //console.log("Router: ", router)
    switch (router) {
        case "/":
            return styles.homePage
        case "/about-us/our-company":
            return styles.ourCompanyPage
        case "/about-us/our-history":
            return styles.ourHistoryPage
        case "/faqs":
            return styles.faqsPage
        case "/contact-us":
            return styles.contactPage
        case "/login":
            return styles.loginPage
        case "/dividends":
            return styles.dividendPage
        case "/about-us/our-principles":
            return styles.ourPrinciplePage
        case "/about-us/our-foundation":
            return styles.ourFoundationPage
        case "/about-us/our-leadership":
            return styles.ourLeadershipPage
        case "/terms-of-use":
            return styles.termsPage
        case "/privacy-policy":
            return styles.privacyPage
        case "/security":
            return styles.securityPage
        case "/compliance":
            return styles.compliancePage
        case "/professional-management":
            return styles.professionalPage
        default:
            if (router.includes("/about-us/our-leadership/")) {
                return styles.leaderBioPage
            } else if (router.includes("account/dashboard/")) {
                return styles.dashboardPage
            } else if (router.includes("account/profile/")) {
                return styles.profilePage
            } else if (router.includes("admin/verify-user/")) {
                return styles.adminVerifyPage
            } else if (router.includes("/register")) {
                return styles.registerPage
            } else if (router.includes("/verify-identity/")) {
                return styles.idVerificationPage
            } else if (router.includes("/reset-password/")) {
                return styles.resetPasswordPage
            } else {
                return styles.others
            }
    }
}

///This function exports a array shuffler function
export const shuffleArray = <T>(array: Array<T>): Array<T> => {
    if (array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    } else {
        return array
    }
}

///This function returns all item with a key in array
export const getItemByKey = <T>(array: Array<T>, key: string, value: string | number | null): Array<T> => {
    if (value) {
        return array.filter((arr) => arr[key] === value);
    } else {
        return array
    }
  }

///This function converts a bytes to megabytes
export const bytesToMB = (byteSize: number): number => {
    return Number((byteSize / (1024 * 1024)).toFixed(1))
}

///This function returns a read file
export const readFile = (file: File): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = () => {
        const fileData = reader.result as string;
        resolve(fileData);
      };
  
      reader.onerror = () => {
        reject(new Error('Failed to read file'));
      };
  
      reader.readAsDataURL(file);
    });
  }; 

///This gets the image details
export const readImageDimension = async (file: Blob | MediaSource): Promise<{ imgWidth: number; imgHeight: number }> => {
    const image = new Image();
    image.src = URL.createObjectURL(file);

    await image.decode();

    //console.log("Image: ", image)
    const { width: imgWidth, height: imgHeight } = image;

    URL.revokeObjectURL(image.src);

    return { imgWidth, imgHeight };
}

///This checks if a file is an image or not
export const isImage = (file: File): boolean => {
    const imageTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif'];
    return imageTypes.includes(file.type);
}

///This function generates wallet details
export const generateWallet = async (): Promise<IWalletInfo> => {
    //const wallet_ = ethers.Wallet.createRandom()

    // Generate a mnemonic with 128 bits of entropy (12 words)
    const mnemonic = bip39.generateMnemonic(128);
    const hdwallet = hdkey.fromMasterSeed(await bip39.mnemonicToSeed(mnemonic));
    const path = "m/44'/60'/0'/0/0";

    const wallet_ = hdwallet.derivePath(path).getWallet();

    // console.log("Wallet details: ", { 
    //     "mnemonic": mnemonic,
    //     "pubkey": wallet_.getPublicKey(), 
    //     "prikey": wallet_.getPrivateKey(), 
    //     "pubkeystr": wallet_.getPublicKeyString(), 
    //     "prikeystr": wallet_.getPrivateKeyString(), 
    //     "addr": wallet_.getAddress(),
    //     "addrstr": wallet_.getAddressString() 
    // }
    // )

    // Generate a random private key
  //const privateKey = crypto.lib.WordArray.random(32).toString(crypto.enc.Hex);
  //const privateKey = wallet_.privateKey;
  const privateKey = wallet_.getPrivateKeyString();

  // Generate public key from private key (this is just an example, not a proper way to generate a public key)
  //const publicKey = crypto.SHA256(privateKey).toString(crypto.enc.Hex);
  //const publicKey = wallet_.publicKey;
  const publicKey = wallet_.getPublicKeyString();

  // Generate address from public key (this is just an example, not a proper way to generate an address)
  //const address = `byte${crypto.SHA256(publicKey).toString(crypto.enc.Hex).slice(0, 42)}`;
  const address = `byte${wallet_.getAddressString()}`

  //const addr = wallet_.address;
  //const address = `byte${addr}`;

  const wallet: IWalletInfo = { mnemonic, privateKey, publicKey, address }
  return wallet
}

///This function takes an array of ITransaction and sums the total amount given a certain condition
export const calculateTxTotal = (transactions: Array<ITransaction>, description: TxDescription, status: TxStatus): number => {

    //Checking if array is empty
    if (transactions === undefined || transactions.length === 0) {
        return 0
    } else {
        // Filter transactions with the specified conditions
        const activeTransactions = transactions.filter(
            (transaction) =>
            transaction.description === description &&
            transaction.status === status
        );

        const withdrawnTransactions = transactions.filter(
            (transaction) =>
            transaction.description === TxDescription.WITHDRAW &&
            transaction.status === status && (transaction.section === description)
        );
        
        // Sum up the total amounts
        const activeAmount = activeTransactions.reduce(
            (sum, transaction) => sum + (transaction.amount || 0),
            0
        );
        

        const withdrawAmount = withdrawnTransactions.reduce(
            (sum, transaction) => sum + (transaction.amount || 0),
            0
        );
        
        return activeAmount - withdrawAmount;
    }
  }

///This function gets the current date and time
export const getCurrentDateTime = (): { currentDate: string; currentTime: string } => {
    const now = new Date();
  
    // Format the date as YYYY-MM-DD
    const currentDate = now.toISOString().split('T')[0];
  
    // Format the time as HH:MM:SS
    const currentTime = now.toTimeString().split(' ')[0];
  
    return { currentDate, currentTime };
  };

///This generates a tx id
export const generateTxId = (): string => {
    const prefix = `tx-byte`
    const random = Math.floor(Math.random() * 10000).toString().padStart(5, '0'); // Adjust the padding as needed
    const transactionId = `${prefix}-${random}`;
    return transactionId;
}

//This function finds the highest investment group given certain conditions
export const findHighestInvestmentGroup = (transactions: Array<ITransaction>, description: TxDescription, status: TxStatus): { currency: string; totalAmount: number } | null => {
    
    //Checking if array is empty
    if (transactions === undefined || transactions.length === 0) {
        return null
    } else {
        // Filter transactions with the specified conditions
        const investmentTransactions = transactions.filter(
            (transaction) => transaction.description === description && transaction.status === status
        );

        // Group transactions by currency
        const groupedTransactions: { [currency: string]: number } = {};
        investmentTransactions.forEach((transaction) => {
            const { currency, amount } = transaction;
            if (currency && amount) {
                groupedTransactions[currency] = (groupedTransactions[currency] || 0) + amount;
            }
        });

        // Find the group with the highest total amount
        let highestGroup: { currency: string; totalAmount: number } | null = null;
        Object.entries(groupedTransactions).forEach(([currency, totalAmount]) => {
            if (!highestGroup || totalAmount > highestGroup.totalAmount) {
                highestGroup = { currency, totalAmount };
            }
        });

        return highestGroup;
    }
};

///This function processes an investment withdrawal based on given conditions
export const processInvestmentTransactions = ( transactions: Array<ITransaction>, description: TxDescription, status: TxStatus
    ): { transactions: ITransaction[] | null, totalAmount: number, oldestDate: string | null } | null => {
        //Checking if array is empty
    if (transactions === undefined || transactions.length === 0) {
        return null
    } else {
        // Get current date
        const currentDate = new Date();
    
        // Filter transactions with description 'Investment' and status 'Successful'
        const investmentTransactions = transactions.filter(
        (transaction) =>
            transaction.description === description &&
            transaction.status === status
        );

        // If no investment transactions, return null
        if (investmentTransactions.length === 0) {
            return null
        }
    
        // Filter transactions with date older than 9 months
        const nineMonthsAgo = new Date(currentDate);
        nineMonthsAgo.setMonth(currentDate.getMonth() - lockPeriodMonth);
    
        const olderThanNineMonths = investmentTransactions.filter(
            (transaction) => {
              // Parse the date in the format 'YYYY-MM-DD'
              const transactionDate = new Date(transaction.date || '');
        
              return transactionDate < nineMonthsAgo;
            }
          );

          // If no transactions older than 9 months, return null
        if (olderThanNineMonths.length === 0) {
            return null
        }
    
        // Find the oldest date in the new extracted items
        const oldestDate = olderThanNineMonths.reduce((oldest, transaction) => {
            const transactionDate = new Date(transaction.date || '');
            return oldest ? (transactionDate < new Date(oldest) ? transaction.date : oldest) : transaction.date;
        }, '');

        // Sum up the total amount in the new extracted items
        const totalAmount = olderThanNineMonths.reduce((sum, transaction) => sum + (transaction.amount || 0), 0);
    
        // Return the items and the summed up amount
        return { transactions: olderThanNineMonths, totalAmount, oldestDate };
    }
  };

///This function filters transactions
export const filterTransactionsBySort = (transactions: Array<ITransaction>, sort: string): Array<ITransaction> => {
    if (sort === TxDescription.ALL) {
      return transactions;
    } else {
      return transactions.filter(transaction => transaction.description === sort);
    }
  };

/**
 * Sum up the amounts for accounts that have successful investment transactions.
 * @param accounts - Array of IAccount
 * @returns Array of objects containing account and the total amount of successful investment transactions.
 */
export const sumInvestmentAmounts = (accounts: Array<IAccount>, description: TxDescription, status: TxStatus): Array<{ account: IAccount, totalAmount: number }> | null => {
    
    if (accounts === undefined || accounts.length === 0) {
        return null
    } else {
        
        const result: { account: IAccount, totalAmount: number }[] = [];
  
        // Iterate through each account
        for (const account of accounts) {
            const transactions = account.transactions || [];
        
            // Filter transactions based on the condition (Investment and Successful)
            const investmentTransactions = transactions.filter(
                transaction => transaction.description === description && transaction.status === status
            );

            
        
            // Calculate the total amount for the filtered transactions
            const totalAmount = investmentTransactions.reduce(
                (sum, transaction) => sum + (transaction.amount || 0),
                0
            );
        
            // Push the account and total amount to the result array
            result.push({ account, totalAmount });
        }
    
        if (result.length === 0) {
            return null
        } else {
            return result;
        }
    }
  };

  ///This function formats a list --> changes [1, 2, 3] to 1, 2 or 3
export const formatCryptos = <T>(array: Array<T>): string | null => {
    if (array || array.length === 0) {
        const arr: string = array.slice(0, -1).join(', ') + (array.length > 1 ? ' or ' : '') + array.slice(-1);
        return arr
    } else {
        return null
    }
}

  //const _number = 1000
// export const checkAndPayDividend = async () => {
//     const now = new Date();
//     const currentDay = now.getDate();

//   // Check if it's the third day of the month
//     try {
//         if (currentDay === 17) {
//             // Check if the function hasn't been run in the last 12 hours
//             const date = now.toISOString().split('T')[0];
//             //const date = { dat }

//             console.log('Utils: ', date)
//             try {
//                 const res = await fetch(`${domainName}/api/dividend?action=date&payment-date=${date}`, { method: "GET", cache: "no-store" });
//                 console.log('ResL: ', res)
//                 const data = await res.json();
//                 if (res.ok) {
//                     console.log("Check Div: ", data)
//                     if (data?.dividend && data?.dividend?.length !== 0) {
//                         if (data?.dividend[0]?.status === true) {
//                             console.log("Dividend for today already paid")
//                         } else {
//                             const dividend: IDividendStatus = { paymentDate: date, status: true }
//                             const res = await fetch(`${domainName}/api/account`, {
//                                 method: 'POST',
//                                 body: JSON.stringify( dividend ),
//                                 headers: {
//                                 'Content-Type': 'application/json',
//                                 },
//                             });
                  
//                             console.log("Res: ", res.ok)
//                             const data = await res.json();
//                             if (res.ok) {
//                                 console.log("Dividend logged")
//                             } else {
//                                 throw new Error(`${data.message}`)
//                             }
//                         }
//                     } else {
//                         console.log("Dividends doesn't exist")
//                     }
//                 } else {
//                     throw new Error(`${data.message}`)
//                 }
//             } catch (error) {
//                 console.log('fetch: ', error)
//             }
            

            
//             //Getting the dividend status
//             // async function getAccount(id: string): Promise<IAccount> {
//             //     //const action: string = "get-account"
//             //     try {
//             //         const response = await fetch(`${domainName}/api/account/${id}?action=get-account`,
//             //           {
//             //             method: "GET",
//             //             cache: "no-store",
//             //           }
//             //         );
                    
//             //           const account = await response.json();
//             //           //console.log("Acc: ", account)
//             //           return account;
//             //     } catch (error) {
//             //         console.error(error);
//             //     }
//             //   }
//         } else {
//             console.log("Today is not pay day")
//         }
//     } catch (error) {
//         console.log("Error: ", error);
//     }
// }

//checkAndPayDividend()