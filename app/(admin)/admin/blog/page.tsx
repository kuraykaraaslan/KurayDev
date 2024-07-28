import BreadCrumb from '@/components/admin/BreadCrumb';
import PostsTable from '@/components/admin/tables/PostsTable';
import React from 'react';

const Page: React.FC = () => {
    return (
        <>
            <BreadCrumb />
            <div className="flex justify-between items-center mt-2">
                <h1 className="text-2xl">Blog</h1>
                <button className="btn btn-primary">Create Post</button>
            </div>
            <PostsTable posts={[
                { id: 1, title: 'First Post', author: 'John Doe', date: '2021-01-01' },
                { id: 2, title: 'Second Post', author: 'Jane Doe', date: '2021-01-02' },
                { id: 3, title: 'Third Post', author: 'John Doe', date: '2021-01-03' },
            ]} />
        </>
    );
};

export default Page;