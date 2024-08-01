import { NextResponse, NextRequest } from "next/server";
import UserService from "@/services/UserService";
import { User } from "@prisma/client";

import { auth } from "@/auth";
import { unzip } from "zlib";

export async function GET(req: NextRequest, res: NextResponse) {

    try {    
        const session = await auth()

        console.log("Session:");
        console.log(session);

       
        const users = await UserService.getUsersNoSensitiveData();
        
        return NextResponse.json(users);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "An error occurred" }, { status: 500 });
    }
}