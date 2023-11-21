// "use client"
// ///Account component

// ///Libraries -->
// import styles from "./dashboard.module.scss"
// import { useRouter, usePathname } from 'next/navigation';
// import { companyName, yearCreated, routeStyle, getItemByKey, lockInPeriod } from "@/config/utils";
// import { notify, copyToClipboard } from "@/config/clientUtils";
// import Image from "next/image";
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import WalletIcon from '@mui/icons-material/Wallet';
// import SortIcon from '@mui/icons-material/Sort';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import DragHandleIcon from '@mui/icons-material/DragHandle';
// import FileUploadIcon from '@mui/icons-material/FileUpload';
// import FileDownloadIcon from '@mui/icons-material/FileDownload';
// import { useState, ChangeEvent, TouchEvent, MouseEvent, FormEvent } from "react";
// import { ITransaction } from "@/config/interfaces";
// import CloseIcon from '@mui/icons-material/Close';
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import PaymentIcon from '@mui/icons-material/Payment';
// import ReceiptIcon from '@mui/icons-material/Receipt';
// import PriceChangeIcon from '@mui/icons-material/PriceChange';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import PaidIcon from '@mui/icons-material/Paid';
// import { cryptos } from "@/config/database";
// import ContentCopyIcon from '@mui/icons-material/ContentCopy';
// import Dashboard from "@/components/dashboard/Dashboard"
// import AccountBar from "@/components/accountBar/AccountBar"
// import Profile from "@/components/accountProfile/Profile"

// ///Commencing the code 
// const sortList: Array<string> = [
//   "All",
//   "Investments",
//   "Dividends",
//   "Referral Bonus",
//   "Withdrawals"
// ]

// const headers: Array<string> = [
//   "Status", 
//   "Amount",
//   'Description',
//   "Details"
// ]

// const transactions: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10
//   // { 
//   //   id: "561651651511",
//   //   channel: "Bitcoin",
//   //   status: "Pending",
//   //   descrip
//   // }
// ]

// /**
//  * @title Dashboard Component
//  * @returns The Dashboard component
//  */
// const Account = () => {
//     const router = useRouter()
//     const routerPath = usePathname();
//     const [selectedSort, setSelectedSort] = useState<string>("All")
//     const [selectedChannel, setSelectedChannel] = useState<string>("")
//     const [bodyIsActive, setBodyIsActive] = useState<boolean>(false)
//     const [investAmount, setInvestAmount] = useState<number>()
//     const [withdrawAmount, setWithdrawAmount] = useState<number>()
//     const [walletAddress, setWalletAddress] = useState<string>("")
//     const [investRequest, setInvestRequest] = useState<boolean>(false)
//     const [reinvestRequest, setReinvestRequest] = useState<boolean>(false)
//     const [withdrawInvestmentRequest, setWithdrawInvestmentRequest] = useState<boolean>(true)
//     const [withdrawDividendRequest, setWithdrawDividendRequest] = useState<boolean>(false)
//     const [investAddress, setInvestAddress] = useState<string>("")
//     const [txContent, setTxContent] = useState<boolean>(false)
//     const [investContent, setInvestContent] = useState<boolean>(false)
//     const [withdrawContent, setWithdrawContent] = useState<boolean>(false)
//     const [investComponent, setInvestComponent] = useState<string>()
//     const [withdrawComponent, setWithdrawComponent] = useState<string>()
//     const [modal, setModal] = useState<boolean>(false)

//     ///Handle selected sort
//     const handleSelectSort = (e: ChangeEvent<HTMLSelectElement>) => {
//       setSelectedSort(() => e.target.value);
//     };

//     ///Handle scroll container
//     const scrollContainer = (e: TouchEvent<HTMLDivElement> | MouseEvent<HTMLDivElement, globalThis.MouseEvent>, action: string) => {
//       //e.preventDefault() 

//       if (action === "start") {
//         setBodyIsActive(() => true)
//       } else if (action === "end") {
//         setBodyIsActive(() => false)
//       }
//     }

//     ///This is triggered when user wants to view more details about a transaction
//     const viewModalContent = (
//       e: MouseEvent<SVGSVGElement, globalThis.MouseEvent> | MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, 
//       action: string, 
//       content: string | null
//     ) => {
//       e.preventDefault()

//       if (action === "open") {
//         if (content === "transaction") {
//           setTxContent(() => true)
//         } else if (content === "invest") {
//           setInvestContent(() => true)
//           setInvestComponent(() => content)
//         } else if (content === "re-invest") {
//           //check if the user has an dividend to be reinvested
//           setInvestContent(() => true)
//           setInvestComponent(() => content)
//         } else if (content === "withdraw-investment") {
//           setWithdrawContent(() => true)
//           setWithdrawComponent(() => content)

//           ///Check if the user is eligible to withdraw and then set the withdrawRequest accordingly
//         } else if (content === "withdraw-dividend") {
//           setWithdrawContent(() => true)
//           setWithdrawComponent(() => content)

//           ///Check if the user is eligible to withdraw and then set the withdrawRequest accordingly
//         }

//       } else if (action === "close") {
//         if (txContent) {
//           setTxContent(() => false)
//         } else if (investContent) {
//           setInvestContent(() => false)
//           //window.location.reload()
//         } else if (withdrawContent) {
//           setWithdrawContent(() => false)
//           //window.location.reload()
//         }
//         window.location.reload()
//       }
      
//       setModal(() => !modal)
//     }

//     ///This is triggered when the user submits an invest request
//     const submitInvestment = (e: FormEvent<HTMLFormElement>, action: string) => {
//       e.preventDefault()

//       if (action === "invest") {

//         ///Validating the required args
//         if (!selectedChannel) {
//           notify("error", "Choose a Payment channel")
//           return
//         } else if (!investAmount) {
//           notify("error", "Input an amount")
//           return
//         } else if (investAmount < 100) {
//           notify("error", "Minimum amount is $100")
//           return
//         }

//         setInvestAddress(() => getItemByKey(cryptos, "name", selectedChannel)[0].address)
//         setInvestRequest(() => true)
//       } else if (action === "re-invest") {

//         ///Validating the required args
//         if (!investAmount) {
//           notify("error", "Input an amount")
//           return
//         } else if (investAmount < 100) { ///check if amount is greater than the dividends
//           notify("error", "Minimum amount is $100")
//           return
//         }

//         setReinvestRequest(() => true)
//       }
//     }

//     ///This is triggerred when the user submits a withdraw request
//     const submitWithdrawal = (e: FormEvent<HTMLFormElement>, action: string) => {
//       e.preventDefault()

//       //Validation of args
//       if (!walletAddress) {
//         notify("error", `Input your Bitcoin wallet address`)
//         return
//       } else if (!withdrawAmount) {
//         notify("error", "Input an amount")
//         return
//       } else if (withdrawAmount < 10) {
//         notify("error", "Minimum amount is $10")
//         return
//       }

//       if (action === "withdraw-investment") {

//       }
//     }

//     ///This function copies address to clipboard
//     const copyAddress = async (e: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>, address: string) => {
//       e.preventDefault()

//       //await navigator.clipboard.writeText(address);
//       copyToClipboard(address)
//       console.log("Address: ", address)
//       notify("success", "Wallet address has been copied to clipboard")
//     }

//   return (
//     <>
//       <Profile />
//       <Dashboard />
//       <Profile />
//     </>
//   );
// };

// export default Account;