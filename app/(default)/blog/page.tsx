// a hero section that has two columns, for feeds, feeds are basically cards that have a title, description, and a link to the full article

// Path: components/Feed/DefaultFeed.tsx
'use client'
import React , {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import FeedCardImage, {FeedCardProps} from '@/components/default/FeedCards/FeedCardImage';

import axiosInstance from '@/libs/http/axios';


const DefaultFeedWithImage = () => {

    const [feeds, setFeeds] = useState<FeedCardProps[]>([]);

    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(10);

    const [isMoreAvailable, setIsMoreAvailable] = useState(true);

    useEffect(() => {
        axiosInstance.get("/api/blog/post?page=" + page + "&limit=" + limit)
            .then(response => {
                console.log(response.data);
                response.data.forEach((feed: FeedCardProps) => {
                    //if there is no feed with same index then add it
                    setFeeds((prevFeeds) => {
                        if (prevFeeds?.length === 0) {
                            setIsMoreAvailable(false);
                            return [feed];
                        }
                        if (prevFeeds.findIndex((prevFeed) => prevFeed.index === feed.index) === -1) {
                            return [...prevFeeds, feed];
                        }
                        return prevFeeds;
                    }
                    );
      
                }
                );
            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    return (
        <div className="container mx-auto px-4 lg:px-8 mb-8">
            
            <h2 className="text-3xl font-bold text-left mt-4 mb-4">blog</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {feeds.map((feed, index) => {
                    if (index < 2) {
                        return <FeedCardImage key={index} {...feed} />
                    } else {
                        return null;
                    }
                } )}
                    
            </div>
            

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {feeds.map((feed, index) => {
                    if (index >= 2) {
                        return <FeedCardImage key={index} {...feed} />
                    } else {
                        return null;
                    }
                }
                )}
            </div>

            <div className="group flex justify-center mt-4">
                <button className={"btn " + (isMoreAvailable ? "bg-primary" : "bg-base-100")} onClick={() => {
                    setPage(page + 1);
                }
                }
                disabled={!isMoreAvailable}
                >
                    {isMoreAvailable ? "Load More" : "No More Posts"}
                </button>
            </div>
        </div>
    );
};

export default DefaultFeedWithImage;
