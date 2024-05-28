import React from "react";

const Loading = () => {
  return (
    <div
      className="relative fixed top-0 left-0 z-50 w-screen h-screen bg-base-300 flex items-center justify-center"
      style={{ zIndex: 100 }}
    >
      <div className="fixed animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary">
      </div>
      <div className="fixed text-white text-2xl font-bold">Loading...</div>
    </div>
  );
};

export default Loading;
