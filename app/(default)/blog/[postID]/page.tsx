'use client'
import React, { useState, useEffect } from 'react';
import DefaultArticle from '@/components/default/DefaultArticle';
import axiosInstance from '@/libs/http/axios';
import { Post } from '@/types/Post';

export default function BlogPost({ params } : { params: { postID: string } }) {

    const [post, setPost] = useState<Post>({
        title: "",
        content: "",
        slug: "",
        category: ""
    });

    useEffect(() => {
        axiosInstance.get("/api/blog/posts/" + params.postID)
            .then(response => {
                console.log(response.data);
                if (response.data) {
                setPost(response.data);
                const metadata = {
                    title: response.data.title,
                    description: response.data.content,
                    image: response.data.image,
                    url: response.data.slug,
                    type: 'article',
                    published: response.data.created_at,
                    modified: response.data.updated_at,
                    category: response.data.category,
                    tags: response.data.tags
                };
                } else {
                    console.error("No data returned from API");
                }
            })
            .catch(error => {
                console.error(error);
            });
    } , [params.postID]);

    return (
        <div className="max-w-6xl justify-center text-left mx-auto px-4 lg:px-8 prose mt-8 mb-8">
            <title>{post.title + " - kuray.dev"}</title>
            <meta name="description" content={post.content} />
            <meta property="og:title" content={post.title + " - kuray.dev"} />
            <meta property="og:description" content={post.content} />
            <meta property="og:image" content={post.image} />
            <div className="text-3xl font-bold text-left mt-4 mb-4">
                <div className="text-3xl font-bold text-left mt-4 mb-4">{post.title}</div>
                <div className="text-sm text-gray-500 flex items-center space-x-2">
                    <span>{post.created_at ? new Date(post.created_at).toLocaleDateString() : "No Date"}</span>
                </div>
            </div>

            <DefaultArticle {...post} />
        </div>
    );
}

