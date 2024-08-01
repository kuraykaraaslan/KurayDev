"use server";

import { NextResponse, NextRequest } from "next/server";
import BlogPostService from '@/services/BlogPostService';
import { Post } from '@prisma/client';


const blogPostService = new BlogPostService();
import { auth } from '@/auth';
import { User } from '@prisma/client';

type ResponseData = {
    message: any  
}

export async function POST(req: NextRequest, res: NextResponse<ResponseData>) {

    const session = await auth();

    if (!session?.user) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const user = session.user as User;
    
    if (!user.role || user.role !== 'ADMIN') {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }



    try {
        const { id, title, content, slug, categoryId, image , authorId, status , createdAt , updatedAt } = await req.json();

        if (!title || !content || !slug || !categoryId || !image) {
            return NextResponse.json({ message: "Please fill in the required fields." }, { status: 400 });
        }

        const res = await blogPostService.createPost({
            id,
            title,
            slug,
            content,
            categoryId,
            image,
            authorId: authorId || user.id,
            createdAt: createdAt || new Date(),
            updatedAt: updatedAt || new Date(),
            status: status || 'PUBLISHED'
        }, user);

        return NextResponse.json(res);
    }

    catch (error) {
        console.error(error);
        return NextResponse.json({ message: "An error occurred" }, { status: 500 });
    }
}


export async function GET(request: NextRequest, response: NextResponse<ResponseData>) {
    try {


        const { searchParams } = new URL(request.url);

        var page = searchParams.get('page') || 1;
        var pageSize = searchParams.get('pageSize') || 10;
        var search = searchParams.get('search') || '';

        console.log("page: ", page , "pageSize: ", pageSize , "search: ", search);

        //regex to check if search contains only letters , turkish characters and numbers
        var regex = /^[a-zA-Z0-9ğüşöçİĞÜŞÖÇ\s]*$/;

        if (!regex.test(search)) {
            return NextResponse.json({ message: "Invalid search query" }, { status: 400 });
        }

        if (!page) {
            page = 1;
        }

        if (!pageSize) {
            pageSize = 10;
        }


        const posts = await blogPostService.getPosts({ page: Number(page), pageSize: Number(pageSize), search: search });

        return NextResponse.json(posts);
    } catch (error : any) {
        console.error(error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}



export async function PUT(request: NextRequest, response: NextResponse<ResponseData>) {

    const session = await auth();

    if (!session?.user) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }


    try {
        const { id, title, content, slug, categoryId, image, authorId , status } = await request.json();

        if (!title || !content || !slug || !categoryId || !image || !authorId) {
            return NextResponse.json({ message: "Please fill in the required fields." }, { status: 400 });
        }

        const updatedPost = {
            id,
            title,
            slug,
            content,
            categoryId,
            image,
            authorId,
            status,
            createdAt: new Date(),
            updatedAt: new Date() // Add the updatedAt property
        };

        await blogPostService.updatePost(updatedPost, session.user as User);

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "An error occurred" }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest, response: NextResponse<ResponseData>) {

    const session = await auth();

    if (!session?.user) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { id } = await request.json();

    try {
        await blogPostService.deletePost(id, session.user as User);

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "An error occurred" }, { status: 500 });
    }
}
