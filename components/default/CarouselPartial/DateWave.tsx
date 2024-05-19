import { useState, useEffect, createRef, Component } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const DateWave = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse mx-4 md:mx-20">
        <div className="max-w-52 rounded-lg hidden lg:block">
          <div className="animate-softBounce mockup-phone border-primary">
            <div className="camera max-w-16 mx-auto transform -translate-y-2"></div>
            <div className="display">
              <img
                src="assests/img/datewave.png"
                className="mockup-browser-img"
                alt="datewave"
              />
            </div>
          </div>
          <div className="animate-softBounceShadow w-32 h-4 rounded-full bg-black mx-auto mt-4"></div>
        </div>
        <div className="flex-1 lg:mr-12">
          <h1 className="text-5xl font-bold  relative overflow-hidden animate-shake pb-4">
            <FontAwesomeIcon
              icon={faFire}
              style={{ width: "3.0rem", height: "3.0rem", color: "#ff0000" }}
            />{" "}
            DateWave
          </h1>
          <p className="py-6">
            DateWave is a dating app that allows you to find your soulmate by
            swiping right or left. It is a React Native project. A Tinder clone.
          </p>
          <Link href="https://github.com/kuraykaraaslan/DateWave">
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

export default DateWave;
