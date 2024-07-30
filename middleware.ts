import { NextRequest, NextResponse } from "next/server";

import axios from "axios";
import LogService from "./services/LogService";
import { auth } from "@/auth";

const DISCORD_DOORMAN_WEBHOOK_URL = process.env.DISCORD_DOORMAN_WEBHOOK_URL;

export async function middleware(request: NextRequest) {
  
    return NextResponse.next();



}
