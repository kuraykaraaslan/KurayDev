import React from 'react';

interface BreadCrumbProps {
    // Define the props for your component here
}

const BreadCrumb: React.FC<BreadCrumbProps> = (props) => {
    // Implement your component logic here

    return (
        <div className="breadcrumbs text-sm py-2 px-4 bg-base-200 mt-2">
            <ul>
                <li><a>Home</a></li>
                <li><a>Documents</a></li>
                <li>Add Document</li>
            </ul>
        </div>
    );
};

export default BreadCrumb;