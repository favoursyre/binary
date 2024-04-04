///This is the api route for editng accounts

///Libraries -->
import { 
    sendDividendPaymentEmail, sendIdUnderReviewEmail, sendInvestmentInitEmail, sendInvestmentPaymentEmail, sendReferralBonusEmail, sendWelcomeEmail, sendWithdrawalInitEmail, sendWithdrawalPaymentEmail, 
} from "@/config/email";
import connectMongoDB from "@/config/mongodb";
import { Account } from "@/models/account";
import { NextResponse } from "next/server";
import { IAccount, IReferralInfo, ITransaction, TxDescription, TxStatus, IWalletInfo } from "@/config/interfaces";
import { getCurrentDateTime, generateTxId, referralBonusPercent, calculateTxTotal,
    companyName, companyWallet, sumInvestmentAmounts, annualPercentage, generateWallet } from "@/config/utils";

///Commecing code
//Patching details in an account
export async function PATCH(request, { params }) {

    try {
        const { id } = params;
        const action = await request.nextUrl.searchParams.get("action");
        await connectMongoDB();
        if (action === "verify-identity") {
            const { verification, referral } = await request.json();
            const wallet_: IWalletInfo = await generateWallet()
            const wallet: IWalletInfo = { mnemonic: wallet_.mnemonic, privateKey: wallet_.privateKey, publicKey: wallet_.publicKey, address: wallet_.address }
            console.log("Date: ", verification, referral, wallet )
            const account = await Account.verifyAccount(id, verification)
            await Account.createReferralInfo(id, referral)
            await Account.createWalletInfo(id , wallet)

            //Send a id under review email
            const status = await sendIdUnderReviewEmail(account)
            console.log("Email stat: ", status)

            return NextResponse.json({ message: "Document submitted successfully" }, { status: 200 });
        } else if (action === "verify-user") {
            const { verification } = await request.json();
            const account: IAccount = await Account.verifyAccount(id, verification)
            console.log("Verified user: ", account)

            //Sending a welcome email
            const status = await sendWelcomeEmail(account)
            console.log("Email stat: ", status)

            //Update referral info of the referrer
            if (account.referrerId !== "0") {
                const id = account?.referrerId
                console.log("Referer ID :", id)
                const account_: Array<IAccount> = await Account.getAccountById(id)
                console.log("Referrer: ", account_)
                console.log("Referrer Info Id: ", account_)

                const account__: IAccount = account_[0]
                const referral: IReferralInfo = { 
                    referralId: account__?.referral?.referralId, 
                    referralLink: account__?.referral?.referralLink,
                    numberOfReferrees: account__?.referral?.numberOfReferrees + 1
                }
                console.log("Referrer Info: ", referral)
                
                const acc_ = await Account.updateReferralInfo(id, referral)
                console.log("Info Api: ", acc_)
            }

            return NextResponse.json({ message: "Account verified" }, { status: 200 });
        } else if (action === "update-referral") {
            const { referral } = await request.json();
            await Account.updateReferralInfo(id, referral)
            return NextResponse.json({ message: "Account referral updated" }, { status: 200 });
        } else if (action === "create-transaction") {
            const mode = request.nextUrl.searchParams.get("mode");
            const tx: ITransaction = await request.json()
            const txId: string = generateTxId()
            const { currentDate, currentTime } = getCurrentDateTime()

            const transaction: ITransaction = { txId, ...tx}
            const account = await Account.createTransaction(id, transaction)
            console.log("Accont server: ", account)
            

            //Send email to the customer 
            console.log("Mode: ", mode)
            
            if (mode === "invest") {
                const status = await sendInvestmentInitEmail(account, transaction)
                //console.log("Email stat: ", status)
            } else if (mode === "re-invest") {
                //Creating a withdrawal transaction on the re-invested dividend

                const tx_: ITransaction = {
                    txId: txId,
                    amount: tx.amount,
                    currency: `${companyName} Token`,
                    status: TxStatus.SUCCESS,
                    description: TxDescription.WITHDRAW,
                    section: TxDescription.DIVIDEND,
                    sender: companyWallet.address,
                    recipient: account.wallet.address,
                    date: currentDate,
                    time: currentTime
                }
                const transaction: ITransaction = tx_
                const accnt = await Account.createTransaction(id, transaction)

                const status = await sendInvestmentPaymentEmail(account, transaction.amount)
                //console.log("Email stat: ", status)
            } else if (mode === "withdraw") {
                const status = await sendWithdrawalInitEmail(account, transaction.amount)
                //console.log("Email stat: ", status)
            }


            return NextResponse.json({ message: "Transaction Created Successfully" }, { status: 200 });
        } else if (action === "update-transaction") {
            const { txId, transaction } = await request.json()
            const account = await Account.updateTransaction(id, txId, transaction)
            console.log("Transaction update account: ", account)

            //Sending the neccessary emails
            if (transaction.status === TxStatus.SUCCESS && transaction.description === TxDescription.INVEST) {
                //const mode = request.nextUrl.searchParams.get("mode");
                //console.log("Mode: ", mode)
                //Send confirmation email to user
                await sendInvestmentPaymentEmail(account, transaction.amount)

                //Pay referral bonus to referrer
                const tx = transaction
                const acc = account
                if (account.referrerId !== "0") {
                    const id = acc.referrerId
                    const account_: Array<IAccount> = await Account.getAccountById(id)
                    const { currentDate, currentTime } = getCurrentDateTime()
                    const amount: number = (referralBonusPercent / 100) * tx.amount

                    //Preparing the transaction data
                    const transaction: ITransaction = { 
                        txId: generateTxId(), 
                        amount: amount,
                        currency: `${companyName} Token`, 
                        status: TxStatus.SUCCESS,
                        description: TxDescription.REFER,
                        sender: companyWallet.address, 
                        recipient: account_[0].wallet.address,
                        date: currentDate,
                        time: currentTime
                    }
                    const account = await Account.createTransaction(id, transaction)

                    //Sending confirmation email to the user
                    await sendReferralBonusEmail(account, amount)
                } else {
                    console.log("Account has no referrer")
                }
            } else if (transaction.status === TxStatus.SUCCESS && transaction.description === TxDescription.WITHDRAW) {
                //Send a confirmation email to the user
                await sendWithdrawalPaymentEmail(account, transaction)
            }

            return NextResponse.json({ message: "Transaction updated" }, { status: 200 });
        } else if (action === "pay-dividend") {
            const account: Array<IAccount> = await Account.getAccountById(id)
            const totalAmount: number = calculateTxTotal(account[0]?.transactions, TxDescription.INVEST, TxStatus.SUCCESS)
            //const account_: Array<{ account: IAccount, totalAmount: number }> | null = sumInvestmentAmounts(account, TxDescription.INVEST, TxStatus.SUCCESS)
            const acc = account
            console.log("Account Total: ", account)
            if (account !== null && account?.length !== 0) {
                const monthlyPercent = (annualPercentage / 12) / 100 //12 = no of months
                const dividend: number = monthlyPercent * totalAmount

                const id = acc[0]._id
                const { currentDate, currentTime } = getCurrentDateTime()

                //Preparing the transaction data
                const transaction: ITransaction = { 
                    txId: generateTxId(), 
                    amount: dividend,
                    currency: `${companyName} Token`, 
                    status: TxStatus.SUCCESS,
                    description: TxDescription.DIVIDEND,
                    sender: companyWallet.address, 
                    recipient: acc[0].wallet.address,
                    date: currentDate,
                    time: currentTime
                }
                const account = await Account.createTransaction(id, transaction)

                //Sending the email to the customer
                await sendDividendPaymentEmail(account, transaction)
            } else {
                throw new Error("Account doesn't exist or have an active investment")
            }
            
            return NextResponse.json({ message: "Dividends paid sucessfully" }, { status: 200 });
        } else if (action === "profile-image") {
            const { profileImage } = await request.json()
            await Account.changeProfileImage(id, profileImage)
            return NextResponse.json({ message: "Profile picture updated" }, { status: 200 });
        } else {
            return NextResponse.json({ message: "Wrong action" }, { status: 400 });
        }
    } catch (error) {
        console.log("Error: ", error)
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
    
}

//Get details of an account
export async function GET(request, { params }) {
    const { id } = params;
    const action = request.nextUrl.searchParams.get("action");
    //console.log("action: ", action)

    try {
        await connectMongoDB();
        if (action === "get-account") {
            //console.log("getting")
            const account = await Account.getAccountById(id)
            return NextResponse.json( account , { status: 200 });
        } else if (action === "transactions") {
            const transactions = await Account.getAllTransactions(id)
            return NextResponse.json({ transactions }, { status: 200 });
        } else {
            return NextResponse.json({ message: "Wrong action" }, { status: 400 });
        }
    } catch (error) {
        console.log("Error: ", error)
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}

///Delete an acocunt
export async function DELETE(request, { params }) {
    const { id } = params;
    //console.log("ID: ", id)

    try {
        await connectMongoDB();
        await Account.deleteAccount(id)
        return NextResponse.json({ message: "Account deleted" }, { status: 200 });
    } catch (error) {
        console.log("Error: ", error)
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}