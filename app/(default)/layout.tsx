'use client';
import React, { useEffect } from "react";
import './globals.css'

// Components
import Navbar from '@/components/default/Navbar'
import Footer from '@/components/default/FooterNew'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };

    const scrollToTopBtn = document.getElementById("scrollToTop");
    const main = document.getElementById("main");

    const handleScroll = () => {
      if (window.scrollY > 100) {
        scrollToTopBtn?.classList.add("active");
        scrollToTopBtn?.classList.remove("hidden");
      } else {
        scrollToTopBtn?.classList.remove("active");
        scrollToTopBtn?.classList.add("hidden");
      }

      // Add null check for main?.offsetHeight
      if (window.scrollY + window.innerHeight + 200 >= main?.offsetHeight || 0) {
        scrollToTopBtn?.classList.add("bottom-16");
        scrollToTopBtn?.classList.remove("bottom-8");
      } else {
        scrollToTopBtn?.classList.remove("bottom-16");
        scrollToTopBtn?.classList.add("bottom-8");
      }
    };

    scrollToTopBtn?.addEventListener("click", scrollToTop);
    window.addEventListener("scroll", handleScroll);

    return () => {
      scrollToTopBtn?.removeEventListener("click", scrollToTop);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  return (
    <>
      <Navbar />
      <main className="mx-auto min-h-screen pt-24 bg-base-300" id="main">{children}</main>
      <Footer />

      <div className="fixed btn bottom-8 right-8 btn btn-primary rounded-full hidden" style={{ zIndex: 100 }} id="scrollToTop">
        <FontAwesomeIcon icon={faArrowUp} className="text-2xl text-white" style={{ width: '20px', height: '20px' }} />
      </div>
    </>
  )
}
