
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

    return (
        <>
            <div className="hero min-h-screen bg-base-300">
                <div className="hero-content mx-4 md:mx-20">
                    <div className="flex-1">
                        <h1 className="font-bold  relative overflow-hidden animate-shake text-4xl leading-normal">
                            I am available for <TypingEffect />
                        </h1>
                        <h2 className="py-6 leading-normal" >
                        I'm a <span className='bg-primary bg-opacity-50 px-1'>self-taught</span> <span className='bg-purple-500 bg-opacity-50 px-1'>full-stack developer</span> with a passion for building things. I have experience in <span className='bg-blue-500 bg-opacity-50 px-1'>React</span>, <span className='bg-yellow-500 bg-opacity-50 px-1'>java</span> and more. 
                        <span className='bg-green-500 bg-opacity-50 px-1'>I'm currently looking for a job</span>.
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

