import React from "react";

const Loading = () => {
  //Full size loading spinner
  return (
    <div
      className="fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center"
      style={{ zIndex: 100 }}
    >
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
    </div>
  );
};

export default Loading;
