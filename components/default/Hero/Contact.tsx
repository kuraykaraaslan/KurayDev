"use client";

import { useState, useEffect, createRef, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faXTwitter,
  faGithub,
  faLinkedin,
  faTelegram,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { CircleFlag } from "react-circle-flags";


//i18n
import { withTranslation } from "react-i18next";
import i18n from "@/libs/localize/localize";

import dynamic from "next/dynamic";
import Link from "next/link";

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
                  <h3 className="text-xl font-bold">
                    {t("CONTACT.PHONEANDMAIL")}
                  </h3>
                  <p className="flex items-center">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="w-5 h-5 mr-2 sm:mr-6"
                    />
                    <Link
                      href="mailto:kuraykaraaslan@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>kuraykaraaslan@gmail.com</span>
                    </Link>
                  </p>

                  <p className="flex items-center">
                    <CircleFlag
                      countryCode="tr"
                      className="rounded-full w-5 h-5 mr-2 sm:mr-6"
                    />
                    <Link
                      href="tel:+902323320765"
                      target="_blank"
                      rel="noopener noreferrer" >
                      <span>+90 (232) 332 07 65</span>
                    </Link>
                  </p>

                  <p className="flex items-center">
                    <CircleFlag
                      countryCode="us"
                      className="rounded-full w-5 h-5 mr-2 sm:mr-6"
                    />
                    <Link
                      href="tel:+905323209515"
                      target="_blank"
                      rel="noopener noreferrer">
                      <span>+1 (585) 632 95 15</span>
                    </Link>
                  </p>

                  <p className="flex items-center">
                    <CircleFlag
                      countryCode="gb"
                      className="rounded-full w-5 h-5 mr-2 sm:mr-6"
                    />
                    <Link
                      href="tel:+447455479481"
                      target="_blank"
                      rel="noopener noreferrer">
                      <span>+44 (7455) 479 481</span>
                    </Link>
                  </p>



                </div>

                <div className="space-y-4 mt-4">
                  <h3 className="text-xl font-bold">
                    {t("CONTACT.SOCIALLINKS")}
                  </h3>

                  <p className="flex items-center">
                    <FontAwesomeIcon
                      icon={faTelegram}
                      className="w-5 h-5 mr-2 sm:mr-6"
                    />
                    <Link
                      href="https://t.me/kuraykaraaslan"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Telegram</span>
                    </Link>
                  </p>

                  <p className="flex items-center">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="w-5 h-5 mr-2 sm:mr-6"
                    />
                    <Link
                      href="https://www.linkedin.com/in/kuraykaraaslan"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>LinkedIn</span>
                    </Link>
                  </p>

                  <p className="flex items-center">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="w-5 h-5 mr-2 sm:mr-6"
                    />
                    <Link
                      href="https://github.com/kuraykaraaslan"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Github</span>
                    </Link>
                  </p>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faXTwitter}
                      className="w-5 h-5 mr-2 sm:mr-6"
                    />
                    <Link
                      href="https://twitter.com/kuraykaraaslan"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>X</span>
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="w-5 h-5 mr-2 sm:mr-6"
                    />
                    <Link
                      href="https://www.facebook.com/kuraykaraaslan"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Facebook</span>
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="w-5 h-5 mr-2 sm:mr-6"
                    />
                    <Link
                      href="https://www.instagram.com/kuraykaraaslan"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Instagram</span>
                    </Link>
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
