"use server";
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';
import axios from 'axios';


type ResponseData = {
    message: string;
    mails: Array<{
        mail: string;
    }>;
};

export async function GET(req: NextApiRequest, res: NextApiResponse<ResponseData>) {

    const mails = [
        {
            "mail": "kuraykaraaslan@gmail.com"
        }
    ]




    return NextResponse.json({ message: "Mail", mails });
}
//


