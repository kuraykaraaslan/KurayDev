import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type SingleToolProps = {
  icon: IconProp;
  title: string;
  description: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
};

const SingleTool: React.FC<SingleToolProps> = ({ icon, title, description, hoverBgColor, hoverTextColor }) => {
  return (
    <div className='w-40 h-40 group'>
      <div className={`card w-40 h-40 bg-base-300 relative select-none transition duration-500 transform group-hover:rotate-y-180 px-2 py-2 shadow-lg ${hoverBgColor ? "group-hover:" + hoverBgColor : "group-hover:bg-base-400"} ${hoverTextColor ? "group-hover:" + hoverTextColor : "group-hover:text-base-900"}`}>
        <div className='flex flex-col items-center justify-center group-hover:hidden'>
          <figure className="px-10 pt-5 -mb-3">
            <FontAwesomeIcon icon={icon} className="text-8xl" />
          </figure>
        </div>
        <div className='flex flex-col items-center justify-center hidden text-black group-hover:flex rotate-y-180'>
          <figure className="px-10 pt-5 -mb-4">
            <FontAwesomeIcon icon={icon} className="text-4xl transition duration-500 hover:animate-spin" />
          </figure>
          <div className="card-body items-center text-center duration-1000 ease-in-out">
            <h2 className="card-title">{title}</h2>
            <span className="text-xs text-black">{description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTool;
