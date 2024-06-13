'use client'
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DefaultArticle from '@/components/default/DefaultArticle';
import axiosInstance from '@/libs/http/axios';

export default function BlogPost({ params } : { params: { postID: string } }) {

    const [post, setPost] = useState({});

    useEffect(() => {
        axiosInstance.get("/api/blog/post/" + params.postID)
            .then(response => {
                console.log(response.data);
                setPost(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    } , [params.postID]);

    return (
        <div className="max-w-6xl justify-center text-left mx-auto px-4 lg:px-8 prose mt-8 mb-8">
            <DefaultArticle {...post} />
        </div>
    );
}

