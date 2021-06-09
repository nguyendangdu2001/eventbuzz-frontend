import HeartIcon from "@components/icons/HeartIcon";
import UploadIcon from "@components/icons/UploadIcon";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";
import img2 from "./714745-beautiful-dj-music-wallpaper-2880x1800-hd.jpg";

const EventItem = () => {
  return (
    <div className="flex">
      <Link
        to="/detail"
        className="overflow-hidden duration-200 ease-in-out rounded-lg shadow-md group event-item dark:bg-gray-800 dark:hover:bg-gray-700 transform-gpu hover:-translate-y-3 hover:shadow-xl transition-allt"
      >
        <div
          className="flex items-start justify-between p-6 bg-no-repeat bg-cover img h-36 filter dark:contrast-125"
          style={{ backgroundImage: `url(${img2})` }}
        >
          <div className="flex items-center h-10 px-3 font-semibold uppercase bg-white rounded-md price">
            Free
          </div>
          <div className="flex space-x-3 action">
            <div className="w-10 h-10 p-2 transition-all duration-500 ease-in-out translate-y-3 bg-white rounded-full opacity-0 love transform-gpu group-hover:opacity-100 group-hover:translate-y-0">
              <HeartIcon />
            </div>
            <div className="w-10 h-10 p-2 transition-all duration-500 ease-in-out delay-100 translate-y-3 bg-white rounded-full opacity-0 upload transform-gpu group-hover:opacity-100 group-hover:translate-y-0">
              <UploadIcon />
            </div>
          </div>
        </div>
        <div className="px-6 py-3 divide-y divide-gray-300 dark:divide-gray-400 content">
          <div className="flex py-2 space-x-1 text-gray-600 dark:text-gray-400">
            <LocationMarkerIcon className="w-5 h-5" />
            <span>Some where</span>
          </div>
          <div className="flex py-2 space-x-4">
            <div className="space-y-2">
              <div className="text-lg font-semibold title dark:text-white">
                Indonesia - korea Conference
              </div>
              <div className="flex items-center space-x-1 font-medium dark:text-gray-400">
                <img
                  src="https://i.pravatar.cc/50"
                  alt=""
                  className="rounded-full w-9 h-9"
                />
                <span>Host</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EventItem;
