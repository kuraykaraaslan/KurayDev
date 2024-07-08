"use client";

import { useState, useEffect, useRef, createRef, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faE, faEnvelope, faPhone, faShield } from "@fortawesome/free-solid-svg-icons";
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

//axios
import axios from "axios";

//reCAPTCHA
import ReCAPTCHA from "react-google-recaptcha";
const recaptchaSiteKey = process.env.RECAPTCHA_CLIENT_KEY || "";

console.log("recaptchaSiteKey", recaptchaSiteKey
);


const ContactForm = dynamic(
  () => import("@/components/default/Hero/Partials/ContactForm"),
  { ssr: false },
);

interface Phone {
  CountryCode: string;
  PhoneNumber: string;
}

interface Mail {
  mail: string;
}

const Contact = () => {
  const { t } = i18n;

  const [phoneNumbers, setPhoneNumbers] = useState<Phone[]>([]);
  const [mails, setMails] = useState<Mail[]>([]);
  const [token, setToken] = useState<string>("");

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  useEffect(() => {
    const token = recaptchaRef.current?.executeAsync().then((token) => {
      setToken(token as string);
      console.log("token", token);
    });
  }
  , []);


  const getPhoneNumbers = async () => {

    if (token === "") {
      alert("Can not verify that you are not a robot.");
      return;
    }

    if (phoneNumbers.length === 0) {
      axios.get("/api/contact/phone").then((response) => {
        setPhoneNumbers(response.data.phones);
      });
    }

   

  }

  function getMails() {

    if (token === "") {
      alert("Can not verify that you are not a robot.");
      return;
    }

    if (mails.length === 0) {
      axios.get("/api/contact/mail").then((response) => {
        setMails(response.data.mails);
      });
    }
  

  }



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

                <ReCAPTCHA  
                  ref={recaptchaRef}
                  size="invisible"
                  sitekey={recaptchaSiteKey}  
                />

                <p className="pt-2 pb-4">{t("CONTACT.DESCRIPTION")}</p>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">
                    {t("CONTACT.PHONE_AND_MAIL")}
                  </h3>

                  {token !== "" ?
                  <>
                  {mails.length === 0 &&
                    <button className="flex items-center transform transition-transform duration-500 hover:scale-105" onClick={getMails}>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="w-5 h-5 mr-2 sm:mr-6"
                      />
                      <span>{t("CONTACT.CLICK_TO_REVEAL_MAIL")}</span>
                    </button>
                  }

                  {mails.map((mail, index) => (
                    <p key={index} className="flex items-center">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="w-5 h-5 mr-2 sm:mr-6"
                      />
                      <Link
                        href={"mailto:" + mail.mail}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>{mail.mail}</span>
                      </Link>
                    </p>
                  ))}  

                  {phoneNumbers.length === 0 && 
                    <button className="flex items-center  transform transition-transform duration-500 hover:scale-105" onClick={getPhoneNumbers}>
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="w-5 h-5 mr-2 sm:mr-6"
                      />
                      <span>{t("CONTACT.CLICK_TO_REVEAL_PHONE_NUMBERS")}</span>
                    </button>
                  }

                  {phoneNumbers.map((phone, index) => (
                    <p key={index} className="flex items-center">
                      <CircleFlag
                        countryCode={phone.CountryCode}
                        className="rounded-full w-5 h-5 mr-2 sm:mr-6"
                      />
                      <Link
                        href={"tel:" + phone.PhoneNumber}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>{phone.PhoneNumber}</span>
                      </Link>
                    </p>
                  ))
                  }
                  </>
                  : 
                  <>
                    <button className="flex items-center transform transition-transform duration-500 hover:scale-105" onClick={getMails}>
                      <FontAwesomeIcon
                        icon={faShield}
                        className="w-5 h-5 mr-2 sm:mr-6"
                      />
                      <span>{t("CONTACT.WAIT_FOR_RECAPTCHA")}</span>
                    </button>
                  </>
                  }
  


                </div>

                <div className="space-y-4 mt-4">
                  <h3 className="text-xl font-bold">
                    {t("CONTACT.SOCIAL_LINKS")}
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
