import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Footer = (props: any) => {

    return (
        <>
            <footer className="footer grid grid-cols-1 lg:grid-cols-2 gap-4 bg-base-200 p-4 min-w-full">
                <div className="col-span-1 flex flex-row flex-wrap justify-start">
                    <p>© 2023 kuray.dev all rights reserved.</p>
                </div>
                <div className="col-span-1 flex flex-row flex-wrap justify-start">
                    <a className="link link-hover" href="/privacy">Privacy</a>
                    <a className="link link-hover" href="/terms">Terms</a>
                    <a className="link link-hover" href="/projects">Projects</a>
                    <a className="link link-hover" href="/contact">Contact</a>
                </div>
                <div className="col-span-1 flex flex-row flex-wrap justify-end">
                    <a href='https://twitter.com/kuraykaraaslan' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faXTwitter} style={{ width: '24px', height: '24px' }} /></a>
                    <a href='https://github.com/kuraykaraaslan' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faGithub} style={{ width: '24px', height: '24px' }} /></a>
                    <a href='https://www.linkedin.com/in/kuraykaraaslan/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faLinkedin} style={{ width: '24px', height: '24px' }} /></a>
                </div>

            </footer>
        </>
    )
}
    ;

export default Footer;