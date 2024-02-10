
import { useState, useEffect, createRef, Component } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChrome, faOpera, faEdge, faFirefox, faSafari, faInstagram } from '@fortawesome/free-brands-svg-icons'

const InstaFollowStudio = () => {

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse mx-4 md:mx-20">
                <div className="max-w-sm rounded-lg shadow-2xl hidden lg:block">
                    <div className="mockup-browser border bg-base-300">
                        <div className="mockup-browser-toolbar">
                            <div className="input">Insta Follow Studio</div>
                        </div>
                        <img src="/assests/img/insta-follow-studio.png" alt="cover" className="mockup-browser-img" />
                    </div>
                </div>
                <div className="flex-1 lg:mr-12">
                    <h1 className="text-5xl font-bold  relative overflow-hidden animate-shake pb-4"><FontAwesomeIcon icon={faInstagram} style={{ width: '3.0rem', height: '3.0rem', color: '#ff0000' }} /> Insta Follow Studio</h1>
                    <p className="py-6">Chromium Extension: Unlock the power of your Instagram journey with Follow Studio – your ultimate follow/unfollow tracker!</p>
                    <Link href="https://chromewebstore.google.com/detail/instagram-follow-studio/hokigbagphgdofjloccgkjoejpokjkcd">
                        <p className="btn bg-green-500 text-white hover:bg-green-600"><FontAwesomeIcon icon={faChrome} style={{ width: '1.0rem', height: '1.0rem' }} /> Chrome</p>
                    </Link>
                    <Link href="https://addons.opera.com/">
                        <p className="btn bg-red-500 text-white hover:bg-red-600 ml-2"><FontAwesomeIcon icon={faOpera} style={{ width: '1.0rem', height: '1.0rem' }} /> Opera</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default InstaFollowStudio;