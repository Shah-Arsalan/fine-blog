import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export const GET = async  (request) =>{

    const session = await auth();

    return NextResponse(session);
}