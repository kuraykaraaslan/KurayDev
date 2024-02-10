'use client';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLightbulb, faSun, faMoon, faH, faHome, faP, faPerson, faUser, faBriefcase, faPhone, faLink } from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


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

    const path = typeof window !== 'undefined' ? window.location.pathname : '';


    return (
        <>
            <div className="px-4 sm:px-6 lg:px-8 pt-3 sticky top-0 z-50 w-full" style={{ zIndex: 99, position: 'absolute', width: '100%' }}>
                <nav className="navbar bg-base-100 rounded-full shadow-lg border border-base-200">
                    <div className="flex-1">
                        <Link className="btn btn-ghost normal-case text-xl rounded-full" href="/" title="home">
                            <div className="flex items-center space-x-2">
                                <div className="text-lg font-semibold">kuray.dev</div>
                            </div>
                        </Link>

                        <button className="btn btn-square btn-ghost rounded-full block items-center " onClick={changeThemeEachOther}>
                            <FontAwesomeIcon icon={faLightbulb} style={{ width: '24px', height: '24px' }} />

                        </button>

                        {/*

                        <div className="dropdown dropdown-right dropdown-center ml-2"  title="themes">
                            <button className="btn rounded-full bg-base-100 hover:bg-base-200 border-none" ><FontAwesomeIcon icon={faLightbulb} style={{ width: '1.0rem', height: '1.0rem' }}/></button>
                            <ul className="dropdown-content z-[1] menu menu-horizontal w-32 border-inherit bg-base-200 rounded-box shadow-xl -mt-0.5 ml-2">
                                <li title="ligth mode">
                                    <button className="text-base-content block text-center" onClick={() => changeTheme('light')}><FontAwesomeIcon icon={faSun} style={{ width: '1.0rem', height: '1.0rem' }}/></button>
                                </li>
                                <li title="dark mode">
                                    <button className="text-base-content block text-center" onClick={() => changeTheme('dark')}><FontAwesomeIcon icon={faMoon} style={{ width: '1.0rem', height: '1.0rem' }} /></button>
                                </li>
                            </ul>
                        </div>

                        */}
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
                                    <Link href="https://resume.kuray.dev" target="_blank"><FontAwesomeIcon icon={faLink} style={{ width: '1.0rem', height: '1.0rem' }} />
                                        resume</Link></li>

                                {/* <li className={path.startsWith('/blog') ? 'active' : ''} > */}
                                {/* <Link href="/blog" locale="en">blog</Link></li> */}

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
                                        <a href="https://resume.kuray.dev" target="_blank" className="text-lg block"><FontAwesomeIcon icon={faLink} style={{ width: '1.5rem', height: '1.5rem', marginRight: '0.5rem' }} /> resume</a>
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
