"use server";
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

type ResponseData = {
    message: string;
};

//prisma  
import PrismaClient, { Contact } from '@/libs/prisma/prisma';

//discord service
import DiscordService from '@/services/DiscordService';


export async function POST(req: NextRequest, res: NextResponse<ResponseData>) {

   const body = await req.json();

   const stringifiedBody = JSON.stringify(body);

   DiscordService.sendMessageToChannel(stringifiedBody);

   return NextResponse.json({ message: "An error occurred while sending the message." }, { status: 500 });

}

