"use server";
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';
import axios from 'axios';


type ResponseData = {
    message: string;
    phones: Array<{
        CountryCode: string;
        PhoneNumber: string;
    }>;
};

export async function GET(req: NextApiRequest, res: NextApiResponse<ResponseData>) {

    const phones = [
        {
            "CountryCode": "tr",
            "PhoneNumber": "+905459223554"
        },
        {
            "CountryCode": "us",
            "PhoneNumber": "+905323209515"
        },
        {
            "CountryCode": "gb",
            "PhoneNumber": "+447455479481"
        }
    ]



    return NextResponse.json({ message: "Phone numbers", phones });
}
//


