'use client';
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import SinglePrice from './Partials/SingkePrice'



export default function Price() {



    const PriceOptions = [
        {
            title: "Hourly rate",
            subtitle: "Pay as you go. Perfect for small tasks and projects.",
            priceTitle: "Fixed price",
            price: 12,
            priceCurrencyIcon: faDollarSign,
            buttonText: "Get access",
            buttonUrl: "#",
            features: [
                "Unlimited revisions",
                "24/7 support",
                "Lifetime ownership",
                "Lifetime updates",
            ],
        },
        {
            title: "Monthly rate",
            subtitle: "Hire me for a month. Perfect for ongoing projects and tasks.",
            priceTitle: "Starting at",
            price: 2000,
            priceCurrencyIcon: faDollarSign,
            buttonText: "Get access",
            buttonUrl: "#",
            features: [
                "Unlimited revisions",
                "24/7 support",
                "Lifetime ownership",
                "Lifetime updates",
            ],
        }
    ]

    const [selectedPrice, setSelectedPrice] = useState(PriceOptions[0])

    return (
        <div className="bg-base-300 py-12 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple no-tricks pricing</h2>
                    <p className="mt-6 text-lg leading-8 ">
                        I keep pricing simple and transparent. No hidden fees. Fair pricing for all types of businesses.
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
                <SinglePrice {...selectedPrice} />
            </div>
        </div>
    )
}
