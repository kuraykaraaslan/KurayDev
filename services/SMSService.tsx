import PrismaClient, { SMS } from '@/libs/prisma/prisma';

import twillio from 'twilio';


/*
model SMS {
  id        String   @id @default(cuid())
  to        String
  from      String
  message   String
  status    String  @default("pending") // pending, sent, failed
  createdAt DateTime @default(now())
}
*/

interface SMSData {
  to: string;
  from: string;
  message: string;
}

export default class SMSService {

  public static async incomingSMS(data: any): Promise<SMS> {
    const twiml = new twillio.twiml.MessagingResponse();
    twiml.message('The Robots are coming! Head for the hills!');
    return twiml.toString();
  }
}
