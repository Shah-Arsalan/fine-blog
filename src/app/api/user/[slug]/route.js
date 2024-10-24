import { Post, User } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request , {params}) => {

    const {slug} = params;

    try {

        connectToDb();
        const user = await User.findOne({slug});
        return NextResponse.json(user);
        
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch Single User")
    }

}


