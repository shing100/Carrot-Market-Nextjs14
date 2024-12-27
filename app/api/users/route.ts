import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    // Add your middleware code here. This function will be executed before
    // add Header
    request.headers.set("Access-Control-Allow-Origin", "*");
    return request;
}

export async function GET(request: NextRequest) {
    console.log(request);
    return Response.json({
        ok: true,
    });
}

export async function POST(request: NextRequest) {
    const data = await request.json();
    console.log("log the user in!!!");
    return Response.json(data);
}