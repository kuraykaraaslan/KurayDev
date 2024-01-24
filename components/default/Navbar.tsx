'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLightbulb, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';


const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const changeTheme = (theme: string) => {
        const html = document.querySelector('html');
        if (html) {
            html.setAttribute('data-theme', theme);
        }
    }

    const path = typeof window !== 'undefined' ? window.location.pathname : '';

    
    return (
        <>
            <div className="px-4 sm:px-6 lg:px-8 pt-3 sticky top-0 z-50" style={{ zIndex: 99, position: 'absolute', width: '100%' }}>
                <nav className="navbar bg-base-100 rounded-full shadow ">
                    <div className="flex-1">
                        <Link className="btn btn-ghost normal-case text-xl rounded-full" href="/" title="home">
                            <div className="flex items-center space-x-2">
                                <div className="text-lg font-semibold">kuray.dev</div>
                            </div>
                        </Link>
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
                    </div>

                    <div className="flex-none">
                        <div className="hidden sm:block">
                            <ul className="menu menu-horizontal px-1">
                                <li className={path == '/' ? 'active' : ''} >
                                    <Link href="/">home</Link></li>
                                <li>
                                    <Link href="https://resume.kuray.dev" target="_blank">resume</Link></li>
                                <li className={path.startsWith('/projects') ? 'active' : ''} >
                                    <Link href="https://github.com/kuraykaraaslan" target="_blank" locale="en">github</Link></li>
                                {/* <li className={path.startsWith('/blog') ? 'active' : ''} > */}
                                {/* <Link href="/blog" locale="en">blog</Link></li> */}
                                <li className={path == '/contact' ? 'active' : ''} >
                                    <Link href="/contact">contact</Link></li>
                            </ul>
                        </div>
                        <button className="btn btn-square btn-ghost rounded-full block sm:hidden items-center " onClick={toggleDrawer}>
                            <FontAwesomeIcon icon={faBars} style={{ width: '24px', height: '24px' }} onClick={toggleDrawer} />
                        </button>
                    </div>
                    {isDrawerOpen && (
                        <>
                            <div className='bg-base-200' style={{ position: 'fixed', zIndex: 100, top: 0, left: 0, width: '100%', height: '100vh', opacity: 0.1 }} onClick={toggleDrawer} ></div>
                            <div className="fixed inset-0 bg-opacity-0 " style={{ position: 'fixed', zIndex: 101, top: 0, width: '250px', height: '100vh', backgroundColor: '#1f2937' }} >
                                <ul className="h-full p-8 w-full menu menu-box bg-base-100 shadow-xl space-y-2">
                                    <li>
                                        <Link href="/" className="block text-center">home</Link>
                                    </li>
                                    <li>
                                        <a href="https://resume.kuray.dev" target="_blank" className="block text-center">resume</a>
                                    </li>
                                    <li>
                                        <Link href="https://github.com/kuraykaraaslan" target="_blank" className="block text-center">github</Link>
                                    </li>
                                    {/* <li>
                                        <Link href="/blog" className="block text-center" locale="en">blog</Link>
                                    </li> */}
                                    <li>
                                        <Link href="/contact" className="block text-center">contact</Link>
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
