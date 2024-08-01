import { PrismaClient, Category, Post, User } from '@prisma/client';
const prisma = new PrismaClient();

export default class UserService {

    static async updateUser(user: User, sessionUser: User) {

        //check if user is authorized to update user

        if (!sessionUser.role || (sessionUser.role !== 'USER' && sessionUser.role !== 'ADMIN')) {
            throw new Error("Unauthorized");
        }

        //get the user by id
        const existingUser = await prisma.user.findFirst({
            where: {
                id: user.id
            }

        }).then((user) => {
            return user;
        });

        if (!existingUser) {
            throw new Error("User not found");
        }

        //check if user is an admin
        if (sessionUser.role !== 'ADMIN') {
            throw new Error("Unauthorized");
        }

        //update the user
        return prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                ...user,
                updatedAt: new Date()
            }
        }).then((user) => {
            return user;
        });
    }

    static async createUser(user: User, sessionUser: User) {

        //check if user is authorized to create user

        if (!sessionUser.role || (sessionUser.role !== 'USER' && sessionUser.role !== 'ADMIN')) {
            throw new Error("Unauthorized");
        }

        //create the user
        return prisma.user.create({
            data: {
                ...user,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        }).then((user) => {
            return user;
        });
    }

    static async deleteUser(userId: string, sessionUser: User) {

        //check if user is authorized to delete user

        if (!sessionUser.role || (sessionUser.role !== 'USER' && sessionUser.role !== 'ADMIN')) {
            throw new Error("Unauthorized");
        }

        //get the user by id
        const existingUser = await prisma.user.findFirst({
            where: {
                id: userId
            }

        }).then((user) => {
            return user;
        });

        if (!existingUser) {
            throw new Error("User not found");
        }

        //delete the user
        return prisma.user.delete({
            where: {
                id: userId
            }
        }).then((user) => {
            return user;
        });

    }

    static async getUsers(sessionUser: User) {

        //get all users
        return prisma.user.findMany({
            select: {
                id: true,
                email: true,
                role: true,
                image: true,
                createdAt: true,
                updatedAt: true
            }
        }).then((users) => {
            return users;
        });
    }

    static async getUsersNoSensitiveData() {
            
            //get all users
            return prisma.user.findMany({
                select: {
                    id: true,
                    username: true,
                    about: true,
                    email: true,
                    image: true,
                    
                    role: true,
                    createdAt: true,
                    status: true,
                }
            }).then((users) => {
                return users;
            });
        }


    static async getUser(userId: string, sessionUser: User) {

        //check if user is authorized to get user

        if (!sessionUser) {
            throw new Error("Unauthorized: User not authorized");
        }

        //get the user by id
        const user = await prisma.user.findFirst({
            where: {
                id: userId
            },
            select: {
                id: true,
                username: true,
                about: true,
                name: true,
                email: true,
                role: true,
                image: true,
                createdAt: true,
                updatedAt: true,
                status: true
            }

        }).then((user) => {
            return user;
        });

        if (!user) {
            return null;
        }

        return user;
    }

    static async getUserNoSensitiveData(userId: string) {
        //get the user by id
        const user = await prisma.user.findFirst({
            where: {
                id: userId
            },
            select: {
                id: true,
                name: true,
                email: false,
                image: true,
                role: true,
                createdAt: false,
                status: false,
            }

        }).then((user) => {
            return user;
        });

        if (!user) {
            return null;
        }

        return user;
    }
}



    