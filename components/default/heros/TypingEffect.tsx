'use client';
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import i18n from '@/libs/localize/localize';

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

            if (letterIndex > texts[textsIndex].length) {
                setLetterIndex(texts[textsIndex].length);
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


export default TypingEffect;