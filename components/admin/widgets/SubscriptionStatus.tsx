interface RadialProgressBarProps {
  progress: number;
}


function SubscriptionStatus({ progress }: RadialProgressBarProps) {

  const radialProgress = progress * 140 / 100;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-64 mx-auto">
      <h2 className="text-lg font-semibold text-gray-700">
        Online Devices & Connectors
      </h2>
      <div className="mt-4 flex flex-col items-center">
        <div className="relative w-48 h-32 flex items-center justify-center overflow-hidden">
          <svg width="100" height="100" viewBox="0 0 100 100" className="translate-y-6">
            <circle cx="50" cy="50" r="45" fill="none" strokeWidth="10" className="stroke-base-100" strokeDasharray={`140, 360`} transform='rotate(180, 50, 50)' />
            <circle cx="50" cy="50" r="45" fill="none" strokeWidth="10" className="stroke-primary" strokeDasharray={`${radialProgress}, 360`} transform='rotate(180, 50, 50)' />
          </svg>
          <div className="absolute translate-y-3">
            <span className="text-xl font-bold text-gray-800">0</span>
            <span className="text-xl text-gray-800"> of 3</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionStatus;