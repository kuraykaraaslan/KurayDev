
import { useState, useEffect, createRef, Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faBootstrap, faHtml5, faPython, faPhp, faJava } from "@fortawesome/free-brands-svg-icons"
import { faWind, faDatabase } from "@fortawesome/free-solid-svg-icons"

const HeroFeatures = () => {


    return (
        <>
            <section className="dark:bg-base-100 py-8 px-4 md:px-20 px-4">

                <div className="flex-none grid grid-cols-2 md:grid-cols-4 mx-auto gap-0 justify-items-center">
                    <div className="w-56 text-right hidden md:block">
                    </div>
                    <div className="w-56 text-right px-2 py-2">
                    <h1 className="text-4xl font-bold relative mt-6 mr-3 sm:mr-0">creativity needs a lot of tools</h1>
                    </div>
                    <div className="max-w-12 text-left px-2 py-2 ml-3 sm:ml-0">
                    <p className="mt-6 pr-4">i have a lot of tools in my toolbox, and i'm always learning new ones.</p>
                    </div>

                </div>

                <div className="grid grid-row-auto justify-items-center md:grid-row-2 md:space-y-8 py-8">
                    <div className="flex flex-col lg:flex-row-reverse md:mx-12 mx-auto">
                        <div className="flex-1 pl-4 select-none hidden lg:block">
                            <h1 className="text-3xl font-bold  relative overflow-hidden animate-shake pb-4">front-end.</h1>
                        </div>
                        <div className="flex-none grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                            <div className="card w-40 h-40 bg-base-300 hover:bg-blue-300 hover:text-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 select-none px-2 py-2">
                                <figure className="px-10 pt-10 -mb-3 pb-5">
                                    <FontAwesomeIcon icon={faReact} style={{ width: "45px", height: "45px" }} />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">react</h2>
                                </div>
                            </div>
                            <div className="card w-40 h-40 bg-base-300 hover:text-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 select-none hover:bg-purple-600 px-2 py-2">
                                <figure className="px-10 pt-10 -mb-3 pb-5">
                                    <FontAwesomeIcon icon={faBootstrap} style={{ width: "45px", height: "45px" }} />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">bootstrap</h2>
                                </div>
                            </div>
                            <div className="card w-40 h-40 bg-base-300 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 select-none hover:bg-blue-600 px-2 py-2">
                                <figure className="px-10 pt-10 -mb-3 pb-5">
                                    <FontAwesomeIcon icon={faWind} style={{ width: "45px", height: "45px" }} />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">tailwind</h2>
                                </div>
                            </div>
                            <div className="card w-40 h-40 bg-base-300 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 select-none hover:bg-orange-500 px-2 py-2">
                                <figure className="px-10 pt-10 -mb-3 pb-5">
                                    <FontAwesomeIcon icon={faHtml5} style={{ width: "45px", height: "45px" }} />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">html</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row md:mx-12 mx-auto pt-4">
                        <div className="flex-0 lg:pl-0 select-none hidden lg:block pr-4">
                            <h1 className="text-3xl font-bold  relative overflow-hidden animate-shake pb-4">back-end.</h1>
                        </div>
                        <div className="flex-none grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                            <div className="card w-40 h-40 bg-base-300 hover:text-blue-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 select-none hover:bg-yellow-400 px-2 py-2">
                                <figure className="px-10 pt-10 -mb-3 pb-5">
                                    <FontAwesomeIcon icon={faPython} style={{ width: "45px", height: "45px" }} />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">python</h2>
                                </div>
                            </div>
                            <div className="card w-40 h-40 bg-base-300 hover:text-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 select-none hover:bg-purple-400 px-2 py-2">
                                <figure className="px-10 pt-10 -mb-3 pb-5">
                                    <FontAwesomeIcon icon={faPhp} style={{ width: "45px", height: "45px" }} />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">php</h2>
                                </div>
                            </div>
                            <div className="card w-40 h-40 bg-base-300 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 select-none hover:bg-purple-800 px-2 py-2">
                                <figure className="px-10 pt-10 -mb-3 pb-5">
                                    <h1 className="text-4xl font-bold pt-3 relative overflow-hidden animate-shake pb-4">C#</h1>
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">csharp</h2>
                                </div>
                            </div>
                            <div className="card w-40 h-40 bg-base-300 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 select-none hover:bg-blue-800 px-2 py-2">
                                <figure className="px-10 pt-10 -mb-3 pb-5">
                                    <FontAwesomeIcon icon={faJava} style={{ width: "45px", height: "45px" }} />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">java</h2>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

        </>
    )
}


export default HeroFeatures;