'use client';
import { createRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faBootstrap, faHtml5, faPython, faPhp, faJava, faJs, faLinux, faFigma, faCss3, faAws, faGit } from "@fortawesome/free-brands-svg-icons"
import { faAnchor, faBook, faCloud, faCloudDownloadAlt, faCode, faCodeBranch, faDatabase, faFire, faG, faGear, faGlobe, faLightbulb, faMobileScreenButton, faUsers, faV, faWind } from "@fortawesome/free-solid-svg-icons"
import React, { useEffect } from 'react'

const Toolbox = () => {

    return (
        <>
            <section className="dark:bg-base-100 py-8 px-4 md:px-20 px-4">

                <div className="grid grid-cols-2 md:grid-cols-6 gap-4 ">
                    <div className="col-span-2 md:col-span-1 md:col-start-3 overflow-hidden">
                        <h1 className="text-4xl lg:text-3xl font-bold mt-6 text-center md:text-right">creativity needs a lot of tools</h1>
                    </div>
                    <div className="col-span-1 md:col-start-4 invisible md:visible hidden md:block">
                        <p className="mt-6 pr-4">I have a lot of tools in my toolbox, and I'm always learning new ones.</p>
                    </div>
                </div>




                <div className="grid grid-row-auto justify-items-center grid-row-1 md:grid-row-2 md:space-y-8 py-8 md:py-16">
                    <div className="flex flex-col lg:flex-row-reverse md:mx-12 mx-auto">
                        <div className="flex-1 pl-4 select-none hidden lg:block">
                            <h1 className="text-3xl font-bold  relative overflow-hidden animate-shake pb-4">front-end.</h1>
                        </div>
                        <div className="group flex-none grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                            {/* Javascript */}
                            <div className='w-40 h-40 group'>
                                <div className="card w-40 h-40 bg-base-300 relative select-none transition duration-500 transform group-hover:text-black group-hover:rotate-y-180 group-hover:bg-yellow-500 px-2 py-2 shadow-lg">
                                    <div className='flex flex-col items-center justify-center group-hover:hidden'>
                                        <figure className="px-10 pt-5 -mb-3">
                                            <FontAwesomeIcon icon={faJs} className="text-8xl" />
                                        </figure>
                                    </div>
                                    <div className='flex flex-col items-center justify-center hidden text-black group-hover:flex rotate-y-180'>
                                        <figure className="px-10 pt-5 -mb-4">
                                            <FontAwesomeIcon icon={faJs} className="text-4xl transition duration-500 hover:animate-spin" />
                                        </figure>
                                        <div className="w-40 card-body items-center text-center duration-1000 ease-in-out">
                                            <h2 className="card-title">javascript</h2>
                                            <span className="text-xs text-black -mt-1">react & native</span>
                                            <span className="text-xs text-black -mt-2">redux, next.js</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Figma */}
                            <div className='w-40 h-40 group'>
                                <div className="card w-40 h-40 bg-base-300 relative select-none transition duration-500 transform group-hover:text-white group-hover:rotate-y-180 group-hover:bg-blue-500 px-2 py-2 shadow-lg">
                                    <div className='flex flex-col items-center justify-center group-hover:hidden'>
                                        <figure className="px-10 pt-5 -mb-3">
                                            <FontAwesomeIcon icon={faFigma} className="text-8xl" />
                                        </figure>
                                    </div>
                                    <div className='flex flex-col items-center justify-center hidden text-black group-hover:flex rotate-y-180'>
                                        <figure className="px-10 pt-5 -mb-4">
                                            <FontAwesomeIcon icon={faFigma} className="text-4xl transition duration-500 hover:animate-spin" />
                                        </figure>
                                        <div className="card-body items-center text-center duration-1000 ease-in-out">
                                            <h2 className="card-title">figma</h2>
                                            <span className="text-xs text-black">design</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* CSS */}
                            <div className='w-40 h-40 group'>
                                <div className="card w-40 h-40 bg-base-300 relative select-none transition duration-500 transform group-hover:text-white group-hover:rotate-y-180 group-hover:bg-blue-500 px-2 py-2 shadow-lg">
                                    <div className='flex flex-col items-center justify-center group-hover:hidden'>
                                        <figure className="px-10 pt-5 -mb-3">
                                            <FontAwesomeIcon icon={faCss3} className="text-8xl" />
                                        </figure>
                                    </div>
                                    <div className='flex flex-col items-center justify-center hidden text-black group-hover:flex rotate-y-180'>
                                        <figure className="px-10 pt-5 -mb-4">
                                            <FontAwesomeIcon icon={faCss3} className="text-4xl transition duration-500 hover:animate-spin" />
                                        </figure>
                                        <div className="card-body items-center text-center duration-1000 ease-in-out">
                                            <h2 className="card-title">css</h2>
                                            <span className="text-xs text-black -mt-1">tailwind</span>
                                            <span className="text-xs text-black -mt-2">bootstrap</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* HTML */}
                            <div className='w-40 h-40 group'>
                                <div className="card w-40 h-40 bg-base-300 relative select-none transition duration-500 transform group-hover:text-white group-hover:rotate-y-180 group-hover:bg-orange-500 px-2 py-2 shadow-lg">
                                    <div className='flex flex-col items-center justify-center group-hover:hidden'>
                                        <figure className="px-10 pt-5 -mb-3">
                                            <FontAwesomeIcon icon={faHtml5} className="text-8xl" />
                                        </figure>
                                    </div>
                                    <div className='flex flex-col items-center justify-center hidden text-black group-hover:flex rotate-y-180'>
                                        <figure className="px-10 pt-5 -mb-4">
                                            <FontAwesomeIcon icon={faHtml5} className="text-4xl transition duration-500 hover:animate-spin" />
                                        </figure>
                                        <div className="card-body items-center text-center duration-1000 ease-in-out">
                                            <h2 className="card-title">html</h2>
                                            <span className="text-xs text-black">semantic</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group flex flex-col lg:flex-row md:mx-12 mx-auto pt-4">
                        <div className="flex-0 lg:pl-0 select-none hidden lg:block pr-4">
                            <h1 className="text-3xl font-bold  relative overflow-hidden animate-shake pb-4">back-end.</h1>
                        </div>
                        <div className="flex-none grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">

                            {/* Java */}
                            <div className='w-40 h-40 group'>
                                <div className="card w-40 h-40 bg-base-300 relative select-none transition duration-500 transform group-hover:text-black group-hover:rotate-y-180 group-hover:bg-red-500 px-2 py-2 shadow-lg">
                                    <div className='flex flex-col items-center justify-center group-hover:hidden'>
                                        <figure className="px-10 pt-5 -mb-3">
                                            <FontAwesomeIcon icon={faJava} className="text-8xl" />
                                        </figure>
                                    </div>
                                    <div className='flex flex-col items-center justify-center hidden text-black group-hover:flex rotate-y-180'>
                                        <figure className="px-10 pt-5 -mb-4">
                                            <FontAwesomeIcon icon={faJava} className="text-4xl transition duration-500 hover:animate-spin" />
                                        </figure>
                                        <div className="card-body items-center text-center duration-1000 ease-in-out">
                                            <h2 className="card-title">java</h2>
                                            <span className="text-xs text-black">spring, swing</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* python */}
                            <div className='w-40 h-40 group'>
                                <div className="card w-40 h-40 bg-base-300 relative select-none transition duration-500 transform group-hover:text-blue-500 group-hover:rotate-y-180 group-hover:bg-yellow-400 px-2 py-2 shadow-lg">
                                    <div className='flex flex-col items-center justify-center group-hover:hidden'>
                                        <figure className="px-10 pt-5 -mb-3">
                                            <FontAwesomeIcon icon={faPython} className="text-8xl" />
                                        </figure>
                                    </div>
                                    <div className='flex flex-col items-center justify-center hidden text-black group-hover:flex rotate-y-180'>
                                        <figure className="px-10 pt-5 -mb-4">
                                            <FontAwesomeIcon icon={faPython} className="text-4xl transition duration-500 hover:animate-spin" />
                                        </figure>
                                        <div className="card-body items-center text-center duration-1000 ease-in-out">
                                            <h2 className="card-title">python</h2>
                                            <span className="text-xs text-black">django</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* php */}
                            <div className='w-40 h-40 group'>
                                <div className="card w-40 h-40 bg-base-300 relative select-none transition duration-500 transform group-hover:text-black group-hover:rotate-y-180 group-hover:bg-purple-400 px-2 py-2 shadow-lg">
                                    <div className='flex flex-col items-center justify-center group-hover:hidden'>
                                        <figure className="px-10 pt-5 -mb-3">
                                            <FontAwesomeIcon icon={faPhp} className="text-8xl" />
                                        </figure>
                                    </div>
                                    <div className='flex flex-col items-center justify-center hidden text-black group-hover:flex rotate-y-180'>
                                        <figure className="px-10 pt-5 -mb-4">
                                            <FontAwesomeIcon icon={faPhp} className="text-4xl transition duration-500 hover:animate-spin" />
                                        </figure>
                                        <div className="card-body items-center text-center duration-1000 ease-in-out">
                                            <h2 className="card-title">php</h2>
                                            <span className="text-xs text-black">laravel</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Bash */}
                            <div className='w-40 h-40 group'>
                                <div className="card w-40 h-40 bg-base-300 relative select-none transition duration-500 transform group-hover:rotate-y-180 group-hover:bg-green-400 px-2 py-2 shadow-lg">
                                    <div className='flex flex-col items-center justify-center group-hover:hidden'>
                                        <figure className="px-10 pt-5 -mb-3">
                                            <FontAwesomeIcon icon={faLinux} className="text-8xl" />
                                        </figure>
                                    </div>
                                    <div className='flex flex-col items-center justify-center hidden text-black group-hover:flex rotate-y-180 duration-100'>
                                        <figure className="px-10 pt-5 -mb-4">
                                            <FontAwesomeIcon icon={faLinux} className="text-4xl transition  duration-100 hover:animate-spin" />
                                        </figure>
                                        <div className="card-body items-center text-center ease-in-out">
                                            <h2 className="card-title">linux</h2>
                                            <span className="text-xs text-black">server, bash</span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                    <div className="w-50 h-50 group border-gray-500 border-t w-40 mt-8"></div>



                    <div className="group flex-none grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-8 mt-4" >
                        {/*Small SKills*/}
                        {/* SQL */}
                        <div className='w-28 h-20 group'>
                            <div className="card 'w-28 h-20 bg-base-300 relative select-none transition duration-500 transform group-hover:text-black group-hover:rotate-y-180 group-hover:bg-rose-500 px-2 py-2 shadow-lg">
                                <div className='flex flex-row items-center justify-center group-hover:rotate-y-180'>
                                    <figure className="mt-5 hover:animate-spin">
                                        <FontAwesomeIcon icon={faDatabase} className="text-2xl flex group-hover:hidden" />
                                    </figure>
                                    <div className="mt-4 flex flex-col items-center justify-center hidden group-hover:flex">
                                        <h2 className="card-title text-center">SQL</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* API */}
                        <div className='w-28 h-20 group'>
                            <div className="card 'w-28 h-20 bg-base-300 relative select-none transition duration-500 transform group-hover:text-black group-hover:rotate-y-180 group-hover:bg-blue-500 px-2 py-2 shadow-lg">
                                <div className='flex flex-row items-center justify-center group-hover:rotate-y-180'>
                                    <figure className="mt-5 hover:animate-spin">
                                        <FontAwesomeIcon icon={faCode} className="text-2xl flex group-hover:hidden" />
                                    </figure>
                                    <div className="mt-1 flex flex-col items-center justify-center hidden group-hover:flex">
                                        <h2 className="card-title text-center">Clean Code</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Firebase */}
                        <div className='w-28 h-20 group'>
                            <div className="card 'w-28 h-20 bg-base-300 relative select-none transition duration-500 transform group-hover:text-black group-hover:rotate-y-180 group-hover:bg-green-500 px-2 py-2 shadow-lg">
                                <div className='flex flex-row items-center justify-center group-hover:rotate-y-180'>
                                    <figure className="mt-5 hover:animate-spin">
                                        <FontAwesomeIcon icon={faFire} className="text-2xl flex group-hover:hidden" />
                                    </figure>
                                    <div className="mt-4 flex flex-col items-center justify-center hidden group-hover:flex">
                                        <h2 className="card-title text-center">Firebase</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Version Control (e.g., Git) */}
                        <div className='w-28 h-20 group'>
                            <div className="card 'w-28 h-20 bg-base-300 relative select-none transition duration-500 transform group-hover:text-black group-hover:rotate-y-180 group-hover:bg-yellow-500 px-2 py-2 shadow-lg">
                                <div className='flex flex-row items-center justify-center group-hover:rotate-y-180'>
                                    <figure className="mt-5 hover:animate-spin">
                                        <FontAwesomeIcon icon={faCodeBranch} className="text-2xl flex group-hover:hidden" />
                                    </figure>
                                    <div className="mt-1 flex flex-col items-center justify-center hidden group-hover:flex">
                                        <h2 className="card-title text-center">Version Control</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Teamwork */}
                        <div className='w-28 h-20 group'>
                            <div className="card 'w-28 h-20 bg-base-300 relative select-none transition duration-500 transform group-hover:text-black group-hover:rotate-y-180 group-hover:bg-purple-500 px-2 py-2 shadow-lg">
                                <div className='flex flex-row items-center justify-center group-hover:rotate-y-180'>
                                    <figure className="mt-5 hover:animate-ping">
                                        <FontAwesomeIcon icon={faUsers} className="text-2xl flex group-hover:hidden" />
                                    </figure>
                                    <div className="mt-4 flex flex-col items-center justify-center hidden group-hover:flex">
                                        <h2 className="card-title text-center">Teamwork</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Problem Solving */}
                        <div className='w-28 h-20 group'>
                            <div className="card 'w-28 h-20 bg-base-300 relative select-none transition duration-500 transform group-hover:text-black group-hover:rotate-y-180 group-hover:bg-orange-500 px-2 py-2 shadow-lg">
                                <div className='flex flex-row items-center justify-center group-hover:rotate-y-180'>
                                    <figure className="mt-5 hover:animate-bounce">
                                        <FontAwesomeIcon icon={faLightbulb} className="text-2xl flex group-hover:hidden" />
                                    </figure>
                                    <div className="mt-1 flex flex-col items-center justify-center hidden group-hover:flex">
                                        <h2 className="card-title text-center">Problem Solving</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

        </>
    )
}


export default Toolbox;