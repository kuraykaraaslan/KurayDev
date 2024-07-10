import { PrismaClient, Category, Post, User } from '@prisma/client';
const prisma = new PrismaClient();

export default class BlogCategoryService {

    async updateCategory(category: Category, user: User) {

        //check if user is authorized to update category

        if (!user.role || (user.role !== 'USER' && user.role !== 'ADMIN')) {
            throw new Error("Unauthorized");
        }

        //get the category by slug
        const existingCategory = await prisma.category.findFirst({
            where: {
                id: category.id
            }

        }).then((category) => {
            return category;
        });

        if (!existingCategory) {
            throw new Error("Category not found");
        }

        //check if user is an admin
        if (user.role !== 'ADMIN') {
            throw new Error("Unauthorized");
        }

        //update the category
        return prisma.category.update({
            where: {
                id: category.id
            },
            data: {
                ...category,
                updatedAt: new Date()
            }
        }).then((category) => {
            return category;
        });
    }

    async createCategory(category: Category, user: User) {

        //check if user is authorized to create category

        if (!user.role || (user.role !== 'USER' && user.role !== 'ADMIN')) {
            throw new Error("Unauthorized");
        }

        //create the category
        return prisma.category.create({
            data: {
                ...category,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        }).then((category) => {
            return category;
        });
    }

    async deleteCategory(id: string, user: User) {

        //check if user is authorized to delete category

        if (!user.role || (user.role !== 'USER' && user.role !== 'ADMIN')) {
            throw new Error("Unauthorized");
        }

        //get the category by id
        const existingCategory = await prisma.category.findFirst({
            where: {
                id: id
            }

        }).then((category) => {
            return category;
        });

        if (!existingCategory) {
            throw new Error("Category not found");
        }

        //check if user is an admin
        if (user.role !== 'ADMIN') {
            throw new Error("Unauthorized");
        }

        //delete the category
        return prisma.category.delete({
            where: {
                id: id
            }
        }).then((category) => {
            return category;
        });
    }

    async getCategories({ page = 1, limit = 10 }) {
        return prisma.category.findMany({
            skip: (page - 1) * limit,
            take: limit
        }).then((categories) => {
            return categories;
        });
    }

    async getCategoryById(id: string) {
        return prisma.category.findFirst({
            where: {
                id
            }
        }).then((category) => {
            return category;
        });
    }
}
