"use client";

import { useState, useEffect, createRef, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faXTwitter,
  faGithub,
  faLinkedin,
  faTelegram,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

//i18n
import { withTranslation } from "react-i18next";
import i18n from "@/libs/localize/localize";

import dynamic from "next/dynamic";

const ContactForm = dynamic(
  () => import("@/components/default/Hero/Partials/ContactForm"),
  { ssr: false },
);

const Contact = () => {
  const { t } = i18n;

  return (
    <>
      {/* <section className="md:bg-base-100 bg-base-200 px-4 py-8  md:px-20" id="contact"> */}
      <section className="bg-base-200 px-4 py-8  md:px-20 " id="contact">
        {/* <div className="container px-2 py-8 mx-auto mx-4 md:px-24 md:bg-base-200 mt-0 md:-mt-24 rounded-box shadow-2xl border-full border-2 border-black contactHero"> */}
        <div className="container  mx-auto mx-4 mt-0 rounded-box shadow-2xl border-full border-2 border-black contactHero">
          <div className="mx-4 md:mx-8 pt-2 rounded-box mb-4">
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x pt-12 pb-12 mb-2">
              <div className="py-6 md:py-0 md:px-6">
                <h1 className="text-4xl font-bold">{t("CONTACT.TITLE")}</h1>
                <p className="pt-2 pb-4">{t("CONTACT.DESCRIPTION")}</p>
                <div className="space-y-4">
                  <p className="flex items-center">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="w-5 h-5 mr-2 sm:mr-6"
                    />
                    <span>kuraykaraaslan@gmail.com</span>
                  </p>

                  <p className="flex items-center">
                    <FontAwesomeIcon
                      icon={faTelegram}
                      className="w-5 h-5 mr-2 sm:mr-6"
                    />
                    <a
                      href="https://t.me/kuraykaraaslan"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Telegram</span>
                    </a>
                  </p>

                  <p className="flex items-center">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="w-5 h-5 mr-2 sm:mr-6"
                    />
                    <a
                      href="https://www.linkedin.com/in/kuraykaraaslan"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>LinkedIn</span>
                    </a>
                  </p>

                  <p className="flex items-center">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="w-5 h-5 mr-2 sm:mr-6"
                    />
                    <a
                      href="https://github.com/kuraykaraaslan"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Github</span>
                    </a>
                  </p>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faXTwitter}
                      className="w-5 h-5 mr-2 sm:mr-6"
                    />
                    <a
                      href="https://twitter.com/kuraykaraaslan"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>X</span>
                    </a>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="w-5 h-5 mr-2 sm:mr-6"
                    />
                    <a
                      href="https://www.facebook.com/kuraykaraaslan"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Facebook</span>
                    </a>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="w-5 h-5 mr-2 sm:mr-6"
                    />
                    <a
                      href="https://www.instagram.com/kuraykaraaslan"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                <h1 className="text-4xl font-bold">
                  {t("CONTACT.SEND_MESSAGE")}
                </h1>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withTranslation()(Contact);
