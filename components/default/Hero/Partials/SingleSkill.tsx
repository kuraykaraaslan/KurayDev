import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type SingleSkillProps = {
  icon: IconProp;
  color: string;
  title: string;};

const SingleSkill: React.FC<SingleSkillProps> = ({ icon, color, title }) => {
  return (
    <div className='w-28 h-20 group'>
      <div className={`card w-28 h-20 bg-base-300 relative select-none transition duration-500 transform group-hover:text-black group-hover:rotate-y-180 group-hover:${color} px-2 py-2 shadow-lg`}>
        <div className='flex flex-row items-center justify-center group-hover:rotate-y-180 h-full relative'>
          <figure className={`w-20 h-20 group-hover:hidden`}>
            <FontAwesomeIcon icon={icon} className="text-2xl flex group-hover:hidden" />
          </figure>
            <div className="flex flex-col items-center justify-center hidden text-black group-hover:flex rotate-y-180 group-hover:rotate-y-0">
                <div className="card-body items-center text-center duration-1000 ease-in-out">
                <h2 className="card-title">{title}</h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSkill;
