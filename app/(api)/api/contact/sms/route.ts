"use server";
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

//Log service   
import LogService from '@/services/LogService';

//SMS service
import SMSService from '@/services/SMSService';
import twillio from 'twilio';
import { t } from 'i18next';


export async function POST(req: NextRequest, res: NextResponse) {

    try {

        return new NextResponse("<Response><Message>Hello</Message></Response>", { status: 200 });

    }

    catch (error: any) {
        LogService.error(error);
        return new NextResponse("Error", { status: 500 });
    }
}

