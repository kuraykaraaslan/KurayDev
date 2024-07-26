"use server";
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';
import axios from 'axios';


type ResponseData = {
    message: string;
    phones: Array<{
        CountryCode: string;
        PhoneNumber: string;
        noSpacePhoneNumber: string;
        hasTelegram: boolean;
        hasWhatsapp: boolean;
    }>;
};

export async function GET(req: NextApiRequest, res: NextApiResponse<ResponseData>) {

    const phones = [
        {
            "CountryCode": "tr",
            "PhoneNumber": "+90 545 922 35 54",
            "noSpacePhoneNumber": "+905459223554",
            "hasWhatsapp": false,
            "hasTelegram": false
        },
        {
            "CountryCode": "us",
            "PhoneNumber": "+1 585 632 9515",
            "noSpacePhoneNumber": "+15856329515",
            "hasWhatsapp": false,
            "hasTelegram": false
        },
        {
            "CountryCode": "gb",
            "PhoneNumber": "+44 7455 470481",
            "noSpacePhoneNumber": "+447455470481",
            "hasWhatsapp": false,
            "hasTelegram": false
        }
    ]



    return NextResponse.json({ message: "Phone numbers", phones });
}
//


