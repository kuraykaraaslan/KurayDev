"use client";
import React from "react";
import {
  faApple,
  faAndroid,
  faReact,
  faPhp,
  faJava
} from "@fortawesome/free-brands-svg-icons";
import {
  faDesktop,
  faGlobe,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

//i18n
import { withTranslation } from "react-i18next";
import i18n from "@/libs/localize/localize";
import SingleService, { Service } from "./Partials/SingleService";
import Link from "next/link";

const ServicesHero = () => {
  const { t } = i18n;

  const [expanded, setExpanded] = React.useState(true);
  const container = React.useRef(null);


  const projects: Service[] = [
    {
      id: "1",
      image: "/assests/img/services/phone.jpg",
      title: t("SERVICES.MOBILE_APP_DEVELOPMENT.TITLE"),
      description:
        t("SERVICES.MOBILE_APP_DEVELOPMENT.DESCRIPTION"),
      urls: [
      ],
      tags: [
        { name: "Android", color: "bg-green-200", icon: faAndroid },
        { name: "Apple", color: "bg-blue-200", icon: faApple },
        { name: "React Native", color: "bg-blue-200", icon: faReact },
      ],
    },
    {
      id: "2",
      image: "/assests/img/services/web.jpg",
      title: t("SERVICES.WEB_DEVELOPMENT.TITLE"),
      description:
        t("SERVICES.WEB_DEVELOPMENT.DESCRIPTION"),        
      urls: [
      ],
      tags: [
        { name: "React", color: "bg-blue-200", icon: faReact },
        { name: "Web", color: "bg-yellow-200", icon: faGlobe },
        { name: "Desktop", color: "bg-yellow-200", icon: faDesktop },
      ],
    },
    {
      id: "3",
      image: "/assests/img/services/backend.jpg",
      title: t("SERVICES.BACKEND_DEVELOPMENT.TITLE"),
      description:
        t("SERVICES.BACKEND_DEVELOPMENT.DESCRIPTION"),
      urls: [],
      tags : [
        { name: "Node.js", color: "bg-green-200", icon: faWind },
        { name: "PHP", color: "bg-purple-200", icon: faPhp },
        { name: "Java", color: "bg-red-200", icon: faJava }
      ]
    },
    {
      id: "4",
      image: "/assests/img/services/other2.jpg",
      title: t("SERVICES.SOMETHING_ELSE.TITLE"),
      bgColor: "bg-base-200",
      description:
        t("SERVICES.SOMETHING_ELSE.DESCRIPTION"),
      urls: [],
      tags: []
    }
  ];

  return (
    <>
      <section className="bg-base-100 pt-16" id="projects">
        <div
          className="px-4 mx-auto max-w-screen-xl lg:pb-16 lg:px-6 duration-1000"
          ref={container}
        >
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8 -mt-8 lg-mt-0">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold">
              {t("SERVICES.TITLE")}
            </h2>
            <p className="font-light sm:text-xl">{t("SERVICES.DESCRIPTION")}</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((service: Service) => (
              <SingleService key={service.id} service={service} />
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
        </div>
      </section>
    </>
  );
};

export default withTranslation()(ServicesHero);