'use client';
import React , { useEffect, useState } from 'react';
import PostDetails from '@/components/admin/details/PostDetails';
import { useParams } from 'next/navigation';
import { Post } from '@prisma/client';

const Page: React.FC = () => {

    const {id} = useParams();

    const [post, setPost] = useState<Post>({
        id: "",
        title: '',
        slug: '',
        content: '',
        authorId: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        status: '',
        image: '',
        categoryId: ''
    });
    

    useEffect(() => {

        if (!id) {
            return;
        }

    } , [id] );




    return (
        <>
            <PostDetails post={post} />
        </>
    );
};

export default Page;