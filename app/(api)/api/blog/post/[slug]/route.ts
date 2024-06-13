import { Post } from '@/types/Post';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import BlogPostService from '@/services/BlogPostService';

const getSlugFromUrl = (url: string): string => {
    const urlParts = url.split('/').filter(Boolean); // Split the URL by '/' and remove empty parts
    const slug = urlParts[urlParts.length - 1]; // Get the last part of the URL as the slug
    return slug;
}


export async function GET(request: NextApiRequest, response: NextApiResponse) {

    const blogPostService = new BlogPostService();

    console.log(request.url);

    const slug = getSlugFromUrl(request.url as string);


    return NextResponse.json(await blogPostService.getPost(slug));

}   

export async function PUT(request: Request) {
    const res = await request.json()
    
    const blogPost: Post = {
        title: res.title,
        content: res.content,
        slug: res.slug,
        category: res.category
    }

    const blogPostService = new BlogPostService();

    await blogPostService.updatePost(res.slug, blogPost);

    return NextResponse.json(blogPost);
}

export async function DELETE(request: Request) {
    const res = await request.json()
    
    const blogPostService = new BlogPostService();

    await blogPostService.deletePost(res.slug);

    return NextResponse.json({message: 'Post deleted'});
}
