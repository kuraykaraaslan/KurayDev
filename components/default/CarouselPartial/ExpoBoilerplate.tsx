import { useState, useEffect, createRef, Component } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faFire,
  faMobile,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";

const ExpoBoilerplate = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse mx-4 md:mx-20">
        <div className="max-w-52 rounded-lg hidden lg:block">
          <div className="animate-softBounce mockup-phone border-primary">
            <div className="camera max-w-16 mx-auto transform -translate-y-2"></div>
            <div className="display">
              <img
                src="https://github.com/kuraykaraaslan/expo-react-redux-boilerplate/raw/main/static/screenshots/login.png"
                className="mockup-browser-img"
                alt="expo-react-redux-boilerplate"
              />
            </div>
          </div>
          <div className="animate-softBounceShadow w-32 h-4 rounded-full bg-black mx-auto mt-4"></div>
        </div>
        <div className="flex-1 lg:mr-12">
          <h1 className="text-5xl font-bold  relative overflow-hidden animate-shake pb-4">
            <FontAwesomeIcon
              icon={faMobileScreenButton}
              style={{ width: "3.0rem", height: "3.0rem", color: "#ff0000" }}
            />{" "}
            Expo React Redux Boilerplate
          </h1>
          <p className="py-6">
            This is a boilerplate project for React Native Expo with Redux,
            Redux Thunk, React Navigation, and Axios.
          </p>
          <Link href="https://github.com/kuraykaraaslan/expo-react-redux-boilerplate">
            <p className="btn bg-black text-white hover:bg-gray-600">
              <FontAwesomeIcon
                icon={faGithub}
                style={{ width: "1.0rem", height: "1.0rem" }}
              />{" "}
              Github
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExpoBoilerplate;
