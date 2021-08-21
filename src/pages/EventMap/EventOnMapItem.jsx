import HeartIcon from "@icon/HeartIcon";
import UploadIcon from "@icon/UploadIcon";
import React, { memo } from "react";
import locationMarker from "@assets/locationMarker.png";
import img2 from "./714745-beautiful-dj-music-wallpaper-2880x1800-hd.jpg";

const EventOnMapItem = ({
  isHover,
  content,
  $hover,
  $dimensionKey,
  $getDimensions,
  $geoService,
  $onMouseAllow,
}) => {
  const mapWidth = $geoService.getWidth();
  const mapHeight = $geoService.getHeight();
  const markerDim = $getDimensions($dimensionKey);
  console.log(markerDim);
  return (
    <div className={`relative ${$hover ? "z-10 scale-110" : ""}`}>
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
        <img src={locationMarker} alt="" />
      </div>

      <div
        className={`absolute -translate-x-1/2 ${
          markerDim?.y > 405 + 8 - 25 ? "bottom-full mb-2" : "top-full mt-2"
        }  h-[325px] w-[325px] transition-opacity ${
          $hover ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          // style={{ borderRadius: "0.5rem", overflow: "hidden" }}
          className="h-full overflow-hidden font-sans text-sm leading-normal tracking-normal transition-all duration-200 ease-in-out bg-white rounded-lg shadow-md group event-item dark:bg-gray-900 dark:hover:bg-gray-800 hover:shadow-xl"
        >
          <div
            className="flex items-start justify-between p-6 bg-no-repeat bg-cover img h-36 filter dark:contrast-125"
            style={{ backgroundImage: `url(${img2})` }}
          >
            <div className="flex items-center h-10 px-3 font-sans font-semibold text-black uppercase bg-white rounded-md price">
              Free
            </div>
            <div className="hidden space-x-3 action">
              <div className="w-10 h-10 p-2 transition-all duration-500 ease-in-out translate-y-3 bg-white rounded-full opacity-0 love transform-gpu group-hover:opacity-100 group-hover:translate-y-0">
                <HeartIcon />
              </div>
              <div className="w-10 h-10 p-2 transition-all duration-500 ease-in-out delay-100 translate-y-3 bg-white rounded-full opacity-0 upload transform-gpu group-hover:opacity-100 group-hover:translate-y-0">
                <UploadIcon />
              </div>
            </div>
          </div>
          <div className="flex px-6 py-10 space-x-4 content">
            <div className="overflow-hidden text-center bg-gray-300 rounded-lg shadow day dark:bg-gray-600 dark:text-gray-50">
              <div className="flex justify-center px-5 py-1 text-sm font-medium uppercase bg-red-400 month text-gray-50">
                sep
              </div>
              <div className="p-3 text-xl font-bold day">18</div>
            </div>
            <div className="space-y-3">
              <div className="text-base font-bold text-black title dark:text-white">
                Indonesia - korea Conference
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(EventOnMapItem);
