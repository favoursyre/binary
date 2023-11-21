///This is the api route for dividend

///Libraries -->
import { IDividend, IDividendStatus } from "@/config/interfaces";
import connectMongoDB from "@/config/mongodb";
import { Dividend } from "@/models/dividend";
import { NextResponse } from "next/server";

///Commencing the code
///Creating an inquiry
export async function POST(request) {
    try {
        const dividend: IDividendStatus = await request.json();
        await connectMongoDB();
        const divi = await Dividend.createDividend( dividend );
        return NextResponse.json({ dividend: divi, message: "Dividend Created" }, { status: 200 });
    } catch (error) {
        console.log("Error: ", error)
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}

///Getting all inquiries
export async function GET(request) {
    //console.log("I'm here: ", params)
    try {
        const action = await request.nextUrl.searchParams.get("action");
        await connectMongoDB();

        if (action === "all") {
            const dividends = await Dividend.getAllDividends();
            return NextResponse.json({ dividends }, { status: 200 });
        } else if (action === "date") {
            const date = request.nextUrl.searchParams.get("payment-date");
            console.log("Server Date: ", date)
            const dividend = await Dividend.getDividendByDate(date);
            return NextResponse.json({ dividend }, { status: 200 });
        } else {
            return NextResponse.json({ message: "Wrong action" }, { status: 400 });
        }
    } catch (error) {
        console.log("Error: ", error)
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}