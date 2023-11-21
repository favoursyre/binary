///This would contain all interfaces that will be used

///Libraries -->
import { Model, Document } from 'mongoose';

///Commencing the code
///This declares the interface for image
export interface IImage {
    name?: string,
    src: string,
    width: number,
    height: number
}

//This interface for Milestone
export interface IMileStone {
    year: string,
    title: string,
    story: string
}

//The interface for about us links
export interface IAboutUsLink {
    name: string,
    link: string
}

///The interface for faqs
export interface IFAQs {
    question: string,
    answer: string
}

//The interface for testimonial
export interface ITestimonial {
    image: IImage,
    name: string,
    profession: string,
    testimony: string
}

///The interface for principle
export interface IPrinciple {
    title: string,
    text: string
}

///The interface for principle
export interface IEndeavor {
    title: string,
    text: string
}

///The interface for terms of use
export interface ITerm {
    title: string,
    text: string
}

///The interface for what we do carousel
export interface IWhatWeDo {
    title: string,
    image: IImage,
    text: string
}

///The interface for leaders info
export interface ILeader {
    image: IImage,
    name: string,
    role: string,
    bio?: string,
    bioLink?: string
}

///The interface for ID types
export interface IIDentification {
    category: string,
    documents: Array<string>
}

///Declaring the interface for file attachment
export interface IFileAttachment {
    name: string,
    url: string,
    width?: number, 
    height?: number
  }

///This declares the interface for dividends history
export interface IDividend {
    year: number,
    recordDate: Array<string>,
    payDate: Array<string>,
    totalMutualFunds: Array<number>
}

///This holds the interface for accepted cryptos
export interface ICrypto {
    image: IImage,
    name: string,
    symbol: string,
    address: string
}

///This holds the interface for accepted investors
export interface IInvestor {
    image: IImage,
    name: string
}


///This holds the interface for investment
export interface ITransaction {
    readonly txId?: string,
    amount?: number,
    currency?: string,
    status?: string,
    description?: string,
    section?: string,
    sender?: string,
    recipient?: string,
    readonly date?: string,
    readonly time?: string
}

///This holds the interface for the portfolio of a user
export interface IReferralInfo {
    referralId?: string,
    referralLink?: string,
    numberOfReferrees?: number,
}

///This holds the interface for wallet
export interface IWalletInfo {
    mnemonic?: string
    privateKey?: string,
    publicKey?: string,
    address?: string,
}

///This holds the interface for verification
export interface IVerification {
    status?: boolean,
    document?: string,
    file?: IFileAttachment
}

///This holds the interface for user aacount
export interface IAccount {
    _id?: string,
    fullName: string,
    emailAddress: string, 
    password: string,
    country: string,
    investorType: string,
    referrerId: string,
    profileImage?: IFileAttachment, 
    verification?: IVerification,
    referral?: IReferralInfo, 
    wallet?: IWalletInfo,
    transactions?: Array<ITransaction>,
    createdAt?: string,
    updatedAt?: string,
    __v?: number
}

/**
 * @notice The interface for account owners mongoose schema static
 */
export interface IAccountModel extends Model<IAccount> {
    registerAccount(account: IAccount): IAccount,//
    loginAccount(emailAddress: string, password: string): Array<IAccount>,//
    verifyAccount(id: string, verification: IVerification): Promise<IAccount>,//
    createReferralInfo(id: string, referral: IReferralInfo): IAccount,//
    updateReferralInfo(id: string, referral: IReferralInfo): IAccount,//
    createWalletInfo(id: string, wallet: IWalletInfo): IAccount,//
    resetPassword(emailAddress: string, password: string): IAccount,//
    changeProfileImage(id: string, profileImage: IFileAttachment): IAccount,
    changePassword(emailAddress: string, currentPassword: string, newPassword: string): IAccount,//
    createTransaction(id: string, transaction: ITransaction): IAccount,//
    updateTransaction(id: string, txId: string, transaction: ITransaction): IAccount,//
    getAllAccounts(): Array<IAccount>,//
    getAccountById(id: string): Promise<Array<IAccount>>,//
    getAccountByEmail(emailAddress: string): Array<IAccount>,
    getAllTransactions(id: string): Array<ITransaction>,//
    deleteAccount(id: string): IAccount//
} 

/**
 * @notice The interface for newsletter subscribers mongoose schema
 * @param subscriber The email address of the subscriber
 */
export interface INews {
    _id?: string,
    subscriber: string,
    createdAt?: string,
    updatedAt?: string,
    __v?: number
  }

/**
 * @notice The interface for newsletter subscribers mongoose schema static
 */
 export interface INewsModel extends Model<INews> {
    createSubscriber(newsletter: INews): INews,
    getAllSubscriber(): Array<INews>,
    deleteSubscriber(id: string): INews
  } 

///Declaring the interface for inquiry
export interface IInquiry {
    _id?: string,
    fullName: string,
    emailAddress: string, 
    subject: string,
    message: string
    createdAt?: string,
    updatedAt?: string,
    __v?: number
  }
  
  ///Declaring the interface for inquiry mongoose schema static
  export interface IInquiryModel extends Model<IInquiry> {
    createInquiry(inquiry: IInquiry): Array<IInquiry>,
    getAllInquiries(): Array<IInquiry>,
    getInquiryById(id: string): Array<IInquiry>
    deleteInquiry(id: string): IInquiry//
  }

///The interface for payment status
export interface IDividendStatus {
    paymentDate: string,
    status: boolean
}

///The interface for payment status model
export interface IDividendStatusModel extends Model<IDividendStatus> {
    createDividend(dividend: IDividendStatus): Array<IDividendStatus>,
    getAllDividends(): Array<IDividendStatus>,
    getDividendByDate(paymentDate: string): Array<IDividendStatus>
}

//The enum for transaction descriptions
export enum TxDescription {
    ALL = "All",
    INVEST = "Investment",
    DIVIDEND = "Dividend",
    REFER = "Referral Bonus",
    WITHDRAW ="Withdrawal"
}

//This enum for tx status
export enum TxStatus {
    SUCCESS = "Successful",
    PENDING = "Pending",
    CANCEL = "Cancelled"
}

///Type for metadata arg props
export type Props = {
    params: { id: string }
    //searchParams: { [key: string]: string | string[] | undefined }
  }