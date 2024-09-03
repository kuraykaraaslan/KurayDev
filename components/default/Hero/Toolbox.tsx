"use client";
import { createRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faBootstrap,
  faHtml5,
  faPython,
  faPhp,
  faJava,
  faJs,
  faLinux,
  faFigma,
  faCss3,
  faAws,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAnchor,
  faBook,
  faCloud,
  faCloudDownloadAlt,
  faCode,
  faCodeBranch,
  faDatabase,
  faFire,
  faG,
  faGear,
  faGlobe,
  faLightbulb,
  faMobileScreenButton,
  faUsers,
  faV,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";

//i18n
import { withTranslation } from "react-i18next";
import i18n from "@/libs/localize/localize";

import SingleTool, {
  SingleToolProps,
} from "@/components/default/Hero/Partials/SingleTool";
import SingleSkill, {
  SingleSkillProps,
} from "@/components/default/Hero/Partials/SingleSkill";

const Toolbox = () => {
  const { t } = i18n;

  const backendTools = [
    {
      icon: faJava,
      hoverBgColor: "bg-red-500",
      title: "Java",
      description: "spring & swing",
      hoverTextColor: "text-black"
    },
    {
      icon: faPython,
      hoverBgColor: "bg-green-500",
      title: "Python",
      description: "django",
      hoverTextColor: "text-black",
    },
    {
      icon: faPhp,
      hoverBgColor: "bg-purple-500",
      title: "PHP",
      description: "laravel",
      hoverTextColor: "text-black",
    },
    {
      icon: faLinux,
      hoverBgColor: "bg-yellow-500",
      title: "Linux",
      description: "server, bash",
      hoverTextColor: "text-black",
    },
  ] as SingleToolProps[];

  const frontendTools = [
    {
      icon: faJs,
      hoverBgColor: "bg-yellow-500",
      title: "Javascript",
      description: "react & native & express & next",
      hoverTextColor: "text-black",
    },
    {
      icon: faCss3,
      hoverBgColor: "bg-blue-500",
      title: "CSS",
      description: "tailwind & bootstrap & scss",
      hoverTextColor: "text-black",
    },
    {
      icon: faHtml5,
      hoverBgColor: "bg-orange-500",
      title: "HTML",
      description: "semantic",
      hoverTextColor: "text-black",
    },
    {
      icon: faFigma,
      hoverBgColor: "bg-rose-500",
      title: "Figma",
      description: "design",
      hoverTextColor: "text-black",
    },
  ] as SingleToolProps[];

  const skills = [
    {
      icon: faDatabase,
      bgColor: "bg-rose-500",
      textColor: "text-white",
      title: "SQL",
    },
    {
      icon: faCode,
      bgColor: "bg-blue-500",
      textColor: "text-white",
      title: "Clean Code",
    },
    {
      icon: faFire,
      bgColor: "bg-green-500",
      textColor: "text-white",
      title: "Firebase",
    },
    {
      icon: faCodeBranch,
      bgColor: "bg-yellow-500",
      textColor: "text-white",
      title: "Version Control",
    },
    {
      icon: faUsers,
      bgColor: "bg-purple-500",
      textColor: "text-white",
      title: "Teamwork",
    },
    {
      icon: faLightbulb,
      bgColor: "bg-orange-500",
      textColor: "text-white",
      title: "Problem Solving",
    },
  ] as SingleSkillProps[];

  return (
    <>
      <section className="dark:bg-base-100 py-8 px-4 md:px-20 px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 ">
          <div className="col-span-2 md:col-span-1 md:col-start-3 overflow-hidden">
            <h1 className="text-4xl lg:text-3xl font-bold mt-6 text-center md:text-right">
              {t("TOOLBOX.TITLE")}
            </h1>
          </div>
          <div className="col-span-1 md:col-start-4 invisible md:visible hidden md:block">
            <p className="mt-6 pr-4">{t("TOOLBOX.DESCRIPTION")}</p>
          </div>
        </div>

        <div className="grid grid-row-auto justify-items-center grid-row-1 md:grid-row-2 md:space-y-8 py-8 md:py-16">
          <div className="flex flex-col lg:flex-row-reverse md:mx-12 mx-auto">
            <div className="flex-1 pl-4 select-none hidden lg:block">
              <h1 className="text-3xl font-bold  relative overflow-hidden animate-shake pb-4">
                {t("TOOLBOX.FRONTEND")}
              </h1>
            </div>
            <div className="group flex-none grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {frontendTools.map((tool, index) => (
                <SingleTool key={index} {...tool} />
              ))}
            </div>
          </div>
          <div className="group flex flex-col lg:flex-row md:mx-12 mx-auto pt-4">
            <div className="flex-0 lg:pl-0 select-none hidden lg:block pr-4">
              <h1 className="text-3xl font-bold  relative overflow-hidden animate-shake pb-4">
                {t("TOOLBOX.BACKEND")}
              </h1>
            </div>
            <div className="flex-none grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {backendTools.map((tool, index) => (
                <SingleTool key={index} {...tool} />
              ))}
            </div>
          </div>
          <div className="w-50 h-50 group border-gray-500 border-t w-40 mt-8"></div>

          <div className="group flex-none grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-8 mt-4">
            {skills.map((skill, index) => (
              <SingleSkill key={index} {...skill} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default withTranslation()(Toolbox);
