import React from 'react';
import { IconDefinition, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface PriceOption {
    title: string
    subtitle?: string
    priceTitle?: string
    priceSubtitle?: string
    price: number
    priceCurrencyIcon?: IconDefinition
    buttonText?: string
    buttonUrl?: string
    features: string[]
}

export default function SinglePrice(props: PriceOption) {

    return (
                <div className="mx-auto bg-base-100 mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight">{props.title}</h3>
                        <p className="mt-6 text-base leading-7 ">
                            {props.subtitle}
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6">What’s included</h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 sm:grid-cols-2 sm:gap-6"
                        >
                            {props.features.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <FontAwesomeIcon icon={faCheck} className="text-primary w-5 h-5" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl bg-base-300 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-cbase font-semibold">{props.priceTitle}</p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span className="text-5xl font-bold tracking-tight "><FontAwesomeIcon icon={props.priceCurrencyIcon as IconDefinition} />{props.price}</span>
                                </p>
                                <Link href={props.buttonUrl as string}
                                    className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    {props.buttonText}
                                </Link>
                                <p className="mt-6 text-xs leading-5 ">
                                    Invoices and receipts available for easy company reimbursement
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
    )
}
