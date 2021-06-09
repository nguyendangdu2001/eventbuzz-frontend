import { GlobeAltIcon } from "@heroicons/react/outline";
import { useScrollPosition } from "@hooks/useScrollPosition";
import FacebookSquareIcon from "@icon/FacebookSquareIcon";
import InstagramSquareIcon from "@icon/InstagramSquareIcon";
import React, { useState } from "react";
import useMeasure from "react-use-measure";

const SideBar = () => {
  const [ref, bound] = useMeasure();
  // const bound = {};
  const [direction, setDirection] = useState("");
  const [stickyStyle, setStickyStyle] = useState();
  useScrollPosition(
    ({ currPos, prevPos }) => {
      console.log(direction);
      //   console.log(currPos.y - prevPos.y > 0, currPos, prevPos);

      if (currPos.y - prevPos.y > 0) {
        if (direction === "down") return;
        // if (currPos.y - bound.top && stickyStyle?.direction !== "down")
        setStickyStyle({
          container: { top: window.innerHeight - bound?.height },
          distance:
            currPos.y > Math.abs(window.innerHeight - bound?.height)
              ? currPos.y - Math.abs(window.innerHeight - bound?.height) - 88
              : 0,
        });
        setDirection("down");
      } else {
        if (direction === "up") return;
        setStickyStyle({
          container: { bottom: window.innerHeight - bound?.height - 88 },
          distance: Math.max(
            0,
            currPos.y + (window.innerHeight - bound?.height) - 88
          ),
        });
        setDirection("up");
      }
    },
    [bound, direction],
    null,
    true,
    1000 / 60
  );
  return (
    <>
      <div style={{ height: stickyStyle?.distance }}></div>
      <div
        className="sticky space-y-4"
        style={stickyStyle?.container}
        ref={ref}
      >
        <div className="p-4 space-y-2 bg-white shadow dark:bg-gray-900 rounded-3xl">
          <h4 className="text-xl font-bold dark:text-gray-50">Connect</h4>
          <div className="space-y-1 dark:text-gray-300">
            <div className="flex space-x-1 font-medium">
              <GlobeAltIcon
                className="w-6 h-6 text-gray-500 stroke-1"
                strokeWidth={1}
              />
              <span>https://bb.agency/</span>
            </div>
            <div className="flex space-x-1 font-medium">
              <FacebookSquareIcon
                className="w-6 h-6 text-gray-500 stroke-2"
                strokeWidth={1}
              />
              <span>https://bb.agency/</span>
            </div>
            <div className="flex space-x-1 font-medium">
              <InstagramSquareIcon
                className="w-6 h-6 text-gray-500 stroke-2"
                strokeWidth={1}
              />
              <span>https://bb.agency/</span>
            </div>
          </div>
        </div>
        <div className="p-4 space-y-2 bg-white shadow dark:bg-gray-900 rounded-3xl">
          <h4 className="text-xl font-bold dark:text-gray-50">Picture</h4>
          <div className="grid grid-cols-3 gap-x-1 gap-y-1">
            {[...Array(9)].map((_, i) => (
              <img
                src={`https://picsum.photos/51/51.jpg?random=${i}`}
                alt=""
                className="object-cover w-full h-full"
              />
            ))}
          </div>
        </div>
        <div className="p-4 space-y-2 bg-white shadow dark:bg-gray-900 rounded-3xl">
          <h4 className="text-xl font-bold dark:text-gray-50">Friends</h4>
          <div className="grid grid-cols-3 gap-x-2 gap-y-2">
            {[...Array(9)].map((_, i) => (
              <div className="w-full h-full" key={i}>
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={`https://picsum.photos/50/50.jpg?random=${i}`}
                    alt=""
                    className="absolute object-cover w-full h-full rounded-md"
                  />
                </div>
                <div>
                  <span className="font-semibold dark:text-gray-50">Name </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
