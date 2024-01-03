import React , { useEffect , useState } from "react";
import Link from "next/link";

import Head from "next/head";

import axios from "axios";

import getConfig from 'next/config'

import { useRouter } from 'next/router'


const { publicRuntimeConfig } = getConfig()




const ProjectDetail = (props) => {


    const [project, setProject] = useState(null);

    //post slug from url
    const router = useRouter()

    const projectSlug = router.query.projectSlug

    useEffect(() => {

        console.log(projectSlug)

        if (!project && projectSlug) {

        axios.get(`${publicRuntimeConfig.api}/projects/${projectSlug}`)

            .then((response) => {

                console.log(response.data.post)

                setProject(response.data.project);

            })

            .catch((err) => {

                //if project not found give 404 error
                if (err.response.status === 404) {
                    router.push('/404')
                }
                
            })  

        }


    }
    , [projectSlug])


    return (
        <>
            <Head>
                <title>{project?.title} - kuray.dev</title>
                <meta name="description" content={project?.description} />
                <meta name="keywords" content={project?.keywords} />
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

            {project  && (
            <article className="mx-4 sm:mx-8">
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li>
                            <Link href="/projects">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="w-4 h-4 mr-2 stroke-current"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                                    ></path>
                                </svg>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <span>{project?.title}</span>
                        </li>
                    </ul>
                </div>
                <div className="w-full mx-auto space-y-4 text-center pt-4 hidden sm:block">
                    <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                        {project?.title}
                    </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-8 sm:gap-4 bg-base-100 rounded-lg mt-4 sm:mt-6">
                    <div className="flex flex-col col-span-1 sm:col-span-3">
                        <div className="pt-4 pb-8 px-4 sm:bg-base-300 sm:rounded-lg sm:mx-4 sm:my-4">
                            <div className="">
                                <img className="rounded-lg" src={project?.img ? project?.img : "/assets/images/og-image.jpg"} alt={project?.title} />
                            </div>
                            <div className="bg-base-300 rounded-lg p-2 mt-4 sm:bg-base-200">
                                <div className="sm:mt-5">
                                    <span className="text-sm font-semibold">title:</span>
                                    <span className="text-sm font-semibold text-base-content ml-2">{project?.title}</span>
                                </div>
                                {project?.category && (
                                <div className="mt-3">
                                    <span className="text-sm font-semibold">category:</span>
                                    <span className="text-sm font-semibold text-base-content ml-2">{project?.category}</span>
                                </div>
                                )}
                                {project?.createdAt && (
                                <div className="mt-3">
                                    <span className="text-sm font-semibold">created at:</span>
                                    <span className="text-sm font-semibold text-base-content ml-2">{project?.createdAt}</span>
                                </div>
                                )}
                                {project?.keywords && (
                                <div className="mt-3">
                                    <span className="text-sm font-semibold">keywords:</span>
                                    <span className="text-sm font-semibold text-base-content ml-2">{project?.keywords}</span>
                                </div>
                                )}
                                {project?.description && (
                                <div className="mt-3">
                                    <span className="text-sm font-semibold">description:</span>
                                    <span className="text-sm font-semibold text-base-content ml-2">{project?.description?.substring(0, 200)}</span>
                                </div>
                                )}
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col sm:col-span-5 pl-3 pr-3" >
                        <div className="pt-4 pb-8" dangerouslySetInnerHTML={{ __html: project?.content }}>
                            {/* Render project details */}
                        </div>
                    </div>
                </div>
                <div className="pt-12 px-4 sm:px-8">
                    <div className="flex flex-col space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row justify-center items-center mb-8">
                        <img
                            alt=""
                            className="self-center flex-shrink-0 w-24 h-24 border rounded-full sm:justify-self-start"
                            src="/assets/images/kuraykaraaslan.jpeg"
                        />
                        <div className="flex flex-col">
                            <h4 className="text-lg font-semibold">Kuray Karaaslan</h4>
                            <p className="">i'm passionate about creating innovative solutions to real-world problems. i'm currently working as a freelance software developer. i'm also a graduate student at the university of istanbul, studying information systems management. i'm looking for opportunities to work with a team of talented developers and designers to create innovative solutions to real-world problems.</p>
                        </div>
                    </div>
                </div>
            </article>
            ) ||
            <div className="flex justify-center w-full h-96">
                <span className="loading loading-bars loading-lg"></span>
            </div>
            }



        </>
    );
};

export default ProjectDetail;
