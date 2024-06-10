import { Post } from '@/types/Post';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import BlogPostService from '@/services/BlogPostService';


export async function POST(request: Request) {
    const res = await request.json()
    
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
    const page = 0;
    const limit = 10;

    const blogPostService = new BlogPostService();


    const posts = await blogPostService.getPosts();

    return NextResponse.json(posts);

}

