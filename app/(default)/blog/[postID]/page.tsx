// a page for a blog post

// Path: main/app/%28default%29/blog/%5BpostID%5D/page.tsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DefaultArticle from '@/components/default/DefaultArticle';


export default function BlogPost() {

    return (
        <div className="max-w-6xl justify-center text-left mx-auto px-4 lg:px-8 prose mt-8 mb-8">
            <DefaultArticle />
        </div>
    );
}

