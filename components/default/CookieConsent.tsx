"use client";
import { useEffect, useState, useRef } from "react";

import i18n from "@/libs/localize/localize";

//cookie consent
import { useCookies } from "react-cookie";

import { withTranslation } from "react-i18next";

const CookieConsent = () => {
  const [show, setShow] = useState(false);
  const [consent, setConsent] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies([
    "user",
    "language",
    "theme",
  ]);

  const { t } = i18n;

  useEffect(() => {
    if (!cookies.user) {
      console.log("cookie not set");
      setConsent(false);
      setShow(true);
      return;
    }

    const cookieConsent = localStorage.getItem("cookie");
    if (!cookieConsent) {
      setShow(true);
      console.log("ask for cookie consent");
    } else {
      setShow(false);
      console.log("cookie consent already given");
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie", "accepted");
    setShow(false);
    setConsent(true);
  };

  const handleDecline = () => {
    localStorage.removeItem("cookie");
    setShow(false);
  };

  useEffect(() => {
    if (consent) {
      //IDENTIFY USER
      if (cookies.user) {
        console.log("cookie already set");
      } else {
        const UUID =
          Math.random().toString(36).substring(2, 15) +
          Math.random().toString(36).substring(2, 15);
        setCookie("user", UUID, { path: "/", maxAge: 31536000 });
        console.log("cookie set");
      }

      return;

      const html = document.querySelector("html");
      if (html) {
        if (html?.getAttribute("data-theme") == "dark") {
          setCookie("theme", "dark", { path: "/", maxAge: 31536000 });
        } else {
          setCookie("theme", "light", { path: "/", maxAge: 31536000 });
        }
      }

      if (html) {
        if (html?.getAttribute("lang") == "tr") {
          setCookie("language", "tr", { path: "/", maxAge: 31536000 });
        } else {
          setCookie("language", "en", { path: "/", maxAge: 31536000 });
        }
      }
    }
  }, [consent]);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 text-base-content px-24 pb-2 select-none ${show ? "block" : "hidden"}`}
      style={{ zIndex: 1000 }}
      id="cookie-popup"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-base-300 text-base-content shadow-md rounded-lg max-w-4xl mx-auto border border-base-100">
        <div>
          <p>{t("COOKIES.MESSAGE")}</p>
        </div>
        <div className="text-right items-center text-center md:text-right">
          <button
            className="btn btn-sm btn-ghost"
            onClick={() => setShow(false)}
          >
            {t("COOKIES.DISAGREE")}
          </button>
          <button
            className="btn btn-sm btn-primary ml-2"
            onClick={handleAccept}
          >
            {t("COOKIES.AGREE")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(CookieConsent);
