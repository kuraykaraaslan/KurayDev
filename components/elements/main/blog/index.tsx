import React, { createRef, useEffect, Component } from "react";

import BlogCard from "./card";


import Link from "next/link";

import axios from "axios";

export const getServerSideProps = (props) => {
    const NEXT_POSTS_URL = process.env.NEXT_POSTS_URL;

    return {
        props: {
            NEXT_POSTS_URL
        }
    }
}


const BlogIndex = (props) => {

    const postsUrl = props?.NEXT_POSTS_URL;

    const [posts, setPosts] = React.useState(props.posts);


    useEffect(() => {
    }
        , [props.posts]);
    
    return (

            <>
                <section className="mx-4 md:mx-8 ">
                    <div className="container max-w-6xl pt-2 mx-auto space-y-6 sm:space-y-12">
                       
                        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {/* Second post */}
                            {posts.map((post, index) => (
                                <>
                                s
                                <BlogCard key={index} post={post} />
                                </>
                            ))}
                        </div>
                        <div className="flex justify-center">

                        </div>
                    </div>
                </section>
            </>
    );


    }


export default BlogIndex;