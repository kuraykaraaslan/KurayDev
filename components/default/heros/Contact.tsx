'use client';

import { useState, useEffect, createRef, Component } from 'react'

import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('../ContactForm'), { ssr: false });

const Contact = () => {


    return (
        <section className="md:bg-base-100 bg-base-200 px-4 py-8  md:px-20" id="contact">
            <div className="container px-2 py-8 mx-auto mx-4 md:px-24 md:bg-base-200 mt-0 md:-mt-24 rounded-box shadow-2xl border-full border-2 border-black contactHero">
                <h1 className="text-4xl font-bold text-center mb-3">good things happen when we talk</h1>
                <ContactForm className="space-y-8 mb-0" />
            </div>
        </section>

    )
}


export default Contact;