'use client';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCaretRight } from '@fortawesome/free-solid-svg-icons';
// Path: components/Feed/FeedCard.tsx

export interface FeedCardProps {
    title: string;
    description: string;
    date: Date;
    path: string;
    className?: string;
}

const FeedCardImage = (props: FeedCardProps) => {

    const [dateText, setDateText] = useState("");

    useEffect(() => {
        if (!props.date) {
            return;
        }
        const today = new Date();
        const diff = today.getTime() - props.date.getTime();
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

         if (days > 7) {
            setDateText(props.date.toDateString());
            return;
        }  else if (days > 1) {
            setDateText(`${days} days ago`);
            return;
        } else if (days === 1) {
            setDateText("Yesterday");
            return;
        } else if (hours > 1) {
            setDateText(`${hours} hours ago`);
            return;
        } else if (hours === 1) {
            setDateText("An hour ago");
            return;
        } else if (minutes > 1) {
            setDateText(`${minutes} minutes ago`);
            return;
        } else if (minutes === 1) {
            setDateText("A minute ago");
            return;
        }
        setDateText("Just now");
    }
    , [props.date]);



    return (
        <div className={"bg-base-100 grid grid-row-2 grid-cols-12 gap-4 " + (props.className || "")}>
            <div className="col-span-12 justify-center flex">
                <img src="https://via.placeholder.com/1200x600" alt="feed image" className="w-full h-64 object-cover" />
            </div>
            <div className="col-span-12 justify-center px-4">
                <h3 className="text-xl font-bold">{props.title || "Title"}</h3>
                <p className="text-base">{props.description?.substring(0, 200) || "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}</p>
            </div>
            <div className="col-span-12 justify-between flex  px-4 pb-4">
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faCalendar} className="text-gray-500 w-4"
                    />
                    <p className="text-gray-500 text-sm ml-2">{dateText || "Just now"}</p>
                </div>
                <div className="flex items-center gap-1">
                    <a href={"/blog/" + (props.path || "")}
                    className="text-primary">Read More</a>
                    <FontAwesomeIcon icon={faCaretRight} className="text-primary mt-1" />
                </div>
            </div>
        </div>
    );
};

export default FeedCardImage;