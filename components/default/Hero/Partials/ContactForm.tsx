import React from "react";
import axios from "axios";

//i18n
import { withTranslation } from "react-i18next";
import i18n from "@/libs/localize/localize";

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

async function sendMessageToChannel(message: any) {
  try {
    const response = await axios.post(
      DISCORD_WEBHOOK_URL as string,
      {
        content: message,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error(error);
  }
}

// @ts-ignore
const ContactForm = (props: any) => {
  const { t } = i18n;

  const claases = props.className;

  async function formSubmit() {
    // @ts-ignore
    const name = document?.getElementById("name")?.value as string;
    // @ts-ignore
    const email = document?.getElementById("email")?.value;
    // @ts-ignore
    const phone = document?.getElementById("phone")?.value;
    // @ts-ignore
    const message = document?.getElementById("message")?.value;
    const date = new Date();

    // regex for email
    const emailRegex = /\S+@\S+\.\S+/;
    // regex for phone
    const phoneRegex = /^\+?[0-9]{10,14}$/;
    // regex for name with dot and space
    const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

    // check one of email or phone is provided
    if (email === "" && phone === "") {
      alert("please enter at least one of email or phone");
      return;
    }

    if (email !== "" && !emailRegex.test(email as string)) {
      alert("please enter a valid email");
      return;
    }

    if (phone !== "" && !phoneRegex.test(phone as string)) {
      alert("please enter a valid phone");
      return;
    }

    if (!nameRegex.test(name as string)) {
      alert("please enter a valid name");
      return;
    }

    const data = {
      name: name,
      email: email,
      phone: phone,
      message: message,
      date: date,
    };

    var dm = `**${data.name}** sent a message from the website:\n\n
        **Email:** ${data.email}\n
        **Phone:** ${data.phone}\n
        **Message:** ${data.message}\n
        **Date:** ${data.date}\n
        `;

    sendMessageToChannel(dm);
    alert("message sent successfully");
  }

  return (
    <form action="#" className={claases} onSubmit={formSubmit}>
      <div className="mt-2">
        <label htmlFor="name" className="block mb-2 text-sm font-medium ">
          {t("CONTACT.NAME")}
        </label>
        <input
          type="text"
          id="name"
          className="block p-3 w-full text-sm rounded-lg border border-1 border-gray-500 bg-gray-200 text-black"
          placeholder={t("CONTACT.NAME_PLACEHOLDER")}
          required
        />
      </div>
      <div className="mt-2">
        <label htmlFor="email" className="block mb-2 text-sm font-medium">
          {t("CONTACT.EMAIL")}
        </label>
        <input
          type="email"
          id="email"
          className="block p-3 w-full text-sm rounded-lg border border-1 border-gray-500 bg-gray-200 text-black"
          placeholder={t("CONTACT.EMAIL_PLACEHOLDER")}
          required
        />
      </div>
      <div className="mt-2">
        <label htmlFor="phone" className="block mb-2 text-sm font-medium">
          {t("CONTACT.PHONE")}
        </label>
        <input
          type="tel"
          id="phone"
          className="block p-3 w-full text-sm rounded-lg border border-1 border-gray-500 bg-gray-200 text-black"
          placeholder={t("CONTACT.PHONE_PLACEHOLDER")}
        />
      </div>
      <div className="mt-2">
        <label htmlFor="message" className="block mb-2 text-sm font-medium">
          {t("CONTACT.MESSAGE")}
        </label>
        {/* @ts-ignore */}
        <textarea
          id="message"
          rows="6"
          className="block p-2.5 w-full text-sm rounded-lg border border-1 border-gray-500 min-h-[150px] bg-gray-200 resize-none text-black"
          placeholder={t("CONTACT.MESSAGE_PLACEHOLDER")}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="mt-2 py-3 px-5 text-sm font-medium bg-base-300 rounded-lg hover:bg-primary hover:text-white focus:outline-none focus:bg-primary-600 border border-1 border-gray-500 light:placeholder-black"
        onClick={formSubmit}
      >
        {t("CONTACT.SEND")}
      </button>
    </form>
  );
};

export default ContactForm;
