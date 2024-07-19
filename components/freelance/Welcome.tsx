'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faCircleNodes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import WorldMap from "react-svg-worldmap";
import { t } from 'i18next';

const WelcomeVideo = dynamic(
  () => import("@/components/freelance/Partials/WelcomeVideo"),
  { ssr: false },
);


const Welcome = () => {

  const [dotColor, setDotColor] = useState("#ffffff");


  useEffect(() => {

    //detect theme change
    let html_theme = document.documentElement.getAttribute("data-theme");

    if (html_theme === "dark") {
      setDotColor("#ffffff");
    } else if (html_theme === "light") {
      setDotColor("#000000");
    } else {
      setDotColor("#ffffff");
    }
  }, []);

  const mapProps = {
    data: [],
    size: 300,
    backgroundColor: "transparent",
    strokeColor: "#fff",
    color: "white",
    styleFunction: (context: any) => {
      return {
        fill: "bg-primary",
        stroke: context.color,
        strokeWidth: 0.5
      };
    },
    tooltipTextFunction: (context: any) => {
      return `${context.countryName}: XXX ${context.countryValue}`;
    },
  };


  return (
    <>
      <div className="relative -mt-28">
        <video muted loop autoPlay className="absolute inset-0 z-0 object-cover w-full h-full opacity-50">
          <source src="/assests/videos/freelance-welcome.mp4" type="video/mp4" />
        </video>
        <div
          className="hero min-h-screen select-none"
          id="#home"
          style={{
            zIndex: 11,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div className="hero-content">
            <div className="flex-1 max-w-2xl">
              <div className="max-w-lg">
                <h1 className="text-5xl font-bold">Kusursuz bir işbirliği</h1>
                <p className="py-6 text-white">
                  Yazılım firması seçme konusundaki endişelerinizi anlıyoruz. Bu yüzden, işbirliğimizin her aşamasında size destek oluyoruz.
                </p>
                {/* @ts-ignore */}
                <WelcomeVideo />
                <Link className="btn btn-primary" href="/freelance#services">
                  <FontAwesomeIcon icon={faCircleNodes} className="mr-2 text-xl w-6 h-6" />
                  Hizmetlerim
                </Link>
              </div>
            </div>
            <div className="hidden lg:block max-w-md p-10 bg-primary">
              <WorldMap {...mapProps} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;