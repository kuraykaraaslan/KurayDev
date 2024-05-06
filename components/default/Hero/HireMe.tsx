
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
import MyImage from './Partials/MyImage';

const Background = dynamic(() => import('@/components/default/Hero/Partials/Background'), { ssr: false });
const TypingEffect = dynamic(() => import('@/components/default/Hero/Partials/TypingEffect'), { ssr: false });

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

                    <MyImage />



                </div>

            </div>
        </>
    )
}

export default withTranslation()(HireMe);
