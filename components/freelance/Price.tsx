'use client';
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import SinglePrice from './Partials/SinglePrice'

//i18n
import { withTranslation } from "react-i18next";
import i18n from "@/libs/localize/localize";
import Link from "next/link";


export default function Price() {


    const { t } = i18n;

    const PriceOptions = [
        {
            title: t("FREELANCE.PRICING.HOURLY_RATE.TITLE"),
            subtitle: t("FREELANCE.PRICING.HOURLY_RATE.SUBTITLE"),
            priceTitle: t("FREELANCE.PRICING.HOURLY_RATE.PRICE_TITLE"),
            price: 12,
            priceCurrencyIcon: faDollarSign,
            priceSubtitle: t("FREELANCE.PRICING.HOURLY_RATE.PRICE_SUBTITLE"),
            pricePostfix: t("FREELANCE.PRICING.HOURLY_RATE.PRICE_POSTFIX"),
            buttonText: t("FREELANCE.PRICING.HOURLY_RATE.BUTTON_TEXT"),
            buttonUrl: "#",
            features: [
                t("FREELANCE.PRICING.HOURLY_RATE.INCLUDE_1"),
                t("FREELANCE.PRICING.HOURLY_RATE.INCLUDE_2"),
            ],
        },
        {
            title: t("FREELANCE.PRICING.MONTHLY_RATE.TITLE"),
            subtitle: t("FREELANCE.PRICING.MONTHLY_RATE.SUBTITLE"),
            priceTitle: t("FREELANCE.PRICING.MONTHLY_RATE.PRICE_TITLE"),
            price: 2000,
            priceCurrencyIcon: faDollarSign,
            buttonText: t("FREELANCE.PRICING.MONTHLY_RATE.BUTTON_TEXT"),
            buttonUrl: "#",
            features: [
                t("FREELANCE.PRICING.MONTHLY_RATE.INCLUDE_1"),
                t("FREELANCE.PRICING.MONTHLY_RATE.INCLUDE_2"),
                t("FREELANCE.PRICING.MONTHLY_RATE.INCLUDE_3"),
                t("FREELANCE.PRICING.MONTHLY_RATE.INCLUDE_4"),
            ],
        }
    ]

    const [selectedPrice, setSelectedPrice] = useState(PriceOptions[0])

    return (
        <div className="bg-base-300 py-12 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("FREELANCE.PRICING.TITLE")}</h2>
                    <p className="mt-6 text-lg leading-8 ">
                        {t("FREELANCE.PRICING.DESCRIPTION")}
                    </p>
                    {PriceOptions.map((priceOption, index) => (
                        <button
                            key={priceOption.title}
                            onClick={() => setSelectedPrice(priceOption)}
                            className={`mt-8 px-6 py-3 ${ (index === 0 ) ? "rounded-l-lg" : (index === PriceOptions.length - 1) ? "rounded-r-lg" : "" }
                            font-semibold text-white ${selectedPrice.title === priceOption.title ? "bg-primary" : "bg-base-100"}`}
                        >
                            {priceOption.title}
                        </button>
                    ))}
                </div>
                <SinglePrice {...selectedPrice} t={t} />
            </div>
        </div>
    )
}
