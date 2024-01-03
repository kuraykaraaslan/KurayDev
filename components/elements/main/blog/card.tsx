import React, { useEffect } from "react";

import Link from "next/link";

const BlogCard = (props) => {

        let post = props?.post;
        let url = "/blog/" + post.slug;
        let img = post.img || "/assets/images/og-image.jpg";
        let title = post.title;
        let description = post.description;
        let createdAt = post.createdAt;
        let categoryId = post.categoryId;


        let postUrl = "";

        return (
            <Link rel="noopener noreferrer" className="max-w mx-auto group hover:border-white focus:no-underline bg-base-100 " href={postUrl}>
                <img role="presentation" className="object-cover w-full rounded h-44  bg-base-200" src={img} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs dark:text-gray-400">{createdAt}</span>
                    <p>{description.substring(0, 150)}...</p>
                </div>
            </Link>
        )
    }


export default BlogCard;