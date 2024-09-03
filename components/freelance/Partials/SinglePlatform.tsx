import React from 'react';

interface Platform {
    name: string;
    icon: string;
    url?: string;
    bgColor?: string;
    borderColor?: string;
    zoom?: number;
}

const SinglePlatform = ({ name, icon, url, bgColor, borderColor, zoom }: Platform) => {

    return (
        <a href={url} target="_blank" rel="noreferrer p-4" 
            className={"flex justify-center items-center border border-solid border-gray-200 shadow-sm h-24 rounded-2xl " + (bgColor ? bgColor : "bg-primary-100") + " " + (borderColor ? borderColor : "border-gray-200")}>
            <img src={icon} alt={name} className={"h-" + (zoom ? 12 * zoom : 12) + " w-auto"} />
        </a>
    );
};

export default SinglePlatform;