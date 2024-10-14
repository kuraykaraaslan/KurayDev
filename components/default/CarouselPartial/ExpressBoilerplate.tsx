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
import { faBolt, faCoffee, faGlobe, faHorseHead, faStar } from "@fortawesome/free-solid-svg-icons";

const ExpressBoilerplate = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse mx-4 md:mx-20">
        <div className="max-w-sm rounded-lg shadow-2xl hidden lg:block">
          <div className="mockup-browser border bg-base-300">
            <div className="mockup-browser-toolbar">
              <div className="input">Express Boilerplate</div>
            </div>
            <img
              src="/assests/img/express-boilerplate.png"
              alt="cover"
              className="mockup-browser-img"
            />
          </div>
        </div>
        <div className="flex-1 lg:mr-12">
          <h1 className="text-5xl font-bold  relative overflow-hidden animate-shake pb-4">
            <FontAwesomeIcon
              icon={faBolt}
              style={{ width: "3.0rem", height: "3.0rem", color: "#f59e0b" }}
            />{" "}
            Express Boilerplate
          </h1>
          <p className="py-6">
            Express Boilerplate is a Node.js web application server boilerplate
            that is pre-configured with the necessary tools and libraries to
            help you kickstart your next project.
          </p>
          <Link href="https://www.fiverr.com/kuraykaraaslan">
            <p className="btn bg-green-500 text-white hover:bg-green-600">
              <FontAwesomeIcon
                icon={faCoffee}
                style={{ width: "1.0rem", height: "1.0rem" }}
              />{" "}
              Buy Me a Coffee
            </p>
          </Link>
          <Link href="https://express-boilerplate.kuray.dev/">
            <p className="btn bg-red-500 text-white hover:bg-red-600 ml-2">
              <FontAwesomeIcon
                icon={faBolt}
                style={{ width: "1.0rem", height: "1.0rem" }}
              />{" "}
              API
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExpressBoilerplate;
