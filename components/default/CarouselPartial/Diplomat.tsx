import { useState, useEffect, createRef, Component } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChrome,
  faOpera,
  faEdge,
  faFirefox,
  faSafari,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faHorseHead, faSnowman } from "@fortawesome/free-solid-svg-icons";

const Diplomat = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse mx-4 md:mx-20">
        <div className="max-w-sm rounded-lg shadow-2xl hidden lg:block">
          <div className="mockup-browser border bg-base-300">
            <div className="mockup-browser-toolbar">
              <div className="input">Diplomat Backend</div>
            </div>
            <img
              src="/assests/img/diplomat.png"
              alt="cover"
              className="mockup-browser-img"
            />
          </div>
        </div>
        <div className="flex-1 lg:mr-12">
          <h1 className="text-5xl font-bold  relative overflow-hidden animate-shake pb-4">
            <FontAwesomeIcon
              icon={faSnowman}
              style={{ width: "3.0rem", height: "3.0rem", color: "#f59e0b" }}
            />{" "}
            Diplomat Backend
          </h1>
          <p className="py-6">
            Diplomat is a backend server boilerplate that is pre-configured with the necessary tools and libraries to help you kickstart your next project.
          </p>
          <Link href="https://diplomat.kuray.dev/">
            <p className="btn bg-red-500 text-white hover:bg-red-600 ml-2">
              <FontAwesomeIcon
                icon={faGlobe}
                style={{ width: "1.0rem", height: "1.0rem" }}
              />{" "}
              Live Preview
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Diplomat;
