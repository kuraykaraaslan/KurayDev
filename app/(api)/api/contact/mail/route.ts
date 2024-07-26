"use server";
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import LogService from '@/services/LogService';


type ResponseData = {
    message: string;
    mails: Array<{
        mail: string;
    }>;
};

export async function GET(req: NextRequest, res: NextResponse<ResponseData>) {

    const mails = [
        {
            "mail": "kuraykaraaslan@gmail.com"
        }
    ]


    const ip = req.headers.get('x-forwarded-for');
    if (ip !== "::1") {
        await LogService.info("Mails fetched successfully for ip: " + ip);
    }
    return NextResponse.json({ message: "mails fetched successfully", mails });
}
//


