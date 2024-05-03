
'use client';
import React, { useState, useEffect, createRef, Component, useRef } from 'react'
import ReactDOM from 'react-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faArrowRight, faLink } from '@fortawesome/free-solid-svg-icons'

import Link from 'next/link';

import "@fontsource/caveat-brush";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { inSphere } from "maath/random";

function Background() {
    return (
        <Canvas camera={{ position: [0, 0, 1] }} style={{ position: 'absolute', top: 0, left: 0, zIndex: 10, width: '100%', height: '100%' }}>
            <Stars />
        </Canvas>
    )
}

function Stars(props = {}) {
    const ref = useRef() as any

    const [dotColor, setDotColor] = useState('#ffffff');

    const [sphere] = useState(() => new Float32Array(inSphere(new Float32Array(5000), { radius: 1.5 })));



    useFrame((state, delta) => {

        if (!ref.current || !ref.current?.rotation) {
            return;
        }
        ref.current.rotation.x -= delta / 10
        ref.current.rotation.y -= delta / 15

        ref.current.rotation.z -= delta / 20

        //change color of dots
        let html_theme = document.documentElement.getAttribute('data-theme');

        if (html_theme === 'dark') {
            setDotColor('#ffffff');
        } else {
            setDotColor('#000000');
        }


    })


    useEffect(() => {
        let html_theme = document.documentElement.getAttribute('data-theme');

        if (html_theme === 'dark') {
            setDotColor('#ffffff');
        } else {
            setDotColor('#000000');
        }
    }
        , []);

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial transparent size={0.005} sizeAttenuation={true} depthWrite={false} color={dotColor} />
            </Points>
        </group>
    )
}

const TypingEffect = () => {
    const texts = [
        "learn new things",
        "make a difference",
        "build the future",
        "create awesome things",
        "work together",
        "solve problems",
        "push the limits",
        "be creative",
        "embrace challenges",
        "strive for excellence",
        "never give up",
        "dream big",
        "inspire others",
        "stay focused",
        "take risks",
        "keep improving",
        "aim for success",
        "stay determined",
        "think outside the box",
        "be a team player",
        "pursue my passion",
        "lead with integrity",
        "make a positive impact",
        "stay humble",
        "be a lifelong learner",
        "stay positive",
    ];

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
                if (isDeleting) {
                    setTextsIndex((textsIndex + 1) % texts.length);
                }
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
            <Background />
            <div className="hero min-h-screen -mb-24 select-none" id="#home" style={{ zIndex: 20, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
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
                    <div className="relative flex-none hidden md:block group">
                        <div className="shadow-2xl max-w-48 md:max-w-64 bg-[#F5F5DC] transition duration-500 transform group-hover:rotate-y-180">
                            <img src="/assests/img/kuraykaraaslan_1.jpg" alt="kuray karaaslan" className="transition duration-500 transform group-hover:opacity-0" />
                        </div>
                        <div className="text-black absolute top-0 left-0 w-full h-full bg-opacity-100 rounded-lg flex justify-center items-center opacity-0 transition duration-500 group-hover:opacity-100 flex-col">
                            <div className="absolute bottom-10 right-3 items-center opacity-0 group-hover:opacity-100 transition duration-500 rotate-y-180 group-hover:rotate-y-0 align-middle">
                                <p className="font-caveat-300 -rotate-45">izmir karaca cinema</p>
                                <p className="font-caveat-300 -rotate-45">10th december 2023</p>
                                {/*<p className="font-caveat-700 ml-10 -rotate-45">taken by my &#10084;</p>*/}
                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </>
    )
}

export default HireMe;
