import { PrismaClient } from '@prisma/client';

export default class LogService {

    private static prisma = new PrismaClient();


    static async error(message: string) {
        try {
            await this.prisma.log.create({
                data: {
                    type: "error",
                    message: message
                }
            });

        } catch (error) {
            console.error(error);
        }
    }

    static async info(message: string) {
        try {
            await this.prisma.log.create({
                data: {
                    type: "info",
                    message: message
                }
            });


        } catch (error) {
            console.error(error);
        }
    }

    static async warning(message: string) {
        try {
            await this.prisma.log.create({
                data: {
                    type: "warning",
                    message: message
                }
            });

        } catch (error) {
            console.error(error);
        }
    }
}
