'use client';
import React from 'react';
import SinglePlatform from './Partials/SinglePlatform';


//i18n
import { withTranslation } from "react-i18next";
import i18n from "@/libs/localize/localize";
import Link from "next/link";

const PayWith = (props: any) => {

    const { t } = i18n;


    const  platforms = [
        {
            name: "Payoneer",
            icon: "/assests/img/payoneer.svg",
            bgColor: "bg-white",
            zoom: 2
        },
        {
            name: "Credit Card",
            icon: "/assests/img/iyzico.svg",
            bgColor: "bg-white",
        },
        {
            name: "Bitcoin",
            icon: "/assests/img/bitcoin.svg",
            bgColor: "bg-white",
            zoom: 1
        },
        {
            name: "Wire",
            icon: "/assests/img/transfer.svg",
            bgColor: "bg-white",
            zoom: 1
        },
    ];


    return (
        <section className="py-12 bg-base-100 ">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-20 text-center">
                    <span className="text-center font-medium mb-4 block">{t("FREELANCE.PAYMENT.TITLE")}</span>
                    <h1 className="text-4xl text-center font-bold">{t("FREELANCE.PAYMENT.DESCRIPTION")}</h1>
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

export default PayWith;