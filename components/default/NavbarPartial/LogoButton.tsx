import React, { useEffect, useState } from "react";
import Link from "next/link";

import dynamic from "next/dynamic";

const MouseContextMenu = dynamic(() => import("./MouseContextMenu"), {
  ssr: false,
});

const LogoButton = () => {
  const [showContextMenu, setShowContextMenu] = useState(false);

  const makeVisible = (event: any) => {
    event.preventDefault();
    setShowContextMenu(true);
  };

  const makeInvisible = () => {
    setShowContextMenu(false);
  };

  return (
    <>
      <Link
        href="/"
        className="btn btn-ghost normal-case text-xl rounded-full"
        onContextMenu={makeVisible}
        onMouseLeave={makeInvisible}
      >
        <div className="flex items-center space-x-2">
          <div className="text-lg font-semibold">kuray.dev</div>
        </div>
      </Link>
      {/*@ts-ignore*/}
      <MouseContextMenu showContextMenu={showContextMenu} />
    </>
  );
};

export default LogoButton;
