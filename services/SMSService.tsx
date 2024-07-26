import PrismaClient , { SMS } from '@/libs/prisma/prisma';


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
   
}
