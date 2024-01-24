'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faGithub, faLinkedin, faTelegram, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
// mail phone
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Head from "next/head";
import dynamic from 'next/dynamic';


const ContactForm = dynamic(() => import('../../../components/default/ContactForm'), { ssr: false });

const ContactPage = () => {
    return (
        <>
            <Head>
                <title>contact | kuray.dev</title>
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

            <div className="mx-4 md:mx-8 bg-base-200 pt-2 rounded-box mb-4">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x pt-12 pb-12 mb-2">
                    <div className="py-6 md:py-0 md:px-6">
                        <h1 className="text-4xl font-bold">contact</h1>
                        <p className="pt-2 pb-4">good things happen when we talk</p>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 mr-2 sm:mr-6" />
                                <span>kuraykaraaslan@gmail.com</span>
                            </p>

                            <p className="flex items-center">
                                <FontAwesomeIcon icon={faTelegram} className="w-5 h-5 mr-2 sm:mr-6" />
                                <a href="https://t.me/kuraykaraaslan"  target="_blank" rel="noopener noreferrer">
                                    <span>Telegram</span>
                                </a>
                            </p>

                            <p className="flex items-center">
                                <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 mr-2 sm:mr-6" />
                                <a href="https://www.linkedin.com/in/kuraykaraaslan" target="_blank" rel="noopener noreferrer">
                                    <span>LinkedIn</span>
                                </a>
                            </p>
                            
                            <p className="flex items-center">
                                <FontAwesomeIcon icon={faGithub} className="w-5 h-5 mr-2 sm:mr-6" />
                                <a href="https://github.com/kuraykaraaslan" target="_blank" rel="noopener noreferrer">
                                    <span>Github</span>
                                </a>
                            </p>
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faXTwitter} className="w-5 h-5 mr-2 sm:mr-6" />
                                <a href="https://twitter.com/kuraykaraaslan" target="_blank" rel="noopener noreferrer">
                                    <span>X</span>
                                </a>
                            </div>
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faFacebook} className="w-5 h-5 mr-2 sm:mr-6" />
                                <a href="https://www.facebook.com/kuraykaraaslan" target="_blank" rel="noopener noreferrer">
                                    <span>Facebook</span>
                                </a>
                            </div>
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5 mr-2 sm:mr-6" />
                                <a href="https://www.instagram.com/kuraykaraaslan" target="_blank" rel="noopener noreferrer">
                                    <span>Instagram</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                        <h1 className="text-4xl font-bold">send me a message</h1>
                        <ContactForm />
                    </form>
                </div>
            </div>
        </>
    );
}

export default ContactPage;