'use client';
import React from 'react';
import SinglePlatform from './Partials/SinglePlatform';


//i18n
import { withTranslation } from "react-i18next";
import i18n from "@/libs/localize/localize";
import Link from "next/link";

const Platforms = (props: any) => {

    const { t } = i18n;


    const  platforms = [
        {
            name: "Fiveer",
            icon: "/assests/img/fiverr.svg",
            url: "https://www.fiverr.com/kuraykaraaslan",
            bgColor: "bg-white",
        },
        {
            name: "Upwork",
            icon: "/assests/img/upwork.svg",
            url: "https://www.upwork.com/freelancers/~01694c65c4ad50b809",
            bgColor: "bg-white",
        },
        {
            name: "bionluk",
            icon: "/assests/img/bionluk.svg",
            url: "https://bionluk.com/uye/kuraykaraaslan",
            bgColor: "bg-white",
            zoom: 2,
        },
        {
            name: "armut",
            icon: "/assests/img/armut.png",
            url: "https://armut.com",
            bgColor: "bg-white",
        }
    ];


    return (
        <section className="py-12 bg-base-100 ">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-20 text-center">
                    <span className="text-center font-medium mb-4 block">{t("FREELANCE.PLATFORMS.TITLE")}</span>
                    <h1 className="text-4xl text-center font-bold">{t("FREELANCE.PLATFORMS.DESCRIPTION")}</h1>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {platforms.map((platform) => (
                        <SinglePlatform key={platform.name} {...platform} />
                    ))}
                    
                </div>
            </div>
        </section>

    );
};

export default Platforms;