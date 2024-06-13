import { Post } from '@/types/Post';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import BlogPostService from '@/services/BlogPostService';

import { auth } from '@/auth';

export async function POST(request: Request) {
    const res = await request.json()

    const session = await auth();

    if (!session) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    
    const blogPost: Post = {
        title: res.title,
        content: res.content,
        slug: res.slug,
        category: res.category
    }

    const blogPostService = new BlogPostService();

    await blogPostService.createPost(blogPost);

    return NextResponse.json(blogPost);
}

export async function GET(request: Request) {

    const url = request.url;
    var params : string[] = [];
    try {
    const afterQuestionMark = url.split("?")[1];
    
    params = afterQuestionMark.split("&");

    } catch (error) {
        console.error(error);
    }

    let page = 0;
    let limit = 10;

    for (const param of params) {
        const [key, value] = param.split("=");
        if (key === "page") {
            page = parseInt(value);
        } else if (key === "limit") {
            limit = parseInt(value);
        }
    }

    const blogPostService = new BlogPostService();


    //const posts = await blogPostService.getPosts();
    const posts = await blogPostService.getPostsPaginated(page, limit);

    const postsWithIndex = posts.map((post, index) => {
        return {
            ...post,
            index: page * limit + index
        }
    }
    );

    return NextResponse.json(postsWithIndex);   

}

