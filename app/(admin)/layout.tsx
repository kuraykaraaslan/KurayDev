"use client";
import React, { useEffect, Suspense } from "react";
import "./globals.css";

// Components
import Navbar from "@/components/admin/Navbar";
import Footer from "@/components/admin/Footer";


//Suspense
import Loading from "@/components/default/Loading";
import dynamic from "next/dynamic";

//Cookie Consent
import { CookiesProvider } from "react-cookie";

//i18n
import { withTranslation } from "react-i18next";

// Next Auth
import { SessionProvider } from "next-auth/react"


const layout = ({ children }: { children: React.ReactNode }) => {


  return (
    <Suspense fallback={<Loading />}>
      <SessionProvider>
        <CookiesProvider defaultSetOptions={{ path: "/", maxAge: 31536000 }}>
          <Navbar />
          <div className="max-w-full md:max-w-7xl mx-auto px-4 md:px-8 min-h-screen">
            {children}</div>
          <Footer />
        </CookiesProvider>
      </SessionProvider>
    </Suspense>
  );
};

export default layout;
