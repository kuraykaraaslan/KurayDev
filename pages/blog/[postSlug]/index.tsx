import React , { useEffect , useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Link from "next/link";

import Head from "next/head";

import axios from "axios";

import getConfig from 'next/config'

import { useRouter } from 'next/router'


const { publicRuntimeConfig } = getConfig()


function BlogPost(props) {

    const [post, setPost] = useState(null);

    //post slug from url
    const router = useRouter()

    const postSlug = router.query.postSlug


    useEffect(() => {

        if (!post && postSlug) {

        axios.get(`${publicRuntimeConfig.api}/posts/${postSlug}`)

            .then((response) => {

                console.log(response.data.post)

                setPost(response.data.post);

            })

            .catch((err) => {

                //if post not found give 404 error
                if (err.response.status === 404) {
                    router.push('/404')
                }
                

            })  

        }


    }
    , [postSlug])




    return (
        <>
            <Head>
                <title>{post?.title} - kuray.dev</title>
                <meta name="description" content={post?.description} />
                <meta name="keywords" content={post?.keywords} />
                <meta name="author" content="kuray karaaslan" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
            </Head>

            {post  && (
            <article className="mx-4 md:mx-8 bg-base-100 rounded-box px-4 py-2 mb-4">
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li>
                            <Link href="/blog">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            {post?.title}
                        </li>
                    </ul>
                </div>
                <div className="w-full mx-auto space-y-4 text-center pt-4">
                    <h1 className="text-4xl font-bold leadi md:text-5xl">{post?.title}</h1>
                    <p className="text-sm">
                        <span>Kuray Karaaslan</span>
                        <span className="mx-2">•</span>
                        <span>{post?.createdAt}</span>
                    </p>
                </div>
                <div className="pt-4 pb-8" dangerouslySetInnerHTML={{ __html: post?.content }}>


                </div>
                <div className="pt-12 border-t">
                    <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row justify-center items-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start" src="/assets/images/kuraykaraaslan.jpeg" />
                        <div className="flex flex-col">
                            <h4 className="text-lg font-semibold">Kuray Karaaslan</h4>
                            <p className="">I am committed to producing high-quality, efficient, and maintainable code. I thrive in collaborative environments, effectively communicating complex technical concepts to cross-functional teams including designers, product managers, and QA engineers. My strong analytical skills empower me to quickly identify and troubleshoot issues, ensuring smooth project progression and timely delivery.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center pt-4 space-x-4 align-center pb-4">
                        <a className="" href="https://twitter.com/kuraykaraaslan" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} style={{ width: "1em" }} />
                        </a>
                        <a className="" href="https://github.com/kuraykaraaslan" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} style={{ width: "1em" }} />
                        </a>
                        <a className="" href="https://www.linkedin.com/in/kuraykaraaslan/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} style={{ width: "1em" }} />
                        </a>
                    </div>
                </div>

            </article>
            ) || (
                <div className="flex justify-center w-full h-96">
                    <span className="loading loading-bars loading-lg"></span>
                </div>
            )}


        </>
    );

}



export default BlogPost;