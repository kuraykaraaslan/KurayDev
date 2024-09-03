"use client";
import React from "react";
import {
  faReact,
  faBootstrap,
  faHtml5,
  faPython,
  faPhp,
  faJava,
  faJs,
  faAmazon,
  faAndroid,
  faChrome,
  faOpera,
  faApple,
  faGithub,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAnchor,
  faAnglesDown,
  faAnglesUp,
  faFire,
  faGear,
  faGlobe,
  faMobileScreenButton,
  faTv,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//i18n
import { withTranslation } from "react-i18next";
import i18n from "@/libs/localize/localize";
import SingleProject, { Project } from "./Partials/SingleProject";
import Link from "next/link";

const ProjectsHero = () => {
  const { t } = i18n;

  const [expanded, setExpanded] = React.useState(false);
  const container = React.useRef(null);

  const handleClick = () => {
    // get container current height
    const panel = container?.current as unknown as HTMLElement;

    if (panel === null) return;

    //make height is auto
    panel.style.height = expanded ? "560px" : `${panel.scrollHeight + 80}px`;

    //toggle the state
    setExpanded(!expanded);
  };

  const otherProjectsImageHTML =
    `<div class="w-full h-48 bg-base-100 rounded-t-lg flex items-center justify-center select-none">
  <a href="https://github.com/kuraykaraaslan" class="flex items-center gap-2 p-4">
    <img src="/assests/img/github.svg" alt="GitHub" class="w-12 h-12 object-cover object-center rounded-lg" />
    <span class="text-xl font-bold">/kuraykaraaslan</span>
  </a>

  </div>`;

  const projects: Project[] = [
    {
      id: "1",
      image: "/assests/img/projects/pegasus.png",
      title: "Pegasus UI Kit",
      description:
        "Pegasus is a React UI Kit that is built using Tailwind CSS. It offers a responsive and user-friendly interface for an optimal experience.",
      urls: [
        { type: "GitHub", url: "https://github.com/kuraykaraaslan/pegasus" },
        { type: "Demo", url: "https://pegasus.kuray.dev" },
      ],
      tags: [
        { name: "React", color: "bg-blue-300", icon: faReact },
        { name: "Tailwind", color: "bg-blue-500", icon: faWind },
      ],
    },
    {
      id: "2",
      image: "https://github.com/kuraykaraaslan/expo-react-redux-boilerplate/raw/main/static/logo.png",
      title: "Expo React Redux Boilerplate",
      description:
        "It provides a solid foundation for creating cross-platform mobile apps with a predictable state container for managing application data flow.",
      urls: [
        {
          type: "GitHub",
          url: "https://github.com/kuraykaraaslan/expo-react-redux-boilerplate",
        },
      ],
      tags: [{ name: "React Native", color: "bg-blue-300", icon: faReact }],
    },
    {
      id: "3",
      image: "https://github.com/kuraykaraaslan/Sozlesmeci/raw/main/static/main.gif",
      title: "Sözleşmeci",
      description:
        "Sözleşmeci is a contract generator that allows users to create, customize, and print professional contracts with ease. Built using React, it offers a responsive and user-friendly interface for an optimal experience.",
      urls: [
        { type: "GitHub", url: "https://github.com/kuraykaraaslan/Sozlesmeci" },
      ],
      tags: [
        { name: "React", color: "bg-blue-300", icon: faReact },
        { name: "Firebase", color: "bg-yellow-300", icon: faFire },
      ],
    },
    {
      id: "4",
      image: "https://github.com/kuraykaraaslan/SecondLanguage/raw/main/static/main.gif",
      title: "Second Language",
      description:
        "a Language learning app that allows users to learn a new language by listening to the pronunciation of words and phrases.",
      urls: [
        { type: "GitHub", url: "https://github.com/kuraykaraaslan/SecondLanguage" },
      ],
      tags: [
        { name: "React", color: "bg-blue-300", icon: faReact },
      ],
    },
    {
      id: "5",
      image: "https://github.com/kuraykaraaslan/InstaFollowStudio/raw/main/static/logo.png",
      title: "Instagram Follow Studio",
      description:
        "Instagram Follow Studio is a Chrome extension that allows you to follow and unfollow people on Instagram automatically. Listing them in a table, the extension allows you to follow and unfollow people in a controlled manner.",
      urls: [
        {
          type: "GitHub",
          url: "https://github.com/kuraykaraaslan/InstaFollowStudio",
        },
        {
          type: "Other",
          title: "Chrome Web Store",
          url: "https://chromewebstore.google.com/detail/instagram-follow-studio/hokigbagphgdofjloccgkjoejpokjkcd",
        },
      ],
      tags: [
        { name: "React", color: "bg-blue-300", icon: faReact },
        { name: "Chrome", color: "bg-purple-300", icon: faChrome },
        { name: "Opera", color: "bg-red-300", icon: faOpera },
      ],
    },
    {
      id: "6",
      image: "https://github.com/kuraykaraaslan/Resume/raw/main/static/screenshot.gif",
      title: "Resume",
      description:
        "This open source application allows users to create, customize, and print professional resumes and CVs with ease. Built using React, it offers a responsive and user-friendly interface for an optimal experience.",
      urls: [
        { type: "GitHub", url: "https://github.com/kuraykaraaslan/Resume" },
        { type: "Demo", title: "Resume", url: "https://resume.kuray.dev" },
      ],
      tags: [{ name: "React", color: "bg-blue-300", icon: faReact }],
    },
    {
      id: "7",
      image: "/assests/img/projects/tnyist.png",
      title: "tny.ist",
      description:
        "tny.ist is a free URL shortening service that provides companies and individuals with unique, customizable and secure links as well as analytics for the shortened links.",
      urls: [{ type: "Other", title: "coming soon", url: "https://tny.ist" }],
      tags: [
        { name: "React", color: "bg-blue-300", icon: faReact },
        { name: "Firebase", color: "bg-yellow-300", icon: faFire },
        { name: "Android", color: "bg-green-300", icon: faAndroid },
      ],
    },
    {
      id: "8",
      image: "/assests/img/projects/datewave.png",
      title: "DateWave",
      description:
        "DateWave is a dating app that allows users to find their soulmates. The app is built using React Native and Firebase, and it is available on both Android and iOS.",
      urls: [
        { type: "GitHub", url: "https://github.com/kuraykaraaslan/Datewave" },
      ],
      tags: [
        { name: "React Native", color: "bg-blue-300", icon: faReact },
        { name: "Firebase", color: "bg-yellow-300", icon: faFire },
        { name: "Android", color: "bg-green-300", icon: faAndroid },
        { name: "iOS", color: "bg-purple-300", icon: faApple },
      ],
    },
    {
      id: "9",
      image: "https://raw.githubusercontent.com/kuraykaraaslan/control-view-cube/main/static/donut.gif",
      title: "3D View Cube",
      description:
        "3D View Cube is a 3D cube that is built using React and WebGL. It is a simple application that allows users to rotate the cube in 3D space.",
      urls: [
        {
          type: "GitHub",
          url: "https://github.com/kuraykaraaslan/control-view-cube",
        },
        {
          type: "Other",
          title: "npm",
          url: "https://www.npmjs.com/package/control-view-cube",
        },
      ],
      tags: [
        { name: "React", color: "bg-blue-300", icon: faReact },
        { name: "WebGL", color: "bg-yellow-300", icon: faGlobe },
      ],
    },
    {
      id: "10",
      title: "Other Projects",
      description:
        "For other projects, check my GitHub profile. You can find various projects that I have worked on.",
      urls: [
        {
          type: "Other",
          title: "GitHub",
          url: "https://github.com/kuraykaraaslan/",
        },
      ],
      tags: [
        { name: "Desktop", color: "bg-yellow-300", icon: faTv },
        { name: "Mobile", color: "bg-green-300", icon: faMobileScreenButton },
        { name: "Web", color: "bg-blue-300", icon: faGlobe },
      ],
      bgColor: "bg-base-200",
      imageHtml: otherProjectsImageHTML,
    },
  ];

  return (
    <>
      <section className="bg-base-300 pt-16" id="projects">
        <div
          className="px-4 mx-auto max-w-screen-xl lg:pb-16 lg:px-6 duration-1000"
          style={{ height: "560px", overflow: "clip" }}
          ref={container}
        >
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8 -mt-8 lg-mt-0">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold">
              {t("PROJECTS.TITLE")}
            </h2>
            <p className="font-light sm:text-xl">{t("PROJECTS.DESCRIPTION")}</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project: Project) => (
              <SingleProject key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div
          className="flex carousel-indicators gap-2 bg-transparent select-none"
          style={{
            zIndex: 50,
            position: "relative",
            left: "0",
            right: "0",
            margin: "auto",
            height: "0px",
            width: "100%",
            bottom: "20",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            className="flex carousel-indicators gap-2 bg-gradient-to-b from-base-200/0 to-base-300"
            style={{
              zIndex: 50,
              position: "relative",
              left: "0",
              right: "0",
              margin: "auto",
              height: "80px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              transform: "translateY(-80px)",
            }}
          >
            {!expanded ? (
              <button
                className="flex flex-col items-center gap-2 animate-bounce"
                style={{ height: "80px", width: "130px" }}
                onClick={handleClick}
              >
                <FontAwesomeIcon
                  icon={faAnglesDown}
                  style={{
                    width: "2.0rem",
                    height: "2.0rem",
                  }}
                />{" "}
                <span>{expanded ? "Show Less" : "Show More"}</span>
              </button>
            ) : (
              <button
                className="flex flex-col items-center gap-2"
                style={{ height: "80px", width: "130px" }}
                onClick={handleClick}
              >
                <FontAwesomeIcon
                  icon={faAnglesUp}
                  style={{ width: "2.0rem", height: "2.0rem" }}
                />{" "}
                <span>{expanded ? "Show Less" : "Show More"}</span>
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default withTranslation()(ProjectsHero);
