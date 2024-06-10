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



    const post = await blogPostService.getPost(slug);

    return NextResponse.json(post);

}   