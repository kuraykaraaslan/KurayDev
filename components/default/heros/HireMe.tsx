
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

//dynamic import
import dynamic from 'next/dynamic';

const Background = dynamic(() => import('@/components/default/heros/Background'), { ssr: false });
const TypingEffect = dynamic(() => import('@/components/default/heros/TypingEffect'), { ssr: false });

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
