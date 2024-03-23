
'use client';
import React, { useState, useEffect, createRef, Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faArrowRight, faLink } from '@fortawesome/free-solid-svg-icons'

import Link from 'next/link';

import "@fontsource/caveat-brush";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const TypingEffect = () => {
    const texts = ["hire", "make a difference", "build the future", "create awesome things"];

    const [textsIndex, setTextsIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const [renderedText, setRenderedText] = useState("");


    useEffect(() => {
        const timeout = setTimeout(() => {
            if (letterIndex === texts[textsIndex].length) {
                setIsDeleting(true);
            }

            if (letterIndex === 0) {
                setIsDeleting(false);
                setTextsIndex((textsIndex + 1) % texts.length);
            }

            const count = isDeleting ? -1 : 1;
            setLetterIndex(letterIndex + count);
        }, 100);

        setRenderedText(texts[textsIndex].substring(0, letterIndex));

        return () => clearTimeout(timeout);
    }, [letterIndex, isDeleting]);


    return (
        <>
            <span className="text-primary">{renderedText}</span>
        </>
    );
}

const HireMe = () => {

    const [isSeeking, setIsSeeking] = useState(false);


    const buttonClass = "mx-1 py-1 px-2 font-bold text-white light:font-white dark:text-black rounded";

    return (
        <>
            <div className="hero min-h-screen bg-base-200 -mb-24 select-none" id="#home">
                <div className="hero-content mx-4 md:mx-20 -mt-12 mb-24 md:gap-20">
                    <div className="flex-1 max-w-2xl">
                        <h1 className="font-bold  relative overflow-hidden animate-shake text-4xl leading-normal">
                            I'm ready to <TypingEffect />
                        </h1>
                        <h2 className="py-6 leading-10">
                            <span>I'm a&nbsp;</span><span className={'bg-primary bg-opacity-100 ' + buttonClass}>self-taught</span> <span className={'bg-purple-500 bg-opacity-100 inline-block' + buttonClass + ' rounded-r-none -mr-2'}>full-stack </span><span className={'bg-purple-500 bg-opacity-100 inline-block' + buttonClass + ' rounded-l-none -ml-1'}>developer</span><span>&nbsp;with a passion for building things. I have experience in&nbsp;</span><span className={'bg-blue-500 bg-opacity-100 ' + buttonClass}>React</span>&nbsp;, <span className={'bg-yellow-500 bg-opacity-100 ' + buttonClass}>java</span><span>&nbsp;and more.&nbsp;</span>
                        
                        {isSeeking ? (
                            <span className='inline-block'><span className={'bg-green-500 animate-bounce ' + buttonClass}>I'm open for new opportunities.</span></span>
                        ) : (
                            null
                        )}
                        </h2>

                        <details className="dropdown">
                            <summary className="m-1 btn btn-primary lowercase"><FontAwesomeIcon icon={faLink} className="text-black mt-1" style={{ width: '1rem' }} />my resume</summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] mt-1 bg-base-300 rounded-box w-52 normal-case border border-white border-opacity-50">
                                <li><a href="https://drive.google.com/file/d/17Ya5AC2nvcvccN-bS2pFsKFIm5v8dcWN/view?usp=drive_link" target="_blank">English</a></li>
                                <li><a href="https://drive.google.com/file/d/1Z_X1KR12GMMlPBqrFZZ8ZFaSsXNgLLDz/view?usp=drive_link" target="_blank">Turkish</a></li>
                            </ul>
                        </details>

                        <Link href="https://github.com/kuraykaraaslan" target="_blank">
                            <p className="btn btn-ghost ml-2 lowercase"><FontAwesomeIcon icon={faGithub} className="text-primary mt-1" style={{ width: '1rem' }} />my github</p>
                        </Link>
                    </div>
                    <div className="flex-none hidden md:block">
                        <img src="/assests/img/kuraykaraaslan_1.jpg" alt="kuray karaaslan" className="rounded-lg shadow-2xl max-w-48 md:max-w-64 " />
                    </div>
                </div>

            </div>
        </>
    )
}

export default HireMe;

