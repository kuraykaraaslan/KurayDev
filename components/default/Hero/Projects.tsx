'use client';
import React from 'react';
import { faReact, faBootstrap, faHtml5, faPython, faPhp, faJava, faJs, faAmazon, faAndroid, faChrome, faOpera, faApple, faGithub, faGit } from "@fortawesome/free-brands-svg-icons"
import { faAnchor, faAnglesDown, faAnglesUp, faFire, faGear, faGlobe, faMobileScreenButton, faTv, faWind } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//i18n
import { withTranslation } from 'react-i18next';
import i18n from '@/libs/localize/localize';

const Projects = () => {

    const { t } = i18n;

    const [expanded, setExpanded] = React.useState(false);
    const container = React.useRef(null);

    const handleClick = () => {
        // get container current height
        const panel = container?.current as unknown as HTMLElement;

        if (panel === null) return;

        //make height is auto
        panel.style.height = expanded ? '560px' : `${panel.scrollHeight + 80}px`;


        //toggle the state
        setExpanded(!expanded);
    }




    return (
        <>
            <section className="bg-base-300 pt-12" id="projects">
                <div className="px-4 mx-auto max-w-screen-xl lg:pb-16 lg:px-6 duration-1000" style={{ height: '560px', overflow: 'clip' }} ref={container}>
                    <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8 -mt-8 lg-mt-0">
                        <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold">{t('PROJECTS.TITLE')}</h2>
                        <p className="font-light sm:text-xl">{t('PROJECTS.DESCRIPTION')}</p>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-2">
                        {/* pegasus, a Tailwind React UI Kit, React, Tailwind */}
                        <article className="p-6 rounded-lg border shadow-md bg-base-200 border-base-100">
                            <div className="flex items-center mb-5 text-black">
                                {/* React */}
                                <span className="text-xs font-medium me-2 px-2.5 pt-0.5 pb-1 rounded flex items-center bg-blue-300">
                                    <FontAwesomeIcon icon={faReact} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                    <span className="text-sm hidden lg:block">React</span>
                                </span>
                                {/* Tailwind */}
                                <span className="text-xs font-medium me-2 px-2.5 pt-0.5 pb-1 rounded flex items-center bg-blue-500">
                                    <FontAwesomeIcon icon={faWind} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                    <span className="text-sm hidden lg:block">Tailwind</span>
                                </span>
                            </div>
                            <h2 className="mb-2 text-2xl font-bold tracking-tight"><a>Pegasus UI Kit</a></h2>
                            <p className="mb-5 font-light">Pegasus is a React UI Kit that is built using Tailwind CSS. It offers a responsive and user-friendly interface for an optimal experience.</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-4">
                                    <a href="https://github.com/kuraykaraaslan/pegasus" className="inline-flex items-center font-medium hover:underline">
                                        <FontAwesomeIcon icon={faGithub} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                        GitHub
                                    </a>
                                </div>
                                <a href="https://pegasus.kuray.dev" className="inline-flex items-center font-medium hover:underline">
                                    <FontAwesomeIcon icon={faGlobe} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                    demo
                                </a>

                            </div>
                        </article>
                        {/* Expo React Redux Boilerplate, React Native, Expo, Redux */}
                        <article className="p-6 rounded-lg border shadow-md bg-blue-500 text-white border-base-100">
                            <div className="flex items-center mb-5 text-black">
                                {/* React Native */}
                                <span className="text-xs font-medium me-2 px-2.5 pt-0.5 pb-1 rounded flex items-center bg-blue-300">
                                    <FontAwesomeIcon icon={faReact} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                    <span className="text-sm hidden lg:block">React Native</span>
                                </span>
                            </div>
                            <h2 className="mb-2 text-2xl font-bold tracking-tight"><a>Expo React Redux Boilerplate</a></h2>
                            <p className="mb-5 font-light"> It provides a solid foundation for creating cross-platform mobile apps with a predictable state container for managing application data flow.</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-4">
                                    <a href="https://github.com/kuraykaraaslan/expo-react-redux-boilerplate" className="inline-flex items-center font-medium hover:underline">
                                        <FontAwesomeIcon icon={faGithub} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </article>
                        {/* sözleşmeci, Contract Generator, React, Firebase */}
                        <article className="p-6 rounded-lg border shadow-md bg-green-500 border-base-100">
                            <div className="flex items-center mb-5 text-black">
                                {/* React */}
                                <span className="text-xs font-medium me-2 px-2.5 pt-0.5 pb-1 rounded flex items-center bg-blue-300">
                                    <FontAwesomeIcon icon={faReact} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                    <span className="text-sm hidden lg:block">React</span>
                                </span>
                                {/* Firebase */}
                                <span className="text-xs font-medium me-2 px-2.5 pt-0.5 pb-1 rounded flex items-center bg-yellow-300">
                                    <FontAwesomeIcon icon={faFire} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                    <span className="text-sm hidden lg:block">Firebase</span>
                                </span>
                            </div>
                            <h2 className="mb-2 text-2xl text-white font-bold tracking-tight"><a>Sözleşmeci</a></h2>
                            <p className="mb-5 font-light text-white">Sözleşmeci is a contract generator that allows users to create, customize, and print professional contracts with ease. Built using React, it offers a responsive and user-friendly interface for an optimal experience.</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-4">
                                    <a href="https://github.com/kuraykaraaslan/Sozlesmeci" className="inline-flex items-center font-medium hover:underline">
                                        <FontAwesomeIcon icon={faGithub} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </article>
                        {/* fireCMS, Firebase CMS, Express, Firebase */}
                        <article className="p-6 rounded-lg border shadow-md bg-yellow-500 text-black border-base-100">
                            <div className="flex items-center mb-5 text-black">
                                {/* React */}
                                <span className="text-xs font-medium me-2 px-2.5 pt-0.5 pb-1 rounded flex items-center bg-blue-300">
                                    <FontAwesomeIcon icon={faReact} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                    <span className="text-sm hidden lg:block">React</span>
                                </span>
                                {/* Firebase */}
                                <span className="text-xs font-medium me-2 px-2.5 pt-0.5 pb-1 rounded flex items-center bg-yellow-300">
                                    <FontAwesomeIcon icon={faFire} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                    <span className="text-sm hidden lg:block">Firebase</span>
                                </span>
                            </div>
                            <h2 className="mb-2 text-2xl font-bold tracking-tight"><a>fireCMS</a></h2>
                            <p className="mb-5 font-light">fireCMS is a Headless CMS that is built using Express and Firebase. It offers a API based CMS for an optimal experience.</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-4">
                                    <a href="https://github.com/kuraykaraaslan/FireCMS" className="inline-flex items-center font-medium hover:underline">
                                        <FontAwesomeIcon icon={faGithub} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </article>
                        {/* Instagram Follow Studio, Instagram Follow Unfollow Chrome Extension, React, Chrome, Opera */}
                        <article className="p-6 rounded-lg border shadow-md bg-base-200 border-base-100">
                            <div className="flex items-center mb-5 text-black">
                                {/* React */}
                                <span className="text-xs font-medium me-2 px-2.5 pt-0.5 pb-1 rounded flex items-center bg-blue-300">
                                    <FontAwesomeIcon icon={faReact} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                    <span className="text-sm hidden lg:block">React</span>
                                </span>
                                {/* Chrome */}
                                <span className="text-xs font-medium me-2 px-2.5 pt-0.5 pb-1 rounded flex items-center bg-purple-300">
                                    <FontAwesomeIcon icon={faChrome} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                    <span className="text-sm hidden lg:block">Chrome</span>
                                </span>
                                {/* Opera */}
                                <span className="text-xs font-medium me-2 px-2.5 pt-0.5 pb-1 rounded flex items-center bg-red-300">
                                    <FontAwesomeIcon icon={faOpera} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                    <span className="text-sm hidden lg:block">Opera</span>
                                </span>
                            </div>
                            <h2 className="mb-2 text-2xl font-bold tracking-tight"><a>Instagram Follow Studio</a></h2>
                            <p className="mb-5 font-light">Instagram Follow Studio is a Chrome extension that allows you to follow and unfollow people on Instagram automatically. Listing them in a table, the extension allows you to follow and unfollow people in a controlled manner.</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-4">
                                    <a href="https://github.com/kuraykaraaslan/InstaFollowStudio" className="inline-flex items-center font-medium hover:underline">
                                        <FontAwesomeIcon icon={faGithub} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                        GitHub
                                    </a>

                                </div>
                                <a href="https://chromewebstore.google.com/detail/instagram-follow-studio/hokigbagphgdofjloccgkjoejpokjkcd" className="inline-flex items-center font-medium hover:underline">
                                    <FontAwesomeIcon icon={faGlobe} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                    Chrome Web Store

                                </a>
                            </div>
                        </article>
                        {/* Resume, React Based interactive resume, React */}
                        <article className="p-6 rounded-lg border shadow-md bg-white border-base-100 text-black">
                            <div className="flex items-center mb-5 text-black">
                                {/* React */}
                                <span className="text-xs font-medium me-2 px-2.5 pt-0.5 pb-1 rounded flex items-center bg-blue-300">
                                    <FontAwesomeIcon icon={faReact} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                    <span className="text-sm hidden lg:block">React</span>
                                </span>
                            </div>
                            <h2 className="mb-2 text-2xl font-bold tracking-tight"><a>Resume</a></h2>
                            <p className="mb-5 font-light">This open-source application allows users to create, customize, and print professional resumes and CVs with ease. Built using React, it offers a responsive and user-friendly interface for an optimal experience.</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-4">
                                    <a href="https://github.com/kuraykaraaslan/Resume" className="inline-flex items-center font-medium hover:underline">
                                        <FontAwesomeIcon icon={faGithub} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                        GitHub
                                    </a>

                                </div>
                                <a href="https://resume.kuray.dev" className="inline-flex items-center font-medium hover:underline">
                                    <FontAwesomeIcon icon={faGlobe} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                    Resume</a>
                            </div>
                        </article>
                        {/* tny.ist , URL Shortener , React, Firebase, Android */}
                        <article className="p-6 rounded-lg border shadow-md bg-purple-500 text-black border-base-100">
                            <div className="flex items-center mb-5 text-black">
                                {/* React */}
                                <span className="text-xs font-medium me-2 px-2.5 pt-0.5 pb-1 rounded flex items-center bg-blue-300">
                                    <FontAwesomeIcon icon={faReact} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                    <span className="text-sm hidden lg:block">React</span>
                                </span>
                                {/* Firebase */}
                                <span className="text-xs font-medium me-2 px-2.5 pt-0.5 pb-1 rounded flex items-center bg-yellow-300">
                                    <FontAwesomeIcon icon={faFire} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                    <span className="text-sm hidden lg:block">Firebase</span>
                                </span>
                                {/* Android */}
                                <span className="text-xs font-medium me-2 px-2.5 pt-0.5 pb-1 rounded flex items-center bg-green-300">
                                    <FontAwesomeIcon icon={faAndroid} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                    <span className="text-sm hidden lg:block">Android</span>
                                </span>
                            </div>
                            <h2 className="mb-2 text-2xl font-bold tracking-tight"><a>tny.ist</a></h2>
                            <p className="mb-5 font-light">tny.ist is a free URL shortening service that provides companies and individuals with unique, customizable and secure links as well as analytics for the shortened links.</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-4">
                                    <a href="https://tny.ist" className="inline-flex items-center font-medium hover:underline">
                                        <FontAwesomeIcon icon={faAndroid} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                        coming soon
                                    </a>
                                </div>
                                <a href="https://tny.ist" className="inline-flex items-center font-medium hover:underline">
                                    <FontAwesomeIcon icon={faGlobe} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                    tny.ist

                                </a>
                            </div>
                        </article>
                        {/* DateWave, Dating App, React Native, Firebase, Android, iOS */}
                        <article className="p-6 rounded-lg border shadow-md bg-base-200 border-base-100">
                            <div className="flex items-center mb-5 text-black">
                                {/* React Native */}
                                <span className="text-xs font-medium me-2 px-2.5 pt-0.5 pb-1 rounded flex items-center bg-blue-300">
                                    <FontAwesomeIcon icon={faReact} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                    <span className="text-sm hidden lg:block">React Native</span>
                                </span>
                                {/* Firebase */}
                                <span className="text-xs font-medium me-2 px-2.5 pt-0.5 pb-1 rounded flex items-center bg-yellow-300">
                                    <FontAwesomeIcon icon={faFire} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                    <span className="text-sm hidden lg:block">Firebase</span>
                                </span>
                                {/* Android */}
                                <span className="text-xs font-medium me-2 px-2.5 pt-0.5 pb-1 rounded flex items-center bg-green-300">
                                    <FontAwesomeIcon icon={faAndroid} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                    <span className="text-sm hidden lg:block">Android</span>
                                </span>
                                {/* iOS */}
                                <span className="text-xs font-medium me-2 px-2.5 pt-0.5 pb-1 rounded flex items-center bg-purple-300">
                                    <FontAwesomeIcon icon={faApple} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                    <span className="text-sm hidden lg:block">iOS</span>
                                </span>
                            </div>
                            <h2 className="mb-2 text-2xl font-bold tracking-tight"><a>DateWave</a></h2>
                            <p className="mb-5 font-light">DateWave is a dating app that allows users to find their soulmates. The app is built using React Native and Firebase, and it is available on both Android and iOS.</p>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center space-x-4'>

                                </div>
                                <a href="https://github.com/kuraykaraaslan/Datewave" className="inline-flex items-center font-medium hover:underline">
                                    <FontAwesomeIcon icon={faGlobe} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                    GitHub</a>
                            </div>
                        </article>
                        {/* 3D View Cube, React, 3JS, WebGL */}
                        <article className="p-6 rounded-lg border shadow-md bg-purple-200 text-black border-base-100">
                            <div className="flex items-center mb-5 text-black">
                                {/* React */}
                                <span className="text-xs font-medium me-2 px-2.5 pt-0.5 pb-1 rounded flex items-center bg-blue-300">
                                    <FontAwesomeIcon icon={faReact} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                    <span className="text-sm hidden lg:block">React</span>
                                </span>
                                {/* WebGL */}
                                <span className="text-xs font-medium me-2 px-2.5 pt-0.5 pb-1 rounded flex items-center bg-yellow-300">
                                    <FontAwesomeIcon icon={faGlobe} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                    <span className="text-sm hidden lg:block">WebGL</span>
                                </span>
                            </div>
                            <h2 className="mb-2 text-2xl font-bold tracking-tight"><a>3D View Cube</a></h2>
                            <p className="mb-5 font-light">3D View Cube is a 3D cube that is built using React and WebGL. It is a simple application that allows users to rotate the cube in 3D space.</p>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center space-x-4'>
                                    <a href="https://github.com/kuraykaraaslan/control-view-cube" className="inline-flex items-center font-medium hover:underline">
                                        <FontAwesomeIcon icon={faGithub} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                        GitHub
                                    </a>

                                </div>
                                <a href="https://www.npmjs.com/package/control-view-cube" className="inline-flex items-center font-medium hover:underline">
                                    <FontAwesomeIcon icon={faGlobe} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                    npm</a>
                            </div>
                        </article>
                        {/* for other projects , check my github */}
                        <article className="p-6 rounded-lg border shadow-md bg-red-500 border-base-100 text-white">
                            <div className="flex items-center mb-5 text-black">
                                {/* Desktop */}
                                <span className="text-xs font-medium me-2 px-2.5 pt-0.5 pb-1 rounded flex items-center bg-yellow-300">
                                    <FontAwesomeIcon icon={faTv} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                    <span className="text-sm hidden lg:block">Desktop</span>
                                </span>
                                {/* Mobile */}
                                <span className="text-xs font-medium me-2 px-2.5 pt-0.5 pb-1 rounded flex items-center bg-green-300">
                                    <FontAwesomeIcon icon={faMobileScreenButton} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                    <span className="text-sm hidden lg:block">Mobile</span>
                                </span>
                                {/* Web */}
                                <span className="text-xs font-medium me-2 px-2.5 pt-0.5 pb-1 rounded flex items-center bg-blue-300">
                                    <FontAwesomeIcon icon={faGlobe} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                    <span className="text-sm hidden lg:block">Web</span>
                                </span>



                            </div>
                            <h2 className="mb-2 text-2xl font-bold tracking-tight"><a>Other Projects</a></h2>
                            <p className="mb-5 font-light">For other projects, check my GitHub profile. You can find various projects that I have worked on.</p>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center space-x-4'>
                                    <a href="https://github.com/kuraykaraaslan" className="inline-flex items-center font-medium hover:underline">
                                        <FontAwesomeIcon icon={faGithub} style={{ width: "1rem", height: "1rem", marginRight: "0.25rem", paddingTop: "0.25rem" }} />
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="flex carousel-indicators gap-2 bg-transparent select-none" style={{
                    zIndex: 50, position: 'relative', left: '0', right: '0', margin: 'auto', height: '0px', width: '100%', bottom: '20',
                    display: 'flex', justifyContent: 'center'
                }}>
                    <div className="flex carousel-indicators gap-2 bg-gradient-to-b from-base-200/0 to-base-300" style={{
                        zIndex: 50, position: 'relative', left: '0', right: '0', margin: 'auto', height: '80px', width: '100%',
                        display: 'flex', justifyContent: 'center', transform: 'translateY(-80px)'
                    }}>
                        {!expanded ?
                            <a className="flex flex-col items-center gap-2 animate-bounce" style={{ height: '80px', width: '130px' }} onClick={handleClick} >
                                <FontAwesomeIcon icon={faAnglesDown} style={{
                                    width: '2.0rem', height: '2.0rem'
                                }} /> <span>{expanded ? 'Show Less' : 'Show More'}</span>
                            </a>
                            :
                            <a className="flex flex-col items-center gap-2" style={{ height: '80px', width: '130px' }} onClick={handleClick} >
                                <FontAwesomeIcon icon={faAnglesUp} style={{ width: '2.0rem', height: '2.0rem' }} /> <span>{expanded ? 'Show Less' : 'Show More'}</span>
                            </a>
                        }
                    </div>
                </div>
            </section>
        </>
    );

}

export default withTranslation()(Projects);

