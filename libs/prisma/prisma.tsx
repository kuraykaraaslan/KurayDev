import { PrismaClient as Orginal , User, Contact, SMS, Post, Category } from '@prisma/client';

const PrismaClient = new Orginal();

export type {
    User,
    Contact,
    SMS,
    Post,
    Category
}

export default PrismaClient


