import { PrismaClient as Orginal , User, Contact, SMS } from '@prisma/client';

const PrismaClient = new Orginal();

export type {
    User,
    Contact,
    SMS
}

export default {
    PrismaClient
}

