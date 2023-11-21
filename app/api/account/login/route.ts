///This is the api route for accounts

///Libraries -->
import connectMongoDB from "@/config/mongodb";
import { Account } from "@/models/account";
import { NextResponse } from "next/server";
import { sendEmailVerificationEmail } from "@/config/email";
import { IAccount } from "@/config/interfaces";
//import { IInquiry } from "@/config/interfaces";

///Commencing the code
///Login in an account
export async function GET(request) {
    try {
        const action = await request.nextUrl.searchParams.get("action");
        const emailAddress = await request.nextUrl.searchParams.get("email");
        await connectMongoDB();

        if (action === "login") {
            const password = await request.nextUrl.searchParams.get("pass");
            console.log("Login res: ", emailAddress, password)

            const account = await Account.loginAccount(emailAddress, password);
            //console.log("Verri: ", Object.values(account.verification))

            //Checking if account is verified
            console.log("Account Vrr: ", account[0]?.verification?.status)
            if (account[0]?.verification && (account[0]?.verification?.status === undefined || account[0]?.verification?.status === false)) {
                throw new Error("Your account is still yet to be verified")
            }
            
            return NextResponse.json({ account, message: "Login attempt successful, redirecting you to your dashboard"}, { status: 200 });
        } else if (action === "verify-email") {
            const acc: Array<IAccount> = await Account.getAccountByEmail(emailAddress)

            if(acc && acc.length !== 0) {
                const account = acc[0]
                console.log("Account Server: ", account)

                if (account.verification.status) {
                    throw new Error("This account is already verified")
                } else {
                    const status = await sendEmailVerificationEmail(account)
                    console.log("Status: ", status)
                    return NextResponse.json({ message: "Verification link sent" }, { status: 200 });
                }
            }
        } else {
            return NextResponse.json({ message: "Wrong action" }, { status: 400 });
        }
        
    } catch (error) {
        console.log('Error login: ', error.message)
        return NextResponse.json({ message: error.message}, { status: 400 });
    }
}

///Login into account