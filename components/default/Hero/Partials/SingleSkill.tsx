import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type SingleSkillProps = {
  icon: IconProp;
  bgColor?: string;
  title: string;
  textColor?: string;
};

const SingleSkill: React.FC<SingleSkillProps> = ({ icon, bgColor, title, textColor }) => {
  return (
    <div className="w-28 h-20 group">
      <div
        className={`relative card w-28 h-20 bg-base-300 relative select-none transition duration-500 transform group-hover:rotate-y-180 shadow-lg`}
      >
        <div className="flex flex-row items-center justify-center group-hover:rotate-y-180 h-full relative fixed w-28 h-20 top-0 left-0 absolute rounded-box">
          <figure className={`w-20 h-20 group-hover:hidden`}>
            <FontAwesomeIcon
              icon={icon}
              className="text-2xl flex group-hover:hidden"
            />
          </figure>
          <div className={"flex flex-col items-center justify-center hidden text-black group-hover:flex rotate-y-180 group-hover:rotate-y-0 w-28 h-20 top-0 left-0 absolute rounded-box " + (bgColor ? bgColor : "") + " " + (textColor ? textColor : "")}>
            <div className={"card-body items-center text-center duration-1000 ease-in-out "}>
              <h2 className="card-title">{title}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSkill;
