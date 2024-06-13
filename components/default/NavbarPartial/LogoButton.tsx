import React, { useEffect, useState } from "react";
import Link from "next/link";

import dynamic from "next/dynamic";

// Next Auth
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"

//i18n
import { withTranslation } from "react-i18next";
import i18n from "@/libs/localize/localize";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faUser, faRightToBracket,faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
//fa righttobucket

const MouseContextMenu = dynamic(() => import("./MouseContextMenu"), {
  ssr: false,
});

const LogoButton = () => {
  const [showContextMenu, setShowContextMenu] = useState(false);

  const { data: session } = useSession();
  const { t } = i18n;


  const makeVisible = (event: any) => {
    event.preventDefault();
    setShowContextMenu(true);
  };

  const makeInvisible = () => {
    setShowContextMenu(false);
  };

  const [showMenu, setShowMenu] = useState(false);

  const goToHome = () => {
    window.location.href = "/";
  }

  const toggleMenu = (event: any) => {
    event.preventDefault();
    setShowMenu(!showMenu);
  
  };

  return (
    <div className="relative">
      <div tabIndex={0} >
        <Link
          href="/"
          className="btn btn-ghost normal-case text-xl rounded-full"
          onContextMenu={toggleMenu}
          
        >
          <div className="flex items-center space-x-2">
            {session && session.user?.image ? (
              <img
                src={session.user.image}
                alt="User Image"
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <FontAwesomeIcon icon={faCode} className="w-6 h-6" />
            )}
            <div className="text-lg font-semibold">kuray.dev</div>
          </div>
        </Link>
        {/*@ts-ignore*/}
      </div>
      <ul tabIndex={0} className="absolute z-[1] menu p-2 mt-4 shadow bg-base-100 rounded-box w-32 text-base-content" style={{ display: showMenu ? "block" : "none" }}>
        {session ? (
          <>
          <li>
            <button
              onClick={() => signOut()}
              className="menu-title"
            >
              <FontAwesomeIcon icon={faRightFromBracket} className="w-4 h-4 mr-2 mt-1" />
              {t("NAVIGATION.LOGOUT")}
            </button>
          </li>
          </>
        ) : (
          <>
          <li>
            <Link href="/auth/login" className="menu-title">
              <FontAwesomeIcon icon={faRightToBracket} className="w-4 h-4 mr-2" />
              {t("NAVIGATION.LOGIN")}
            </Link>
          </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default LogoButton;
