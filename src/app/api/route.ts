import { NextResponse } from "next/server";

const api = {
    "firstName" : "erhan",
    "lastName" : "gocen"
}

export async function GET() {
    return NextResponse.json(api);
}