// a hero section that has two columns, for feeds, feeds are basically cards that have a title, description, and a link to the full article

// Path: components/Feed/DefaultFeed.tsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import FeedCardImage, {FeedCardProps} from '@/components/default/FeedCards/FeedCardImage';

const DefaultFeedWithImage = () => {

    const FeedCards: FeedCardProps[] = [
        {
            title: "Java 23 is out now",
            description: "Java 23 has been released with a lot of new features and improvements. Read more to find out what's new.",
            date: new Date(),
            path: "java-23-is-out-now",
        }];

    return (
        <div className="container mx-auto px-4 lg:px-8 mb-8">
            
            <h2 className="text-3xl font-bold text-left mt-4 mb-4">blog</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <FeedCardImage {...FeedCards[0]} />
                <FeedCardImage />
            </div>
            

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FeedCardImage />
                <FeedCardImage />
                <FeedCardImage />
                <FeedCardImage />
                <FeedCardImage />
                <FeedCardImage />
                <FeedCardImage />
                <FeedCardImage />
                <FeedCardImage />
            </div>

            <div className="group flex justify-center mt-4">
                <button className="btn btn-primary"><FontAwesomeIcon icon={faSpinner} className="group-hover:animate-spin" /> Load More</button>
            </div>
        </div>
    );
};

export default DefaultFeedWithImage;
