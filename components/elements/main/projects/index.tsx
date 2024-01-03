import React from 'react';

import Link from "next/link";


const ProjectIndex = (props) => {

    const projects = props.projects;

    const error = props.error;

    return (
        <>
            <section className="mx-4 md:mx-8 ">
                <div className="container max-w-6xl pt-3 pb-3 mx-auto space-y-6 sm:space-y-6">
                    <h2 className="text-2xl font-semibold mb-4">projects</h2>
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-10">
                        {projects.map((project, index) => (
                            <Link href={project.url} key={index}>
                                <div
                                    key={index}
                                    className="rounded shadow p-6 hover:shadow-xl transition-shadow duration-300 bg-base-100"
                                >
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="mb-4 w-full rounded"
                                    />
                                    <h3 className="text-lg font-semibold">{project.title}</h3>
                                    <p className="mb-2">{project.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectIndex;
