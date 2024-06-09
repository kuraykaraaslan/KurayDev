import React from 'react';

interface RadialProgressBarProps {
    progress: number;
}

// RadialProgressBar component is a circular progress bar that displays the progress percentage. have a text label that shows the progress percentage.

function RadialProgressBar({ progress }: RadialProgressBarProps) {

    const radialProgress = progress * 140 / 100;
    return (
        <div className="p-6 bg-white rounded-lg shadow-md w-80 mx-auto">
            <h2 className="text-lg font-semibold text-gray-700">Progress</h2>
            <div className="mt-4 p-4 flex flex-col items-center">
            <svg width="100" height="100" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" strokeWidth="10" className="stroke-base-100" strokeDasharray={`140, 360`} transform='rotate(180, 50, 50)'/>
                <text x="50" y="40" textAnchor="middle" dy="7" fontSize="10" fill="#007bff">{progress}%</text>
                <circle cx="50" cy="50" r="45" fill="none" strokeWidth="10" className="stroke-primary" strokeDasharray={`${radialProgress}, 360`} transform='rotate(180, 50, 50)'/>
            </svg>
            </div>
        </div>
    );
}

export default RadialProgressBar;