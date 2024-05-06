'use client';
import React, { useEffect, Suspense } from "react";
import './globals.css'

// Components
import Navbar from '@/components/default/Navbar'
import Footer from '@/components/default/Footer'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

//Suspense
import Loading from "@/components/default/Loading";
import dynamic from 'next/dynamic'

//Cookie Consent
import { CookiesProvider } from 'react-cookie';
const CookieConsent = dynamic(() => import('@/components/default/CookieConsent'), { ssr: false });

//i18n
import { withTranslation } from 'react-i18next';

const layout = ({ children }: { children: React.ReactNode }) => {

  useEffect(() => {
    const scrollToTopBtn = document.getElementById("scrollToTop") as HTMLElement;
    const main = document.getElementById("main");

    //make the button appear slowly  when the user scrolls down 20px from the top to 500ms
    window.onscroll = () => {
      var aligned = window.scrollY * 0.1 - 80;
      if (aligned > 20) {
        aligned = 20;
      }
      scrollToTopBtn.style.right = aligned + "px";
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "flex";
      } else {
        scrollToTopBtn.style.display = "none";
      }

      //if it is end of the page, for footer raise it up to 100px
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        const diff = window.innerHeight + window.scrollY - document.body.offsetHeight + 50;
        scrollToTopBtn.style.bottom = diff + 20 + "px";
      } else {
        scrollToTopBtn.style.bottom = "20px";
      }
    }
  }
  )


  return (
    <Suspense fallback={<Loading />}>
      <CookiesProvider defaultSetOptions={{ path: '/', maxAge: 31536000 }} >
        <Navbar />
        <main className="mx-auto min-h-screen pt-24 bg-base-300" id="main">{children}</main>
        <Footer />

        <div className="fixed btn btn btn-primary rounded-full transition duration-500 ease-in-out" style={{ zIndex: 100, right: "-80px", bottom: "20px" }} id="scrollToTop" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <FontAwesomeIcon icon={faArrowUp} className="text-2xl text-white" style={{ width: '20px', height: '20px' }} />
        </div>
        <CookieConsent />
      </CookiesProvider>
    </Suspense>
  )
}


export default layout;
