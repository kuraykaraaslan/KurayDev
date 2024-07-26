import { PrismaClient as Orginal , User, Contact, SMS, Error } from '@prisma/client';

const PrismaClient = new Orginal();

export type {
    User,
    Contact,
    SMS,
    Error
}

export default PrismaClient


