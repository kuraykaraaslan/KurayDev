"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSun,
  faMoon,
  faHome,
  faBriefcase,
  faPhone,
  faLink,
  faSkull,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import dynamic from "next/dynamic";
import LogoButton from "./NavbarPartial/LogoButton";

//i18n
import { withTranslation } from "react-i18next";
import i18n from "@/libs/localize/localize";

const LangButton = dynamic(() => import("./NavbarPartial/LangButton"), {
  ssr: false,
});
const ThemeButton = dynamic(() => import("./NavbarPartial/ThemeButton"), {
  ssr: false,
});

const Navbar = () => {
  const { t } = i18n;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [isTopReached, setIsTopReached] = useState(true);

  const themes = {
    dark: {
      icon: faMoon,
      text: "dark",
    },
    light: {
      icon: faSun,
      text: "light",
    },
    black: {
      icon: faSkull,
      text: "black",
    },
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsTopReached(false);
      }  else {
        setIsTopReached(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }
  , []);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      if (html.getAttribute("data-theme") == "dark") {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    }
  }, []);

  const changeTheme = (theme: string) => {
    const html = document.querySelector("html");
    if (html) {
      html.setAttribute("data-theme", theme);
    }
  };

  const changeThemeEachOther = () => {
    const html = document.querySelector("html");
    if (html) {
      if (html.getAttribute("data-theme") == "dark") {
        changeTheme("light");
      } else {
        changeTheme("dark");
      }
    }
  };

  //current path

  const path = typeof window !== "undefined" ? window.location.pathname : "";


  return (
    <>
      <div
        className={"sticky top-0 z-50 w-full transition-all duration-300 ease-in-out " +
        (isTopReached ? " px-4 sm:px-6 lg:px-8 pt-3 pb-6" : " px-0 pt-0 pb-6")}

        style={{ zIndex: 60, width: "100%" }}
      >
        <nav
          className={
            "navbar bg-base-100 rounded-full shadow-lg border border-base-200 self-center	" +
            (isTopReached ? " bg-opacity-50 rounded-full" : " bg-opacity-100 rounded-none")
          }
        >
          <div className="flex-1">
            <LogoButton />
            <ThemeButton />
            <LangButton />
          </div>

          <div className="flex-none">
            <div className="hidden md:block">
              <ul className="menu menu-horizontal px-1 gap-2">
                <li>
                  <Link href="/#home">{t("NAVIGATION.HOME")}</Link>
                </li>
                <li className="bg-base-300 animate-pulse text-base-content rounded-md">
                  <Link href="/freelance">{t("NAVIGATION.FREELANCE")}</Link>
                </li>
                <li>
                  <Link href="/blog" locale="en">
                    {t("NAVIGATION.BLOG")}
                  </Link>
                </li>
                <li>
                  <Link href="/#projects">{t("NAVIGATION.PROJECTS")}</Link>
                </li>
                <li>
                  <Link href="/#contact">{t("NAVIGATION.CONTACT")}</Link>
                </li>
                <li className="border-l-2 border-gray-400 border-opacity-50 pl-2">
                  <Link
                    href="https://github.com/kuraykaraaslan"
                    target="_blank"
                    locale="en"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      style={{ width: "1.0rem", height: "1.0rem" }}
                    />
                    {t("NAVIGATION.GITHUB")}
                  </Link>
                </li>
                <li className="rounded-r-full">
                  <Link
                    href="https://drive.google.com/file/d/17Ya5AC2nvcvccN-bS2pFsKFIm5v8dcWN/view?usp=drive_link"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faLink}
                      style={{ width: "1.0rem", height: "1.0rem" }}
                    />
                    {t("NAVIGATION.RESUME")}
                  </Link>
                </li>
              </ul>
            </div>
            <button
              className="btn btn-square btn-ghost rounded-full block md:hidden items-center "
              onClick={toggleDrawer}
            >
              <FontAwesomeIcon
                icon={faBars}
                style={{ width: "24px", height: "24px" }}
                onClick={toggleDrawer}
              />
            </button>
          </div>
          {isDrawerOpen && (
            <>
              <div
                className="bg-base-200"
                style={{
                  position: "fixed",
                  zIndex: 100,
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100vh",
                  opacity: 0.1,
                }}
                onClick={toggleDrawer}
              ></div>
              <div
                style={{
                  position: "fixed",
                  zIndex: 101,
                  top: 0,
                  width: "280px",
                  height: "100vh",
                  backgroundColor: "#1f2937",
                }}
                className="fixed inset-0 bg-opacity-0 border-r-2 border-base-200 shadow-2xl"
              >
                <ul className="h-full p-8 w-full menu menu-box bg-base-100 shadow-xl space-y-2">
                  <li>
                    <Link href="/#home" className="text-lg block">
                      <FontAwesomeIcon
                        icon={faHome}
                        style={{
                          width: "1.5rem",
                          height: "1.5rem",
                          marginRight: "0.5rem",
                          top: "0.2rem",
                        }}
                      />{" "}
                      {t("NAVIGATION.HOME")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/freelance" className="text-lg block">
                      <FontAwesomeIcon
                        icon={faBriefcase}
                        style={{
                          width: "1.5rem",
                          height: "1.5rem",
                          marginRight: "0.5rem",
                        }}
                      />{" "}
                      {t("NAVIGATION.FREELANCE")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-lg block" locale="en">
                      <FontAwesomeIcon
                        icon={faBlog}
                        style={{
                          width: "1.5rem",
                          height: "1.5rem",
                          marginRight: "0.5rem",
                        }}
                      />{" "}
                      {t("NAVIGATION.BLOG")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://drive.google.com/file/d/17Ya5AC2nvcvccN-bS2pFsKFIm5v8dcWN/view?usp=drive_link"
                      target="_blank"
                      className="text-lg block"
                    >
                      <FontAwesomeIcon
                        icon={faLink}
                        style={{
                          width: "1.5rem",
                          height: "1.5rem",
                          marginRight: "0.5rem",
                        }}
                      />{" "}
                      {t("NAVIGATION.RESUME")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/#projects" className="text-lg block">
                      <FontAwesomeIcon
                        icon={faBriefcase}
                        style={{
                          width: "1.5rem",
                          height: "1.5rem",
                          marginRight: "0.5rem",
                        }}
                      />{" "}
                      {t("NAVIGATION.PROJECTS")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/kuraykaraaslan"
                      target="_blank"
                      className="text-lg block"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        style={{
                          width: "1.5rem",
                          height: "1.5rem",
                          marginRight: "0.5rem",
                        }}
                      />{" "}
                      {t("NAVIGATION.GITHUB")}
                    </Link>
                  </li>
                  {/* <li>
                                        <Link href="/blog" className="text-lg block" locale="en">blog</Link>
                                    </li> */}
                  <li>
                    <Link href="/#contact" className="text-lg block">
                      <FontAwesomeIcon
                        icon={faPhone}
                        style={{
                          width: "1.5rem",
                          height: "1.5rem",
                          marginRight: "0.5rem",
                        }}
                      />{" "}
                      {t("NAVIGATION.CONTACT")}
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}
        </nav>
      </div>
    </>
  );
};

export default withTranslation()(Navbar);
