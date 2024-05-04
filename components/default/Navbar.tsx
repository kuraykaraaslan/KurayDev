'use client';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLightbulb, faSun, faMoon, faH, faHome, faP, faPerson, faUser, faBriefcase, faPhone, faLink } from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import dynamic from 'next/dynamic'

const LangButton = dynamic(() => import('./NavbarPartial/LangButton'), { ssr: false });
const ThemeButton = dynamic(() => import('./NavbarPartial/ThemeButton'), { ssr: false });


const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [theme, setTheme] = useState('dark');

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };


    useEffect(() => {
        const html = document.querySelector('html');
        if (html) {
            if (html.getAttribute('data-theme') == 'dark') {
                setTheme('light');
            } else {
                setTheme('dark');
            }
        }
    }, []);


    const changeTheme = (theme: string) => {
        const html = document.querySelector('html');
        if (html) {
            html.setAttribute('data-theme', theme);
        }
    }

    const changeThemeEachOther = () => {
        const html = document.querySelector('html');
        if (html) {
            if (html.getAttribute('data-theme') == 'dark') {
                changeTheme('light');
            } else {
                changeTheme('dark');
            }
        }
    }

    //current path

    const path = typeof window !== 'undefined' ? window.location.pathname : '';

    return (
        <>
            <div className="px-4 sm:px-6 lg:px-8 pt-3 pb-6 sticky top-0 z-50 w-full" style={{ zIndex: 60, position: 'absolute', width: '100%' }}>
                <nav className={"navbar bg-base-100 rounded-full shadow-lg border border-base-200" + ((path == '/' || path == '') ? ' bg-opacity-50' : '')}>
                    <div className="flex-1">
                        <Link className="btn btn-ghost normal-case text-xl rounded-full" href="/" title="home">
                            <div className="flex items-center space-x-2">
                                <div className="text-lg font-semibold">kuray.dev</div>
                            </div>
                        </Link>

                        <ThemeButton />
                        <LangButton />

                    </div>

                    <div className="flex-none">
                        <div className="hidden md:block">
                            <ul className="menu menu-horizontal px-1 gap-2">
                                <li><Link href="#home">home</Link></li>
                                <li><Link href="#projects">projects</Link></li>
                                <li><Link href="#contact">contact</Link></li>
                                <li className="border-l-2 border-gray-400 border-opacity-50 pl-2" >
                                    <Link href="https://github.com/kuraykaraaslan" target="_blank" locale="en"><FontAwesomeIcon icon={faGithub} style={{ width: '1.0rem', height: '1.0rem' }} />
                                        github</Link></li>
                                <li className="rounded-r-full" >
                                    <Link href="https://drive.google.com/file/d/17Ya5AC2nvcvccN-bS2pFsKFIm5v8dcWN/view?usp=drive_link" target="_blank"><FontAwesomeIcon icon={faLink} style={{ width: '1.0rem', height: '1.0rem' }} />
                                        resume</Link></li>

                            </ul>
                        </div>
                        <button className="btn btn-square btn-ghost rounded-full block md:hidden items-center " onClick={toggleDrawer}>
                            <FontAwesomeIcon icon={faBars} style={{ width: '24px', height: '24px' }} onClick={toggleDrawer} />
                        </button>
                    </div>
                    {isDrawerOpen && (
                        <>
                            <div className='bg-base-200' style={{ position: 'fixed', zIndex: 100, top: 0, left: 0, width: '100%', height: '100vh', opacity: 0.1 }} onClick={toggleDrawer} ></div>
                            <div style={{ position: 'fixed', zIndex: 101, top: 0, width: '250px', height: '100vh', backgroundColor: '#1f2937' }} className="fixed inset-0 bg-opacity-0 border-r-2 border-base-200 shadow-2xl">
                                <ul className="h-full p-8 w-full menu menu-box bg-base-100 shadow-xl space-y-2">
                                    <li >
                                        <Link href="#home" className="text-lg block"><FontAwesomeIcon icon={faHome} style={{ width: '1.5rem', height: '1.5rem', marginRight: '0.5rem', top: '0.2rem' }} /> home</Link>
                                    </li>
                                    <li >
                                        <a href="https://drive.google.com/file/d/17Ya5AC2nvcvccN-bS2pFsKFIm5v8dcWN/view?usp=drive_link" target="_blank" className="text-lg block"><FontAwesomeIcon icon={faLink} style={{ width: '1.5rem', height: '1.5rem', marginRight: '0.5rem' }} /> resume</a>
                                    </li>
                                    <li >
                                        <Link href="#projects" className="text-lg block"><FontAwesomeIcon icon={faBriefcase} style={{ width: '1.5rem', height: '1.5rem', marginRight: '0.5rem' }} /> projects</Link>
                                    </li>
                                    <li >
                                        <Link href="https://github.com/kuraykaraaslan" target="_blank" className="text-lg block"><FontAwesomeIcon icon={faGithub} style={{ width: '1.5rem', height: '1.5rem', marginRight: '0.5rem' }} /> github</Link>
                                    </li>
                                    {/* <li>
                                        <Link href="/blog" className="text-lg block" locale="en">blog</Link>
                                    </li> */}
                                    <li >
                                        <Link href="#contact" className="text-lg block"><FontAwesomeIcon icon={faPhone} style={{ width: '1.5rem', height: '1.5rem', marginRight: '0.5rem' }} /> contact</Link>
                                    </li>
                                </ul>

                            </div>
                        </>
                    )}
                </nav>
            </div>
        </>
    );
};

export default Navbar;
