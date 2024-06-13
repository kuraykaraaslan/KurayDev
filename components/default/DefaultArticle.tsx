//default article

import React from "react";
import { Post } from "@/types/Post";

export default function DefaultArticle({ title, content , slug, category }: Post) {


    return (
        <div className="max-w-7xl justify-center text-left mx-auto px-4 lg:px-8 prose mb-8">
        
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
}