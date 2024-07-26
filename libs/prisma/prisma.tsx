import { PrismaClient as Orginal , User, Contact } from '@prisma/client';

const PrismaClient = new Orginal();

export type {
    User,
    Contact
}

export default {
    PrismaClient
}

