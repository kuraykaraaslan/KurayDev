import { Category } from '@/types/Category';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import BlogCategoryService from '@/services/BlogCategoryService';

export async function POST(request: Request) {
    const res = await request.json()
    
    const blogCategory: Category = {
        name: res.name,
        description: res.description,
        slug: res.slug
    }

    const blogCategoryService = new BlogCategoryService();

    await blogCategoryService.createCategory(blogCategory);

    return NextResponse.json(blogCategory);
}
