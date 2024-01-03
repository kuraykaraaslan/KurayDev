import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {

    return (
            <>
                <footer className="mx-auto footer items-center p-4 bg-base-200">
                    <div className="items-center grid-flow-col">
                        <p>© 2023 kuray.dev all rights reserved.</p>
                    </div>
                    <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
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