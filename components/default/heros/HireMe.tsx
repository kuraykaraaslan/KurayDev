
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

//i18n
import { withTranslation } from 'react-i18next';
import i18n from '@/libs/localize/localize';


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

    const {t} = i18n;

    const texts = [
        t('HIRE_ME.LEARN_NEW_THINGS'),
        t('HIRE_ME.MAKE_A_DIFFERENCE'),
        t('HIRE_ME.BUILD_THE_FUTURE'),
        t('HIRE_ME.CREATE_AWESOME_THINGS'),
        t('HIRE_ME.WORK_TOGETHER'),
        t('HIRE_ME.SOLVE_PROBLEMS'),
        t('HIRE_ME.PUSH_LIMITS'),
        t('HIRE_ME.PURSUE_EXCELLENCE'),
        t('HIRE_ME.THINK_OUTSIDE_THE_BOX'),
        t('HIRE_ME.STAY_HUMBLE'),
        t('HIRE_ME.EMBRACE_CHANGE'),
        t('HIRE_ME.BE_A_TEAM_PLAYER'),
        t('HIRE_ME.STAY_FOCUSED'),
        t('HIRE_ME.TAKE_RISKS'),
        t('HIRE_ME.KEEP_IMPROVING'),
        t('HIRE_ME.AIM_HIGH'),
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

            if (letterIndex < 0) {
                setLetterIndex(0);
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

    const { t } = i18n;

    const [isSeeking, setIsSeeking] = useState(false);



    const buttonClass = "mx-1 py-1 px-2 font-bold text-white light:font-white dark:text-black rounded";

    return (
        <>
            <Background />
            <div className="hero min-h-screen -mb-24 select-none" id="#home" style={{ zIndex: 20, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                <div className="hero-content mx-4 md:mx-20 -mt-12 mb-24 md:gap-20">
                    <div className="flex-1 max-w-2xl">
                        <h1 className="font-bold relative overflow-hidden animate-shake text-4xl leading-normal">
                            <span>{t('HIRE_ME.INTRO')} <TypingEffect /> {t('HIRE_ME.OUTRO')}</span>
                        </h1>
                        <h2 className="py-6 leading-10">
                            <span>{t('HIRE_ME.DESCRIPTION')}</span>

                            {isSeeking ? (
                                <span className='inline-block'><span className={'bg-green-500 animate-bounce ' + buttonClass}> {t('HIRE_ME.OPEN_FOR_NEW_OPPORTUNITIES')}</span></span>
                            ) : (
                                null
                            )}
                        </h2>

                        <details className="dropdown">
                            <summary className="m-1 btn btn-primary lowercase"><FontAwesomeIcon icon={faLink} className="text-black mt-1" style={{ width: '1rem' }} />{t('HIRE_ME.MY_RESUME')}</summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] mt-1 bg-base-300 rounded-box w-52 normal-case border border-white border-opacity-50">
                                <li><a href="https://drive.google.com/file/d/17Ya5AC2nvcvccN-bS2pFsKFIm5v8dcWN/view?usp=drive_link" target="_blank">{t('LANGUAGES.EN')}</a></li>
                                <li><a href="https://drive.google.com/file/d/1Z_X1KR12GMMlPBqrFZZ8ZFaSsXNgLLDz/view?usp=drive_link" target="_blank">{t('LANGUAGES.TR')}</a></li>
                            </ul>
                        </details>

                        <Link href="https://github.com/kuraykaraaslan" target="_blank">
                            <p className="btn btn-ghost ml-2 lowercase"><FontAwesomeIcon icon={faGithub} className="text-primary mt-1" style={{ width: '1rem' }} />{t('HIRE_ME.MY_GITHUB')}</p>
                        </Link>
                    </div>
                    <div className="relative flex-none hidden sm:block group">
                        <div className="shadow-2xl max-w-24 sm:max-w-48 md:max-w-64 bg-[#F5F5DC] transition duration-500 transform group-hover:rotate-y-180">
                            <img src="/assests/img/kuraykaraaslan_1.jpg" alt="kuray karaaslan" className="transition duration-500 transform group-hover:opacity-0" />
                        </div>
                        <div className="text-black absolute top-0 left-0 w-full h-full bg-opacity-100 rounded-lg flex justify-center items-center opacity-0 transition duration-500 group-hover:opacity-100 flex-col">
                            <div className="absolute bottom-10 right-3 items-center opacity-0 group-hover:opacity-100 transition duration-500 rotate-y-180 group-hover:rotate-y-0 align-middle text-center">
                                <p className="font-caveat-300 -rotate-45">{t('HIRE_ME.IZMIR_KARACA_CINEMA')}</p>
                                <p className="font-caveat-300 -rotate-45">{t('HIRE_ME.10TH_DECEMBER_2023')}</p>
                                {/*<p className="font-caveat-700 ml-10 -rotate-45">taken by my &#10084;</p>*/}
                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </>
    )
}

export default withTranslation()(HireMe);
