///This is the api route for home

///Libraries -->
import { NextResponse } from "next/server";
import { companyName } from "@/config/utils";

///Commencing the code
///Getting a welcome message
export async function GET() {
    return NextResponse.json({ message: `Welcome to ${companyName} backend` }, { status: 200 });
}