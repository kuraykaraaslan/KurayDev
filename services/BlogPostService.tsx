import { Post, PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();


export default class BlogPostService {
    async deletePost(id: any, user: User) {
        //check if user is authorized to delete post
        if (!user.role || (user.role !== 'USER' && user.role !== 'ADMIN')) {
            throw new Error("Unauthorized");
        }

        //get the post by id
        const existingPost = await prisma.post.findFirst({
            where: {
                id
            }

        }).then((post) => {
            return post;
        });

        if (!existingPost) {
            throw new Error("Post not found");
        }

        //check if user is the author of the post or an admin
        if (existingPost.authorId !== user.id || user.role !== 'ADMIN') {
            throw new Error("Unauthorized");
        }

        //delete the post
        return prisma.post.delete({
            where: {
                id
            }
        }).then((post) => {
            return post;
        });
    }

    async updatePost( post: Post, user: User) {

        //check if user is authorized to update post

        if (!user.role || (user.role !== 'USER' && user.role !== 'ADMIN')) {
            throw new Error("Unauthorized");
        }

        //get the post by slug
        const existingPost = await prisma.post.findFirst({
            where: {
                id: post.id
            }

        }).then((post) => {
            return post;
        });

        if (!existingPost) {
            throw new Error("Post not found");
        }

        //check if user is the author of the post or an admin
        if (existingPost.authorId !== user.id && user.role !== 'ADMIN') {
            throw new Error("Unauthorized");
        }

        //update the post

        //if user is an admin, update the post's every field
        if (user.role === 'ADMIN') {
            return prisma.post.update({
                where: {
                    id: post.id
                },
                data: {
                    ...post,
                    updatedAt: new Date()
                }
            }).then((post) => {
                return post;
            });
        }

        //if user is the author of the post, update only the title, content, and image, slug
        return prisma.post.update({
            where: {
                id: post.id
            },
            data: {
                title: post.title,
                content: post.content,
                image: post.image,
                slug: post.slug,
                categoryId: post.categoryId,
                status: post.status,
                updatedAt: new Date()
            }
        }).then((post) => {
            return post;
        });

    }

    async createPost(post: Post, user: User) {

        //check if user is authorized to create post

        if (!user.role || (user.role !== 'USER' && user.role !== 'ADMIN')) {
            throw new Error("Unauthorized");
        }

        //create the post
        return prisma.post.create({
            data: {
                ...post,
                authorId: user.id,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        }).then((post) => {
            return post;
        });

    }

    async createPostByAdmin(post: Post) {
            
            //create the post
            return prisma.post.create({
                data: {
                    ...post,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            }).then((post) => {
                return post;
            });
    
        }

    async getPosts({ page = 1, pageSize = 10 , search = '' }) {
        return prisma.$transaction([
            prisma.post.count({
                where: {
                    title: {
                        contains: search
                    }
                }
            }),
            prisma.post.findMany({
                where: {
                    title: {
                        contains: search
                    }
                }
            })
        ]).then(([total, posts]) => {
            return {
                total,
                page,
                pageSize,
                posts
            };
        }
        );
    }   

    async getPostBySlug(slug: string) {
        return prisma.post.findFirst({
            where: {
                slug
            }
        }).then((post) => {
            return post;
        });
    }

}

