"use server";
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

type ResponseData = {
    message: string;
};

//Log service   
import LogService from '@/services/LogService';


export async function POST(req: NextRequest, res: NextResponse<ResponseData>) {

    try {

        const body = await req;

        await LogService.info("SMS request received: " + JSON.stringify(body));
        return NextResponse.json({ message: "an SMS has been sent" });

    }

    catch (error: any) {
        console.error(error);
        await LogService.error(error.message);
        return NextResponse.json({ message: "An error occurred while sending the SMS." }, { status: 500 });
    }
}

