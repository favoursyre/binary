///This is the api route for editng account password

///Libraries -->
import connectMongoDB from "@/config/mongodb";
import { Account } from "@/models/account";
import { NextResponse } from "next/server";
import { sendResetPasswordEmail, sendSuccessResetPasswordEmail } from "@/config/email";
import { domainName } from "@/config/utils";

///Commecing code
//Patching password details in an account
export async function PATCH(request) {
    try {
        //console.log("Request: ", request.state)
        const action = await request.nextUrl.searchParams.get("action");
        await connectMongoDB();

        if (action === "change") {
            const { emailAddress, currentPassword, newPassword } = await request.json();
            const account = await Account.changePassword(emailAddress, currentPassword, newPassword)

            //send confirmation email
            const status = await sendSuccessResetPasswordEmail(account)
            console.log('status: ', status)

            return NextResponse.json({ message: "Password reset successful" }, { status: 200 });
        } else if (action === "reset") {
            //let account
            const { emailAddress, password } = await request.json();
            const account = await Account.resetPassword(emailAddress, password)

            //console.log("Account server: ", account)
            //send confirmation email
            const status = await sendSuccessResetPasswordEmail(account)
            console.log('status: ', status)

            return NextResponse.json({ message: "Password reset successful" }, { status: 200 });
        } else if (action === "reset-link") {
            const emailAddress = await request.json();
            console.log("Server: ", emailAddress)
            const acc = await Account.getAccountByEmail(emailAddress)

            if(acc) {
                const account = acc[0]
                console.log("Account Server: ", account)
                const status = await sendResetPasswordEmail(account)
                console.log("Status: ", status)
            }
            return NextResponse.json({ message: "Reset link sent" }, { status: 200 });
        } else {
            return NextResponse.json({ message: "Wrong action" }, { status: 400 });
        }
    } catch (error) {
        console.log('GET: ', error)
        return NextResponse.json({ message: error.message}, { status: 400 });
    }
    
}