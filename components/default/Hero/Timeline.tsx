"use client";
import { createRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import {
  faBaby,
  faBriefcase,
  faBuildingColumns,
  faCode,
  faComputer,
  faFaceSmile,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { faChrome, faFirefox } from "@fortawesome/free-brands-svg-icons";

//i18n
import { withTranslation } from "react-i18next";
import i18n from "@/libs/localize/localize";

const Timeline = () => {
  const { t } = i18n;

  const [showDetails, setShowDetails] = React.useState(false);
  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <>
      <section
        className={
          "bg-base-200 justify-center items-center flex flex-col select-none border-t-2 border-b-2 border-base-100 px-10 transition-all duration-300"
        }
        id="timeline"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => setShowDetails(!showDetails)}
      >
        <div className="relative w-full h-full items-center justify-center flex flex-col">
          {/* Apply blur effect only to this section */}
          <div
            className="absolute inset-0 bg-base-200 bg-opacity-50 backdrop-filter backdrop-blur-sm items-center justify-center flex flex-col"
            style={{
              zIndex: 100,
              display: isHovering ? (showDetails ? "none" : "flex") : "none",
            }}
          >
            <h3 className="text-3xl font-bold text-center">
              {t("TIMELINE.CLICK_TO_SEE_DETAILS")}
            </h3>
          </div>
          {/* Content inside the blurred section */}

          <ul
            className={
              "timeline bg-base-200 my-6" +
              (showDetails
                ? " timeline-vertical"
                : " timeline-vertical lg:timeline-horizontal")
            }
          >
            <li>
              <div className="timeline-start timeline-box max-w-xs mx-2">
                <p className="font-bold">{t("TIMELINE.STEP_1.TITLE")}</p>
                <p style={{ display: showDetails ? "block" : "none" }}>
                  {t("TIMELINE.STEP_1.DESCRIPTION")}
                </p>
              </div>
              <div className="timeline-middle my-1">
                <div className="bg-white text-black rounded-full pt-1 px-1">
                  <FontAwesomeIcon
                    icon={faBaby}
                    style={{ width: "12px", height: "12px" }}
                    className="m-1 mt-1"
                  />
                </div>
              </div>
              <div className="timeline-end mx-2">
                {t("TIMELINE.STEP_1.YEAR")}
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start mx-2">
                {t("TIMELINE.STEP_2.YEAR")}
              </div>
              <div className="timeline-middle my-1">
                <div className="bg-white text-black rounded-full pt-1 px-1">
                  <FontAwesomeIcon
                    icon={faComputer}
                    style={{ width: "12px", height: "12px" }}
                    className="m-1 mt-1"
                  />
                </div>
              </div>
              <div className="timeline-end timeline-box max-w-xs mx-2">
                <p className="font-bold">{t("TIMELINE.STEP_2.TITLE")}</p>
                <p style={{ display: showDetails ? "block" : "none" }}>
                  {t("TIMELINE.STEP_2.DESCRIPTION")}
                </p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start timeline-box max-w-xs mx-2">
                <p className="font-bold">{t("TIMELINE.STEP_3.TITLE")}</p>
                <p style={{ display: showDetails ? "block" : "none" }}>
                  {t("TIMELINE.STEP_3.DESCRIPTION")}
                </p>
              </div>
              <div className="timeline-middle my-1">
                <div className="bg-white text-black rounded-full pt-1 px-1">
                  <FontAwesomeIcon
                    icon={faGlobe}
                    style={{ width: "12px", height: "12px" }}
                    className="m-1 mt-1"
                  />
                </div>
              </div>
              <div className="timeline-end mx-2">
                {t("TIMELINE.STEP_3.YEAR")}
              </div>
              <hr />
            </li>
            <li style={{ display: showDetails ? "grid" : "none" }}>
              <hr />
              <div className="timeline-start mx-2">
                {t("TIMELINE.STEP_4.YEAR")}
              </div>
              <div className="timeline-middle my-1">
                <div className="bg-white text-black rounded-full pt-1 px-1">
                  <FontAwesomeIcon
                    icon={faCode}
                    style={{ width: "12px", height: "12px" }}
                    className="m-1 mt-1"
                  />
                </div>
              </div>
              <div className="timeline-end timeline-box max-w-xs mx-2">
                <p className="font-bold">{t("TIMELINE.STEP_4.TITLE")}</p>
                <p style={{ display: showDetails ? "block" : "none" }}>
                  {t("TIMELINE.STEP_4.DESCRIPTION")}
                </p>
              </div>
              <hr />
            </li>
            <li style={{ display: showDetails ? "grid" : "none" }}>
              <hr />
              <div className="timeline-start timeline-box max-w-xs mx-2">
                <p className="font-bold">{t("TIMELINE.STEP_5.TITLE")}</p>
                <p style={{ display: showDetails ? "block" : "none" }}>
                  {t("TIMELINE.STEP_5.DESCRIPTION")}
                </p>
              </div>
              <div className="timeline-middle my-1">
                <div className="bg-white text-black rounded-full pt-1 px-1">
                  <FontAwesomeIcon
                    icon={faFirefox}
                    style={{ width: "12px", height: "12px" }}
                    className="m-1 mt-1"
                  />
                </div>
              </div>
              <div className="timeline-end mx-2">
                {t("TIMELINE.STEP_5.YEAR")}
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start mx-2">
                {t("TIMELINE.STEP_6.YEAR")}
              </div>
              <div className="timeline-middle my-1">
                <div className="bg-white text-black rounded-full pt-1 px-1">
                  <FontAwesomeIcon
                    icon={faBuildingColumns}
                    style={{ width: "12px", height: "12px" }}
                    className="m-1 mt-1"
                  />
                </div>
              </div>
              <div className="timeline-end timeline-box max-w-xs mx-2">
                <p className="font-bold">{t("TIMELINE.STEP_6.TITLE")}</p>
                <p style={{ display: showDetails ? "block" : "none" }}>
                  {t("TIMELINE.STEP_6.DESCRIPTION")}
                </p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start timeline-box max-w-xs mx-2">
                <p className="font-bold">{t("TIMELINE.STEP_7.TITLE")}</p>
                <p style={{ display: showDetails ? "block" : "none" }}>
                  {t("TIMELINE.STEP_7.DESCRIPTION")}
                </p>
              </div>
              <div className="timeline-middle my-1">
                <div className="bg-white text-black rounded-full pt-1 px-1">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    style={{ width: "12px", height: "12px" }}
                    className="m-1 mt-1"
                  />
                </div>
              </div>
              <div className="timeline-end mx-2">
                {t("TIMELINE.STEP_7.YEAR")}
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start mx-2">
                {t("TIMELINE.STEP_8.YEAR")}
              </div>
              <div className="timeline-middle my-1">
                <div className="bg-white text-black rounded-full pt-1 px-1">
                  <FontAwesomeIcon
                    icon={faFaceSmile}
                    style={{ width: "12px", height: "12px" }}
                    className="m-1 mt-1"
                  />
                </div>
              </div>
              <div className="timeline-end timeline-box max-w-xs mx-2">
                <p className="font-bold">{t("TIMELINE.STEP_8.TITLE")}</p>
                <p style={{ display: showDetails ? "block" : "none" }}>
                  {t("TIMELINE.STEP_8.DESCRIPTION")}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Timeline;
