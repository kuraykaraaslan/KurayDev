import React from "react";
import "../globals.css";

// Components
import Navbar from "@/components/default/Navbar";
import Footer from "@/components/default/Footer";
import ScrollToTop from "@/components/default/ScrollToTop";

import { Metadata } from "next";


export const metadata: Metadata = {
    title: "freelance - kuray.dev",
    description: "Work with me on your next project",
};


const layout = ({ children }: { children: React.ReactNode }) => {


    return (
        <>
            <Navbar />
            <div className="min-h-screen">{children}</div>
            <ScrollToTop />
            <Footer />
        </>
    );
};

export default layout;
