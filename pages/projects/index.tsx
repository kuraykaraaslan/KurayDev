import React, { useEffect, useState } from "react";

import Link from 'next/link';
import Head from "next/head";

import axios from "axios";

import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()


const ProjectShowcase = (props) => {

    const [projects, setProjects] = useState(null);


    useEffect(() => {

        axios.get(`${publicRuntimeConfig.api}/projects`)

            .then((response) => {

                setProjects(response.data.projects);

            })

            .catch((err) => {

                console.log(err);

            })  

    }
    , [publicRuntimeConfig.API_URL])

    

    return (
        <>
            <Head>
                <title>projects | kuray.dev</title>
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

            {projects && (
            <section className="mx-4 md:mx-8 ">
                <div className="container max-w-6xl pt-3 pb-3 mx-auto space-y-6 sm:space-y-6">
                    <h2 className="text-2xl font-semibold mb-4">projects</h2>
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-10">
                        {projects.map((project, index) => (
                            <Link href={`/projects/${project.slug}`} key={index}>
                                <div className="flex flex-col rounded shadow p-6 hover:shadow-xl transition-shadow duration-300 bg-base-100 h-full">
                                    <h3 className="text-lg font-semibold">{project.title}</h3>
                                    <p className="mb-2 mt-2">{project.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            ) || (
                <div className="flex justify-center w-full h-96">
                <span className="loading loading-bars loading-lg"></span>
                </div>
            )}

            </>
    );
};

export default ProjectShowcase;
