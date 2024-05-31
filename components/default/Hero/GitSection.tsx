"use client";
import React, {
    useState,
    useEffect,
    createRef,
    Component,
    useRef,
} from "react";
import ReactDOM from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight, faLink } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

import "@fontsource/caveat-brush";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">
                            {t("github.title")}
                        </h1>
                        <p className="py-6">
                            {t("github.description")}
                        </p>
                        <GitContributions />
                    </div>
                </div>
            </div>
        </>
    );
};

export default withTranslation()(GitSection);
