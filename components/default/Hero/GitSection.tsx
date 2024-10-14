"use client";
import React, {
    useState,
    useEffect,
    createRef,
    Component,
    useRef,
} from "react";
import ReactDOM from "react-dom";

import { faArrowRight, faLink } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { inSphere } from "maath/random";

//i18n
import { withTranslation } from "react-i18next";
import i18n from "@/libs/localize/localize";


import GitContributions from "@/components/default/Hero/Partials/GitContributions";


const GitSection = () => {
    const { t } = i18n;

    return (
        <>
            <div className="hero min-h-screen bg-base-200 hidden lg:flex items-center justify-center">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-5xl font-bold">
                            {t("GITHUB.TITLE")}
                        </h1>
                        <p className="py-6">
                            {t("GITHUB.DESCRIPTION")}
                        </p>
                        <GitContributions />
                        <div className="flex justify-center py-6">
                            <Link href="https://github.com/kuraykaraaslan">
                                <button className="btn btn-primary">
                                   <FontAwesomeIcon icon={faGithub} className="mr-2 text-xl" height="20" width="20" />
                                    {t("GITHUB.BUTTON")}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default withTranslation()(GitSection);
