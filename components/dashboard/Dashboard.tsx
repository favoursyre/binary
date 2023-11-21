"use client"
///Dashboard component

///Libraries -->
import styles from "./dashboard.module.scss"
import { useRouter, usePathname } from 'next/navigation';
import { 
  companyName, domainName, getItemByKey, lockInPeriod, calculateTxTotal, filterTransactionsBySort, getCurrentDateTime, 
  //generateTxId, generateWallet,
  minInvestAmount, minReinvestAmount, minWithdrawAmount, sleep, companyWallet, processInvestmentTransactions 
} from "@/config/utils";
import { notify, copyToClipboard } from "@/config/clientUtils";
//import Image from "next/image";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WalletIcon from '@mui/icons-material/Wallet';
import SortIcon from '@mui/icons-material/Sort';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useState, ChangeEvent, TouchEvent, MouseEvent, FormEvent, useEffect } from "react";
import { IAccount, ITransaction, TxDescription, TxStatus } from "@/config/interfaces";
import CloseIcon from '@mui/icons-material/Close';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PaymentIcon from '@mui/icons-material/Payment';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { cryptos } from "@/config/database";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Loading from "../loadingCircle/Circle";

///Commencing the code 
const sortList: Array<string> = Object.values(TxDescription)

const headers: Array<string> = [
  "Status", 
  "Amount",
  'Description',
  "Details"
]

const transactions: ITransaction[] = [
  { description: 'Investment', status: 'Successful', amount: 100, currency: 'USD', date: "1999-02-14" },
  { description: 'Investment', status: 'Pending', amount: 150, currency: 'EUR', date: "1999-02-14" },
  { description: 'Withdraw', status: 'Successful', amount: 200, currency: 'USD', date: "1999-02-14" },
  { description: 'Investment', status: 'Successful', amount: 120, currency: 'EUR', date: "1999-02-14" },
  { description: 'Refund', status: 'Cancelled', amount: 50, currency: 'USD', date: "1999-02-14" },
  { description: 'Investment', status: 'Successful', amount: 900, currency: 'USD', date: "1999-02-14" },
  { description: 'Investment', status: 'Successful', amount: 150, currency: 'EUR', date: "1999-02-14" },
  { description: 'Investment', status: 'Successful', amount: 100, currency: 'USD', date: "1999-02-14" },
  { description: 'Investment', status: 'Successful', amount: 1500, currency: 'NGN', date: "1999-02-14" },
  { description: 'Investment', status: 'Successful', amount: 800, currency: 'USD', date: "1999-02-14" },
  { description: 'Investment', status: 'Successful', amount: 550, currency: 'EUR', date: "1999-02-14" },
];

/**
 * @title Dashboard Component
 * @returns The Dashboard component
 */
