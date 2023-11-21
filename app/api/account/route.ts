///This is the api route for accounts

///Libraries -->
import connectMongoDB from "@/config/mongodb";
import { Account } from "@/models/account";
import { IAccount, IAccountModel } from "@/config/interfaces";
import { NextResponse } from "next/server";
import { sendEmailVerificationEmail } from "@/config/email";
// import { NextApiRequest } from 'next';
// import Error from "next/error";
//import { IInquiry } from "@/config/interfaces";

///Commencing the code
//console.log("Mongo Server route: ", process.env.NEXT_PUBLIC_MONGO_URI)
///Creating an account
export async function POST(request) {
    

    try {
        let account: IAccount
        account = await request.json();
        await connectMongoDB();
        
        account = await Account.registerAccount( account );
        console.log("Account server: ", account)
        console.log('Vferification: ', account?.verification)
        //console.log("testing: ", stat)

        //Send email verification email
        const status = await sendEmailVerificationEmail(account)
        console.log("Email: ", status)

        return NextResponse.json({ message: "Account Created successfully" }, { status: 200 });
    } catch (error) {
        console.log("Error: ", error.message)
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}

///Getting all accounts
export async function GET() {
    try {
        await connectMongoDB();
        const accounts = await Account.getAllAccounts();
        return NextResponse.json( accounts , { status: 200 });
    } catch (error) {
        console.log('GET: ', error)
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
    
}

///Login into account