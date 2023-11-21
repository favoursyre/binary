///This is the api route for home

///Libraries -->
import { NextResponse } from "next/server";

///Commencing the code
///Getting a welcome message
export async function GET() {
    return NextResponse.json({ message: "Welcome to Bytemutual backend" }, { status: 200 });
}