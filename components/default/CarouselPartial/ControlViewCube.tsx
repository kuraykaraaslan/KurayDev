import { useState, useEffect, createRef, Component } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faNpm } from "@fortawesome/free-brands-svg-icons";
import { faCube } from "@fortawesome/free-solid-svg-icons";

const ControlViewCube = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row mx-4 md:mx-20">
        <div className="max-w-sm rounded-lg shadow-2xl hidden lg:block">
          <div className="mockup-browser border bg-base-300">
            <div className="mockup-browser-toolbar">
              <div className="input">3D View Cube</div>
            </div>
            <img
              src="https://raw.githubusercontent.com/kuraykaraaslan/control-view-cube/main/static/donut.gif"
              alt="cover"
              className="mockup-browser-img"
            />
          </div>
        </div>
        <div className="flex-1 lg:ml-12">
          <h1 className="text-5xl font-bold  relative overflow-hidden animate-shake pb-4 gap-4">
            <FontAwesomeIcon
              icon={faCube}
              style={{
                width: "3.0rem",
                height: "3.0rem",
                color: "purple",
                top: "1rem",
              }}
            />{" "}
            3D View Cube
          </h1>
          <p className="py-6">
            Modern 3d view cube for web applications. You can use it for 3d
            modeling applications, 3d games, 3d maps, and more. It is easy to
            use and customize.
          </p>
          <Link href="https://www.npmjs.com/package/control-view-cube">
            <p className="btn btn-primary">
              <FontAwesomeIcon
                icon={faNpm}
                style={{ width: "1.0rem", height: "1.0rem" }}
              />{" "}
              npm package
            </p>
          </Link>
          <Link href="https://github.com/kuraykaraaslan/Resume">
            <p className="btn btn-ghost ml-2">
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

export default ControlViewCube;
