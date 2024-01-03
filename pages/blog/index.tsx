import React, { createRef, useEffect, useState } from "react";

import Head from "next/head";

import Link from "next/link";

import axios from "axios";

import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const Blog = (props) => {
    
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`${publicRuntimeConfig.api}/posts`)

            .then((response) => {

                setPosts(response.data.posts);

            })

            .catch((err) => {

                console.log(err);

            })  
    }
    , [publicRuntimeConfig.API_URL])



    return (
        <>
            <Head>
                <title>blog | kuray.dev</title>
                <meta name="description" content="i am committed to producing high-quality, efficient, and maintainable code. i thrive in collaborative environments, effectively communicating complex technical concepts to cross-functional teams including designers, product managers, and QA engineers. my strong analytical skills empower me to quickly identify and troubleshoot issues, ensuring smooth project progression and timely delivery." />
                <meta name="keywords" content="software Development, freelancer, web development, mobile app development, full stack development, javascript, python, react, ui/ux design, backend development, frontend development, remote work, api integration, agile development, problem solving" />
                <meta name="author" content="kuray karaaslan" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <meta property="og:image" content="/assets/images/og-image.jpg" />
                <meta property="og:title" content="home | kuray.dev" />
                <meta property="og:description" content="i am committed to producing high-quality, efficient, and maintainable code. i thrive in collaborative environments, effectively communicating complex technical concepts to cross-functional teams including designers, product managers, and QA engineers. my strong analytical skills empower me to quickly identify and troubleshoot issues, ensuring smooth project progression and timely delivery." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://kuray.dev" />
                <meta property="og:site_name" content="kuray.dev" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@kuraykaraaslan" />
                <meta name="twitter:creator" content="@kuraykaraaslan" />
                <meta name="twitter:title" content="home | kuray.dev" />
                <meta name="twitter:description" content="i am committed to producing high-quality, efficient, and maintainable code. i thrive in collaborative environments, effectively communicating complex technical concepts to cross-functional teams including designers, product managers, and QA engineers. my strong analytical skills empower me to quickly identify and troubleshoot issues, ensuring smooth project progression and timely delivery." />
            </Head>

            <section className="mx-4 md:mx-8 ">
                <div className="container max-w-6xl pt-2 mx-auto space-y-6 sm:space-y-12">

                    {posts.length === 0 ? <div className="flex justify-center w-full h-96">
                    <span className="loading loading-bars loading-lg"></span>
                    </div> : null}

                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        
                        {posts.map((post, index) => (
                            <>
                                <Link rel="noopener noreferrer" className="max-w mx-auto group hover:border-white focus:no-underline bg-base-100 " href={`/blog/${post?.slug}`}>
                                    <img role="presentation" className="object-cover w-full rounded h-44  bg-base-200" src={post?.img ? post?.img : "/assets/images/og-image.jpg"} alt={post?.title} />
                                    <div className="p-6 space-y-2">
                                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{post?.title}</h3>
                                        <span className="text-xs dark:text-gray-400">{post?.createdAt}</span>
                                        <p>{post?.description.substring(0, 150)}...</p>
                                    </div>
                                </Link>
                            </>
                        ))}
                    </div>
                </div>
            </section>
        </>

    )

}




export default Blog;