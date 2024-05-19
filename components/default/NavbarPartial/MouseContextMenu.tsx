import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const MouseContextMenu = ({
  showContextMenu,
}: {
  showContextMenu: boolean;
}) => {
  //Position is mouse position
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [timeUserEntered, setTimeUserEntered] = useState(new Date());
  const [timeDifference, setTimeDifference] = useState(0);
  const [timeDifferenceText, setTimeDifferenceText] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies([
    "user",
    "language",
    "theme",
  ]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX + 20, y: e.clientY + 20 });

      //Calculate time difference
      const currentTime = new Date();
      const difference = currentTime.getTime() - timeUserEntered.getTime();
      setTimeDifference(difference);

      //Calculate time difference text
      const seconds = Math.floor(difference / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);

      var text = "";
      if (hours > 0) {
        text += hours + "h ";
      }
      if (minutes > 0) {
        text += (minutes % 60) + "m ";
      }
      text += (seconds % 60) + "s";

      setTimeDifferenceText(text);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <>
      {showContextMenu && (
        <div
          className="absolute z-10 hidden md:block bg-base-100 shadow-lg rounded-lg"
          style={{ top: position.y, left: position.x }}
        >
          <div className="bg-base-100 shadow-lg rounded-lg">
            <div className="p-2">
              <p className="text-sm">stats</p>
              <p className="text-sm">
                Ent: {timeUserEntered.toLocaleTimeString()}
              </p>
              <p className="text-sm">Still: {timeDifferenceText}</p>
              <p className="text-sm">user: {cookies.user}</p>
              <p className="text-sm">
                lang: {cookies.language || localStorage.getItem("language")}
              </p>
              <p className="text-sm">
                theme: {cookies.theme || localStorage.getItem("theme")}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MouseContextMenu;
