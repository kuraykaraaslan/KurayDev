'use client';
import { createRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect } from 'react'
import { faBaby, faBriefcase, faBuildingColumns, faCode, faComputer, faFaceSmile, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faChrome, faFirefox } from '@fortawesome/free-brands-svg-icons';

const Timeline = () => {


    const [showDetails, setShowDetails] = React.useState(false);
    const [isHovering, setIsHovering] = React.useState(false);


    return (
        <>
            <section className={"bg-base-200 justify-center items-center flex flex-col select-none border-t-2 border-b-2 border-base-100 px-10 transition-all duration-300"} id="timeline" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} onClick={() => setShowDetails(!showDetails)}>
                <div className="relative w-full h-full items-center justify-center flex flex-col">
                    {/* Apply blur effect only to this section */}
                    <div className="absolute inset-0 bg-base-200 bg-opacity-50 backdrop-filter backdrop-blur-sm items-center justify-center flex flex-col" style={{
                        zIndex: 100,
                        display: isHovering ? showDetails ? 'none' : 'flex' : 'none',
                    }}>
                        <h3 className="text-3xl font-bold text-center">click on the timeline to see details</h3>
                    </div>
                    {/* Content inside the blurred section */}

                    <ul className={"timeline bg-base-200 my-6" + (showDetails ? ' timeline-vertical' : ' timeline-vertical lg:timeline-horizontal')}>
                        <li>
                            <div className="timeline-start timeline-box max-w-xs mx-2">
                                <p className='font-bold'>day 0</p>
                                <p style={{ display: showDetails ? 'block' : 'none' }}>i was born in 1996 in mersin, turkey. i was a very curious child and always wanted to learn new things.</p>
                            </div>
                            <div className="timeline-middle my-1">
                                <div className="bg-white text-black rounded-full pt-1 px-1">
                                    <FontAwesomeIcon icon={faBaby} style={{ width: '12px', height: '12px' }} className="m-1 mt-1" />
                                </div>
                            </div>
                            <div className="timeline-end mx-2">1996</div>
                            <hr />

                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start mx-2">2002</div>
                            <div className="timeline-middle my-1">
                                <div className="bg-white text-black rounded-full pt-1 px-1">
                                    <FontAwesomeIcon icon={faComputer} style={{ width: '12px', height: '12px' }} className="m-1 mt-1" />
                                </div>
                            </div>
                            <div className="timeline-end timeline-box max-w-xs mx-2">
                                <p className='font-bold'>first computer</p>
                                <p style={{ display: showDetails ? 'block' : 'none' }}>i got my first computer in 2002. it was a windows 98 machine with a 15-inch crt monitor. i spent hours playing games and trying to understand how it worked.</p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start timeline-box max-w-xs mx-2">
                                <p className='font-bold'>meets internet</p>
                                <p style={{ display: showDetails ? 'block' : 'none' }}>i met the internet in 2005. i was amazed by the things i could do with it. i started learning how to use it and meet with linux.</p>
                            </div>
                            <div className="timeline-middle my-1">
                                <div className="bg-white text-black rounded-full pt-1 px-1">
                                    <FontAwesomeIcon icon={faGlobe} style={{ width: '12px', height: '12px' }} className="m-1 mt-1" />
                                </div>
                            </div>
                            <div className="timeline-end mx-2">2005</div>
                            <hr />
                        </li>
                        <li style={{ display: showDetails ? 'grid' : 'none' }}>
                            <hr />
                            <div className="timeline-start mx-2">2008</div>
                            <div className="timeline-middle my-1">
                                <div className="bg-white text-black rounded-full pt-1 px-1">
                                    <FontAwesomeIcon icon={faCode} style={{ width: '12px', height: '12px' }} className="m-1 mt-1" />
                                </div>
                            </div>
                            <div className="timeline-end timeline-box max-w-xs mx-2">
                                <p className='font-bold'>starts coding</p>
                                <p style={{ display: showDetails ? 'block' : 'none' }}>i started coding in 2008. i learned html, css, and javascript. i built my first website and was hooked on coding.</p>
                            </div>
                            <hr />
                        </li>
                        <li style={{ display: showDetails ? 'grid' : 'none' }}>
                            <hr />
                            <div className="timeline-start timeline-box max-w-xs mx-2">
                                <p className='font-bold'>first website</p>
                                <p style={{ display: showDetails ? 'block' : 'none' }}>i built my first website in 2010. it was a simple site with a few pages. i was proud of what i had created and wanted to learn more.</p>
                            </div>
                            <div className="timeline-middle my-1">
                                <div className="bg-white text-black rounded-full pt-1 px-1">
                                    <FontAwesomeIcon icon={faFirefox} style={{ width: '12px', height: '12px' }} className="m-1 mt-1" />
                                </div>
                            </div>
                            <div className="timeline-end mx-2">2010</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start mx-2">2015</div>
                            <div className="timeline-middle my-1">
                                <div className="bg-white text-black rounded-full pt-1 px-1">
                                    <FontAwesomeIcon icon={faBuildingColumns} style={{ width: '12px', height: '12px' }} className="m-1 mt-1" />
                                </div>
                            </div>
                            <div className="timeline-end timeline-box max-w-xs mx-2">
                                <p className='font-bold'>university</p>
                                <p style={{ display: showDetails ? 'block' : 'none' }}>i went to university in 2015. i studied civil engineering and learned a lot about buildings and structures. i also continued to learn about coding and web development.</p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start timeline-box max-w-xs mx-2">
                                <p className='font-bold'>changing career</p>
                                <p style={{ display: showDetails ? 'block' : 'none' }}>i decided to change my career in 2023. i wanted to work in tech and build software. i started learning new technologies and building projects.</p>
                            </div>
                            <div className="timeline-middle my-1">
                                <div className="bg-white text-black rounded-full pt-1 px-1">
                                    <FontAwesomeIcon icon={faBriefcase} style={{ width: '12px', height: '12px' }} className="m-1 mt-1" />
                                </div>
                            </div>
                            <div className="timeline-end mx-2">2023</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start mx-2">2024</div>
                            <div className="timeline-middle my-1">
                                <div className="bg-white text-black rounded-full pt-1 px-1">
                                    <FontAwesomeIcon icon={faFaceSmile} style={{ width: '12px', height: '12px' }} className="m-1 mt-1" />
                                </div>
                            </div>
                            <div className="timeline-end timeline-box max-w-xs mx-2">
                                <p className='font-bold'>first software job</p>
                                <p style={{ display: showDetails ? 'block' : 'none' }}>i got my first software job in 2024. i was excited to start working as a software developer and to build real-world projects.</p>
                            </div>
                        </li>
                    </ul>


                </div>
            </section>
        </>
    );
}

export default Timeline;