import { NextResponse, NextRequest } from "next/server";
import UserService from "@/services/UserService";
import { User } from "@prisma/client";
import { auth } from "@/auth";


export async function GET(req: NextRequest, res: NextResponse) {

    try {    
        const session = await auth();
        
        // Get the ID from the URL
        const url = new URL(req.url);
        const id = url.pathname.slice(0, -1).split('/')[3];

        // Get the user
        if (session && session.user) {
            const self = session.user as User;

            const user = await UserService.getUser(id, self);
        
            return NextResponse.json(user);
        }

        const user = await UserService.getUserNoSensitiveData(id);

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ message: user });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "An error occurred" }, { status: 500 });
    }
}
