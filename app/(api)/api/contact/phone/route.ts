"use server";
import { NextResponse , NextRequest} from 'next/server';
import LogService from '@/services/LogService';

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

export async function GET(req: NextRequest, res: NextResponse<ResponseData>) {

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

    const ip = req.headers.get('x-forwarded-for');
    if (ip !== "::1") {
        await LogService.info("Phones fetched successfully for ip: " + ip);
    }
    return NextResponse.json({ message: "phones fetched successfully", phones });
}
//