const Dashboard = ({ account_ }: { account_: IAccount }) => {
    const router = useRouter()
    const routerPath = usePathname();
    const [selectedSort, setSelectedSort] = useState<string>(TxDescription.ALL)
    //[filterTx, setFilter
    const [selectedChannel, setSelectedChannel] = useState<string>("")
    const [bodyIsActive, setBodyIsActive] = useState<boolean>(false)
    const [investAmount, setInvestAmount] = useState<number>()
    const [withdrawAmount, setWithdrawAmount] = useState<number>()
    const [walletAddress, setWalletAddress] = useState<string>("")
    const [investRequest, setInvestRequest] = useState<boolean>(false)
    const [reinvestRequest, setReinvestRequest] = useState<boolean>(false)
    const [withdrawInvestmentRequest, setWithdrawInvestmentRequest] = useState<boolean>(false)
    const [withdrawDividendRequest, setWithdrawDividendRequest] = useState<boolean>(false)
    const [investAddress, setInvestAddress] = useState<string>("")
    const [txContent, setTxContent] = useState<boolean>(false)
    const [investContent, setInvestContent] = useState<boolean>(false)
    const [withdrawContent, setWithdrawContent] = useState<boolean>(false)
    const [investComponent, setInvestComponent] = useState<string>("")
    const [withdrawComponent, setWithdrawComponent] = useState<string>("")
    const [modal, setModal] = useState<boolean>(false)
    const [account, setAccount] = useState<IAccount>(account_)
    const [loading, setLoading] = useState<boolean>(false)
    const [txInfo, setTxInfo] = useState<ITransaction>()
    const [investment, setInvestment] = useState<number>(calculateTxTotal(account?.transactions, TxDescription.INVEST, TxStatus.SUCCESS))
    const [dividend, setDividend] = useState<number>(calculateTxTotal(account?.transactions, TxDescription.DIVIDEND, TxStatus.SUCCESS) + calculateTxTotal(account?.transactions, TxDescription.REFER, TxStatus.SUCCESS))
    //const [withdrawCurrency, setWithdrawCurrency] = useState<string | null>(account?.transactions?.length !== 0 ? findHighestInvestmentGroup(account.transactions, TxDescription.INVEST, TxStatus.SUCCESS).currency : null)
    //const dividend = 2000
    const [withdrawInvestment, setWithdrawInvestment] = useState<{transactions: ITransaction[], totalAmount: number, oldestDate: string} | null>(processInvestmentTransactions(account?.transactions, TxDescription.INVEST, TxStatus.SUCCESS))
    //console.log("tx id: ", processInvestmentTransactions(transactions, TxDescription.INVEST, TxStatus.SUCCESS))

    useEffect(() => {
  
      if (account === undefined) {
        console.log("Acocunt dash: ", account)
        //notify("error", "Network error or probably this account doesn't exist. Reloading page in 3seconds")
        //sleep(3000)
        window.location.reload()
      }

  
    }, [account, txInfo, loading, selectedChannel]);

   // console.log("Currency: ", findHighestInvestmentGroup(transactions, TxDescription.INVEST, TxStatus.SUCCESS))

    ///Handle selected sort
    const handleSelectSort = (e: ChangeEvent<HTMLSelectElement>) => {
      setSelectedSort(() => e.target.value);
    };

    ///Handle scroll container
    const scrollContainer = (e: TouchEvent<HTMLDivElement> | MouseEvent<HTMLDivElement, globalThis.MouseEvent>, action: string) => {
      //e.preventDefault() 

      if (action === "start") {
        setBodyIsActive(() => true)
      } else if (action === "end") {
        setBodyIsActive(() => false)
      }
    }

    ///This is triggered when user wants to view more details about a transaction
    const viewModalContent = (
      e: MouseEvent<SVGSVGElement, globalThis.MouseEvent> | MouseEvent<HTMLButtonElement, globalThis.MouseEvent> | FormEvent<HTMLFormElement>,
      action: string, 
      content: string | null
    ) => {
      e.preventDefault()

      if (action === "open") {
        if (content === "transaction") {
          setTxContent(() => true)
        } else if (content === "invest") {
          setInvestContent(() => true)
          setInvestComponent(() => content)
        } else if (content === "re-invest") {
          //check if the user has an dividend to be reinvested
          // const dividend: number = calculateTxTotal(account.transactions, TxDescription.DIVIDEND, TxStatus.SUCCESS) + calculateTxTotal(account.transactions, TxDescription.REFER, TxStatus.SUCCESS)

          
          if (dividend < minReinvestAmount) {
            notify("warn", `You need to have a minimum of $${minReinvestAmount} to be able to re-invest`)
            return
          } else {
            setInvestContent(() => true)
            setInvestComponent(() => content)
          }
          
        } else if (content === "withdraw-investment") {
          

          ///Check if the user is eligible to withdraw and then set the withdrawRequest accordingly
          if (investment < minWithdrawAmount) {
            notify("warn", `You need to have a minimum of $${minWithdrawAmount} to be able to withdraw`)
            return
          } else if (withdrawInvestment === null) {
            notify("info", `Unable to process withdrawals at the moment, your investment has a lock-in period of ${lockInPeriod}`)
            return
          } else {
            setWithdrawContent(() => true)
            setWithdrawComponent(() => content)
          }

        } else if (content === "withdraw-dividend") {

          if (dividend < minWithdrawAmount) {
            notify("warn", `You need to have a minimum of $${minWithdrawAmount} to be able to withdraw`)
            return
          } else {
            setWithdrawContent(() => true)
            setWithdrawComponent(() => content)
          }
        }

      } else if (action === "close") {
        if (txContent) {
          setTxContent(() => false)
        } else if (investContent) {
          setInvestContent(() => false)

          if (investRequest || reinvestRequest) {
            window.location.reload()
          }
          
        } else if (withdrawContent) {
          setWithdrawContent(() => false)

          if (withdrawInvestmentRequest || withdrawDividendRequest) {
            window.location.reload()
          } 

        }
        
      }
      
      setModal(() => !modal)
    }

    ///This is triggered when the user submits an invest request
    const submitInvestment = async (e: FormEvent<HTMLFormElement>, action: string) => {
      e.preventDefault()

      //Validating generic args
      if (!investAmount) {
        notify("error", "Input an amount")
        return
      }

      if (action === "invest") {

        ///Validating the required args
        if (!selectedChannel) {
          notify("error", "Choose a Payment channel")
          return
        } else if (investAmount < minInvestAmount) {
          notify("warn", `Minimum amount is $${minInvestAmount}`)
          return
        }

        setInvestAddress(() => getItemByKey(cryptos, "name", selectedChannel)[0].address)
        
        setInvestRequest(() => true)
        setLoading(() => true)

        const { currentDate, currentTime } = getCurrentDateTime()

        //Sending the info to the backend
        const transaction: ITransaction = { 
          //txId: generateTxId(), 
          amount: investAmount,
          currency: getItemByKey(cryptos, "name", selectedChannel)[0].name,
          status: TxStatus.PENDING,
          description: TxDescription.INVEST,
          sender: "Null",
          recipient: getItemByKey(cryptos, "name", selectedChannel)[0].address,
          date: currentDate,
          time: currentTime
        }
        const id: string = account?._id

        console.log('Transaction: ', transaction)

        //Calling the neccessary api
        try {
          //console.log("Account client: ", account)
          const res = await fetch(`${domainName}/api/account/${id}?action=create-transaction&mode=invest`, {
              method: 'PATCH',
              body: JSON.stringify( transaction ),
              headers: {
              'Content-Type': 'application/json',
              },
          });

          console.log("Res: ", res.ok)
          const data = await res.json();
          if (res.ok) {
              await sleep(1000)
              setLoading(() => false)
              notify("success", `${data.message}`)
          } else {
              throw new Error(`${data.message}`)
          }
          //setDone(() => true)
        } catch (error) {
            console.log("Error: ", error)
            notify("error", `${error.message}`)
            viewModalContent(e, "close", null)
        }

      } else if (action === "re-invest") {

        ///Validating the required args
        if (investAmount < minReinvestAmount) { ///check if amount is greater than the dividends
          notify("warn", `Minimum amount is $${minReinvestAmount}`)
          return
        } else if(investAmount > dividend) {
          notify("warn", `Maximum amount is $${dividend.toLocaleString("en-US")}`)
          return
        }

        setReinvestRequest(() => true)
        setLoading(() => true)

        const { currentDate, currentTime } = getCurrentDateTime()

        //Sending the info to the backend
        const transaction: ITransaction = { 
          //txId: generateTxId(), 
          amount: investAmount,
          currency: `${companyName} Token`,
          status: TxStatus.SUCCESS,
          description: TxDescription.INVEST,
          sender: account.wallet.address,
          recipient: companyWallet.address,
          date: currentDate,
          time: currentTime
        }
        const id: string = account?._id

        console.log('Transaction: ', transaction)

        //Calling the neccessary api
        try {
          //console.log("Account client: ", account)
          const res = await fetch(`${domainName}/api/account/${id}?action=create-transaction&mode=re-invest`, {
              method: 'PATCH',
              body: JSON.stringify( transaction ),
              headers: {
              'Content-Type': 'application/json',
              },
          });

          console.log("Res: ", res.ok)
          const data = await res.json();
          if (res.ok) {
              await sleep(1000)
              setLoading(() => false)
              notify("success", `${data.message}`)
          } else {
              throw new Error(`${data.message}`)
          }
          //setDone(() => true)
        } catch (error) {
            console.log("Error: ", error)
            notify("error", `${error.message}`)
            viewModalContent(e, "close", null)
        }
      }
    }

    ///This is triggerred when the user submits a withdraw request
    const submitWithdrawal = async (e: FormEvent<HTMLFormElement>, action: string) => {
      e.preventDefault()

      //Validation of args
      if (!selectedChannel) {
        notify("error", `Select a mode of payment`) //=====> change bitcoin here to the correct currnecy ========================================>
        return
      } else if (!walletAddress) {
        notify("error", `Input your ${selectedChannel} wallet address`) //=====> change bitcoin here to the correct currnecy ========================================>
        return
      } else if (!withdrawAmount) {
        notify("error", "Input an amount")
        return
      } else if (withdrawAmount < minWithdrawAmount) {
        notify("warn", `Minimum amount is $${minWithdrawAmount}`)
        return
      }

      if (action === "withdraw-investment") {
        //Validating args
        if(withdrawAmount > withdrawInvestment.totalAmount) {
          notify("warn", `Maximum amount is $${investment.toLocaleString("en-US")}`)
          return
        }

        setWithdrawInvestmentRequest(() => true)
        setLoading(() => true)

        const { currentDate, currentTime } = getCurrentDateTime()

        //Sending the info to the backend
        const transaction: ITransaction = { 
          //txId: generateTxId(), 
          amount: withdrawAmount,
          currency: getItemByKey(cryptos, "name", selectedChannel)[0].name,
          status: TxStatus.PENDING,
          description: TxDescription.WITHDRAW,
          section: TxDescription.INVEST,
          sender: getItemByKey(cryptos, "name", selectedChannel)[0].address,
          recipient: walletAddress,
          date: currentDate,
          time: currentTime
        }
        const id: string = account?._id

        console.log('Transaction: ', transaction)

        //Calling the neccessary api
        try {
          //console.log("Account client: ", account)
          const res = await fetch(`${domainName}/api/account/${id}?action=create-transaction&mode=withdraw`, {
              method: 'PATCH',
              body: JSON.stringify( transaction ),
              headers: {
              'Content-Type': 'application/json',
              },
          });

          console.log("Res: ", res.ok)
          const data = await res.json();
          if (res.ok) {
              await sleep(1000)
              setLoading(() => false)
              notify("success", `${data.message}`)
          } else {
              throw new Error(`${data.message}`)
          }
          //setDone(() => true)
        } catch (error) {
            console.log("Error: ", error)
            notify("error", `${error.message}`)
            viewModalContent(e, "close", null)
        }

      } else if (action === "withdraw-dividend") {
        //Validating args
        if(withdrawAmount > dividend) {
          notify("warn", `Maximum amount is $${dividend.toLocaleString("en-US")}`)
          return
        }

        setWithdrawDividendRequest(() => true)
        setLoading(() => true)

        const { currentDate, currentTime } = getCurrentDateTime()

        //Sending the info to the backend
        const transaction: ITransaction = { 
          //txId: generateTxId(), 
          amount: withdrawAmount,
          currency: getItemByKey(cryptos, "name", selectedChannel)[0].name,
          status: TxStatus.PENDING,
          description: TxDescription.WITHDRAW,
          section: TxDescription.DIVIDEND,
          sender: getItemByKey(cryptos, "name", selectedChannel)[0].address,
          recipient: walletAddress,
          date: currentDate,
          time: currentTime
        }
        const id: string = account?._id

        console.log('Transaction: ', transaction)

        //Calling the neccessary api
        try {
          //console.log("Account client: ", account)
          const res = await fetch(`${domainName}/api/account/${id}?action=create-transaction&mode=withdraw`, {
              method: 'PATCH',
              body: JSON.stringify( transaction ),
              headers: {
              'Content-Type': 'application/json',
              },
          });

          console.log("Res: ", res.ok)
          const data = await res.json();
          if (res.ok) {
              await sleep(1000)
              setLoading(() => false)
              notify("success", `${data.message}`)
          } else {
              throw new Error(`${data.message}`)
          }
          //setDone(() => true)
        } catch (error) {
            console.log("Error: ", error)
            notify("error", `${error.message}`)
            viewModalContent(e, "close", null)
        }
      }
    }

    ///This function copies address to clipboard
    const copyAddress = async (e: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>, address: string) => {
      e.preventDefault()

      //await navigator.clipboard.writeText(address);
      copyToClipboard(address)
      console.log("Address: ", address)
      notify("success", "Wallet address has been copied to clipboard")
    }

  return (
    <>
      <div className={styles.main} id="dashboard">
        <div className={styles.container}>
          <span className={styles.greeting}>Greetings! {account?.fullName}</span>
          <div className={styles.portfolio}>
            <div className={styles.investment}>
              <div className={styles.iconBrief}>
                <AccountBalanceIcon className={styles.icon} />
                <div className={styles.brief}>
                  <span className={styles.span1}>Investment</span>
                  <span className={styles.span2}>${Number(investment.toFixed(2)).toLocaleString("en-US")}</span>
                </div>
              </div>
              <div className={styles.buttons}>
                <button onClick={(e) => viewModalContent(e, "open", "invest")} >
                  <FileUploadIcon className={styles.icon} />
                  <span>Invest</span>
                </button>
                <button onClick={(e) => viewModalContent(e, "open", "withdraw-investment")}>
                  <FileDownloadIcon className={styles.icon} />
                  <span>Withdraw</span>
                </button>
              </div>
            </div>
            <div className={styles.dividend}>
              <div className={styles.iconBrief}>
                <TrendingUpIcon className={styles.icon} />
                <div className={styles.brief}>
                  <span className={styles.span1}>Dividends/Referral Bonus</span>
                  <span className={styles.span2}>
                    ${Number(dividend.toFixed(2)).toLocaleString("en-US")}
                  </span>
                </div>
              </div>
              <div className={styles.buttons}>
                <button onClick={(e) => viewModalContent(e, "open", "re-invest")}>
                  <FileUploadIcon className={styles.icon} />
                  <span>Re-Invest</span>
                </button>
                <button onClick={(e) => viewModalContent(e, "open", "withdraw-dividend")}>
                  <FileDownloadIcon className={styles.icon}/>
                  <span>Withdraw</span>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.transactionHistory}>
            <div className={styles.heading}>
              <span className={styles.span1}>Transaction History</span>
              <div className={styles.filter}>
                <SortIcon className={styles.sortIcon} />
                <select value={selectedSort} onChange={handleSelectSort}>
                    {sortList.map((sort, id) => (
                        <option value={sort} key={id}>{sort}</option>
                    ))}
                </select>
              </div>
            </div>
            <div className={styles.table}>
              <div className={styles.tableHead}>
                  {headers.map((header, id) => (
                      <span className={`${styles.title} ${styles[`title${id}`]}`} key={id}>{header}</span>
                  ))}
              </div>
              <div 
                className={styles.bodyContainer}  
                onTouchStart={(e) => scrollContainer(e, "start")}
                onTouchStartCapture={(e) => scrollContainer(e, "start")} 
                onTouchEnd={(e) => scrollContainer(e, "end")}
                onTouchEndCapture={(e) => scrollContainer(e, "end")}
                onMouseEnter={(e) => scrollContainer(e, "start")}
                onMouseLeave={(e) => scrollContainer(e, "end")}
                style = {{ overflowY: bodyIsActive ? "auto" : "hidden" }}
              >
                {account?.transactions && account?.transactions?.length === 0 ? (
                  <div className={styles.emptyBody}>
                    <h4>Your Transaction History is empty</h4>
                    <span>It looks like you haven&apos;t made any transactions yet.</span>
                    <span>Start your financial journey today!</span>
                  </div>
                ) : account &&  account?.transactions?.length !== 0 ? (
                  filterTransactionsBySort(account?.transactions, selectedSort).map((transaction, index) => (
                    <div className={`${styles.tableBody} ${styles[`body${index}`]}`} key={index}>
                      <span className={styles.span1}>{transaction.status}</span>
                      <span className={styles.span2}>${Number(transaction.amount.toFixed(2)).toLocaleString("en-US")}</span>
                      <span className={styles.span3}>{transaction.description}</span>
                      <div className={styles.button}>
                      <button>
                        <MoreHorizIcon className={styles.icon} 
                          onClick={(e) => {
                            setTxInfo(() => transaction)
                            viewModalContent(e, "open", "transaction")
                          }} 
                        />
                      </button>
                      </div> 
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${modal ? styles.activeModal : styles.inActivemModal}`} >
        <div className={styles.container}>
          <CloseIcon className={styles.closeIcon} onClick={(e) => viewModalContent(e, "close", null)} />
          <div className={styles.transactionContent} style={{ display: txContent ? "flex" : "none"}}>
            <ReceiptIcon className={styles.receipt} />
            {txInfo ? (
              <div className={styles.content}>
                <span><strong>Id:</strong> {txInfo?.txId}</span>
                <span><strong>Status:</strong> {txInfo?.status}</span>
                <span><strong>Currency:</strong> {txInfo?.currency}</span>
                <span><strong>Amount:</strong> ${Number(txInfo?.amount.toFixed(2)).toLocaleString("en-US")}</span>
                <span><strong>Description:</strong> {txInfo?.description}</span>
                <span><strong>Sender:</strong> {txInfo?.sender ? txInfo?.sender : "Null"}</span>
                <span><strong>Recipient:</strong> {txInfo?.recipient ? txInfo?.recipient : "Null"}</span>
                <span><strong>Date:</strong> {txInfo?.date}</span>
                <span><strong>Time:</strong> {txInfo?.time}</span>
            </div>
            ) : (
              <></>
            )}
          </div>
          <div className={styles.investContent} style={{ display: investContent ? "flex" : "none"}}>
            <PaymentIcon className={styles.pay} />
            {investComponent === "invest" ? (
              <div className={styles.investComponent}>
              {investRequest && !loading ? (
                <div className={styles.investSpan}>
                  <span>
                    Pay exactly ${investAmount?.toLocaleString("en-US")} worth of {selectedChannel} to this {selectedChannel} Network Wallet Address  
                  </span>
                  <div className={styles.address} onClick={(e) => copyAddress(e, investAddress)}>
                    <span>{investAddress}</span>
                    <ContentCopyIcon className={styles.copy} />
                  </div>
                </div>
              ) : investRequest && loading ? (
                    <Loading />
              ) : !investRequest && !loading ? (
                <form onSubmit={(e) => submitInvestment(e, "invest")}>
                  <div className={styles.selectCrypto}>
                    <PriceChangeIcon className={styles.cryptoIcon}/>
                    <select value={selectedChannel} onChange={(e) => setSelectedChannel(e.target.value)}>
                      <option value={""}>Payment Channel</option>
                      {cryptos.map((crypto, id) => (
                        <option value={crypto.name} key={id}>{crypto.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className={styles.amount}>
                    <AttachMoneyIcon className={styles.amountIcon}/>
                    <input
                      placeholder="Amount in USD"
                      type="number"
                      onChange={(e) => setInvestAmount(Number(e.target.value))}
                      value={investAmount === 0 ? "Amount in USD" : investAmount}
                    />
                  </div>
                  <button>
                    <span>Submit</span>
                  </button>
                </form>
              ) : (
                <></>
              )}
              </div>
            ) : investComponent === "re-invest" ? (
              <div className={styles.reinvestComponent}>
              {reinvestRequest && !loading ? (
                <div className={styles.reinvestSpan}>
                  <span>
                    ${investAmount?.toLocaleString("en-US")} from your dividends/referral bonus has been successfully re-invested  
                  </span>
                </div>
              ) : reinvestRequest && loading ? (
                <Loading />
              ) : !reinvestRequest && !loading ? (
                <form onSubmit={(e) => submitInvestment(e, "re-invest")}>
                  <div className={styles.amount}>
                    <AttachMoneyIcon className={styles.amountIcon}/>
                    <input
                      placeholder="Amount in USD"
                      type="number"
                      onChange={(e) => setInvestAmount(Number(e.target.value))}
                      value={investAmount === 0 ? "Amount in USD" : investAmount}
                    />
                  </div>
                  <button>
                    <span>Submit</span>
                  </button>
                </form>
              ) : (
                <></>
              )}
              </div>
            ) : (
              <></>
            )}
            
          </div>
          <div className={styles.withdrawContent} style={{ display: withdrawContent ? "flex" : "none"}}>
            <WalletIcon className={styles.wallet} />
            {withdrawComponent === "withdraw-investment" ? (
              <div className={styles.withdrawInvestmentComponent}>
                {loading && withdrawInvestmentRequest ? (
                  <Loading />
                ) : !loading && withdrawInvestmentRequest ? (
                <div className={styles.withdrawInvestmentSpan}>
                  <span>
                  Withdrawal of ${withdrawAmount?.toLocaleString("en-US")} from your investment has been successfully initiated and would be processed within the next 3 business days.  
                  </span>
                </div>
              ) : !loading && !withdrawInvestmentRequest ? (
                <form onSubmit={(e) => submitWithdrawal(e, "withdraw-investment")}>
                  <div className={styles.selectCrypto}>
                    <PriceChangeIcon className={styles.cryptoIcon}/>
                    <select value={selectedChannel} onChange={(e) => setSelectedChannel(e.target.value)}>
                      <option value={""}>Payment Channel</option>
                      {cryptos.map((crypto, id) => (
                        <option value={crypto.name} key={id}>{crypto.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className={styles.address}>
                    <WalletIcon className={styles.walletIcon}/>
                    <input
                      placeholder={`${selectedChannel} Wallet Address`} //===================================================================> rectify this area ===>
                      type="text"
                      onChange={(e) => setWalletAddress(e.target.value)}
                      value={walletAddress}
                    />
                  </div>
                  <div className={styles.amount}>
                    <AttachMoneyIcon className={styles.amountIcon}/>
                    <input
                      placeholder="Amount in USD"
                      type="number"
                      onChange={(e) => setWithdrawAmount(Number(e.target.value))}
                      value={withdrawAmount === 0 ? "Amount in USD" : withdrawAmount}
                    />
                  </div>
                  <button>
                    <span>Withdraw</span>
                  </button>
                </form>
              ) : (
                <></>
              )}
              </div>
            ) : withdrawComponent === "withdraw-dividend" ? (
              <div className={styles.withdrawDividendComponent}>
                {loading && withdrawDividendRequest ? (
                  <Loading />
                ) : !loading && withdrawDividendRequest ? (
                  <div className={styles.withdrawDividendSpan}>
                    <span>
                      Withdrawal of ${withdrawAmount?.toLocaleString("en-US")} from your dividends/referral bonus has been successfully initiated and would be processed within the next 3 business days.
                    </span>
                  </div>
                ) : !loading && !withdrawDividendRequest ? (
                  <form onSubmit={(e) => submitWithdrawal(e, "withdraw-dividend")}>
                    <div className={styles.selectCrypto}>
                    <PriceChangeIcon className={styles.cryptoIcon}/>
                    <select value={selectedChannel} onChange={(e) => setSelectedChannel(e.target.value)}>
                      <option value={""}>Payment Channel</option>
                      {cryptos.map((crypto, id) => (
                        <option value={crypto.name} key={id}>{crypto.name}</option>
                      ))}
                    </select>
                  </div>
                    <div className={styles.address}>
                      <WalletIcon className={styles.walletIcon}/>
                      <input
                        placeholder={`${selectedChannel} Wallet Address`} //===================================================================> rectify this area ===>
                        type="text"
                        onChange={(e) => setWalletAddress(e.target.value)}
                        value={walletAddress}
                      />
                    </div>
                    <div className={styles.amount}>
                      <AttachMoneyIcon className={styles.amountIcon}/>
                      <input
                        placeholder="Amount in USD"
                        type="number"
                        onChange={(e) => setWithdrawAmount(Number(e.target.value))}
                        value={withdrawAmount === 0 ? "Amount in USD" : withdrawAmount}
                      />
                    </div>
                    <button>
                      <span>Withdraw</span>
                    </button>
                  </form>
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <></>
            )}
            
          </div>
        </div>
        </div>
    </>
  );
};
//${findHighestInvestmentGroup(account.transactions, TxDescription.INVEST, TxStatus.SUCCESS).currency}
export default Dashboard;