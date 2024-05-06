
import { useState, useEffect, createRef, Component } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Resume = () => {

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row mx-4 md:mx-20">
                <div className="max-w-sm rounded-lg shadow-2xl hidden lg:block">
                    <div className="mockup-browser border bg-base-300">
                        <div className="mockup-browser-toolbar">
                            <div className="input"><a href="https://resume.kuray.dev" className="btn btn-ghost btn-sm rounded-btn">resume.kuray.dev</a></div>
                        </div>
                        <img src="https://github.com/kuraykaraaslan/Resume/raw/main/static/screenshot.gif" alt="cover" className="mockup-browser-img" />
                    </div>
                </div>
                <div className="flex-1 lg:ml-12">
                    <h1 className="text-5xl font-bold  relative overflow-hidden animate-shake pb-4"><FontAwesomeIcon icon={faUser} style={{ width: '3.0rem', height: '3.0rem', color: 'green' , top: '1rem'}} /> dynamic resume</h1>
                    <p className="py-6">I created this dynamic resume to show my skills and experience in a more fun way. You can also print it as a PDF. or you can create your own interactive resume by forking my repo.</p>
                    <Link href="https://resume.kuray.dev">
                        <p className="btn btn-primary lowercase">view resume</p>
                    </Link>
                    <Link href="https://github.com/kuraykaraaslan/Resume">
                        <p className="btn btn-ghost ml-2 lowercase"><FontAwesomeIcon icon={faGithub} style={{ width: '1.0rem', height: '1.0rem' }} /> fork on github</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default Resume;