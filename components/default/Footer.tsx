'use client';
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

//i18n
import { withTranslation } from "react-i18next";
import i18n from "@/libs/localize/localize";
import Link from "next/link";

const Footer = (props: any) => {
  const { t } = i18n;

  return (
    <>
      <footer className="footer grid grid-cols-1 lg:grid-cols-2 gap-4 bg-base-300 p-4 min-w-full shadow-lg">
        <div className="col-span-1 flex flex-row flex-wrap justify-start">
          <p>{t("FOOTER.COPYRIGHT", { year: new Date().getFullYear() })}</p>
        </div>
        <div className="col-span-1 flex flex-row flex-wrap justify-start">
          <Link className="link link-hover" href="/privacy">
            {t("FOOTER.PRIVACY")}
          </Link>
          <Link className="link link-hover" href="/terms">
            {t("FOOTER.TERMS")}
          </Link>
          <Link className="link link-hover" href="#projects">
            {t("FOOTER.PROJECTS")}
          </Link>
          <Link className="link link-hover" href="#contact">
            {t("FOOTER.CONTACT")}
          </Link>
        </div>
        <div className="col-span-1 flex flex-row flex-wrap justify-end">
          <Link
            href="https://twitter.com/kuraykaraaslan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              style={{ width: "24px", height: "24px" }}
            />
          </Link>
          <Link
            href="https://github.com/kuraykaraaslan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              style={{ width: "24px", height: "24px" }}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/kuraykaraaslan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ width: "24px", height: "24px" }}
            />
          </Link>
        </div>
      </footer>
    </>
  );
};
export default withTranslation()(Footer);
