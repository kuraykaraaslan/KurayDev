
'use client';
import React, { useState, useEffect, createRef, Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import Link from 'next/link';

import "@fontsource/caveat-brush";

const TypingEffect = () => {
    const texts = ["hire", "making a difference", "building the future", "creating awesome things"];

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

    
    const buttonClass = "mx-1 py-1 px-2 font-bold text-white light:font-white dark:text-black rounded";

    return (
        <>
            <div className="hero min-h-screen bg-base-200 -mt-24 mb-24 select-none" id="#home">
                <div className="hero-content mx-4 md:mx-20 pt-12">
                    <div className="flex-1">
                        <h1 className="font-bold  relative overflow-hidden animate-shake text-4xl leading-normal">
                            I am available for <TypingEffect />
                        </h1>
                        <h2 className="py-6 leading-10">
                            <span>I'm a&nbsp;</span><span className={'bg-primary bg-opacity-100 ' + buttonClass}>self-taught</span> <span className={'bg-purple-500 bg-opacity-100 inline-block' + buttonClass + ' rounded-r-none -mr-2'}>full-stack </span><span className={'bg-purple-500 bg-opacity-100 inline-block' + buttonClass + ' rounded-l-none -ml-1'}>developer</span><span>&nbsp;with a passion for building things. I have experience in&nbsp;</span><span className={'bg-blue-500 bg-opacity-100 ' + buttonClass}>React</span>&nbsp;, <span className={'bg-yellow-500 bg-opacity-100 ' + buttonClass}>java</span><span>&nbsp;and more.&nbsp;</span>
                            <span className='inline-block'><span className={'bg-green-500 bg-opacity-100 animate-pulse ' + buttonClass}>I'm currently looking for a job.</span></span>
                        </h2>
                        <Link href="https://resume.kuray.dev" target="_blank">
                            <p className="btn btn-primary lowercase">my resume</p>
                        </Link>
                        <Link href="/projects" locale="en">
                            <p className="btn btn-ghost ml-2 lowercase">portfolio</p>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HireMe;

