import HeartIcon from "@components/icons/HeartIcon";
import UploadIcon from "@components/icons/UploadIcon";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import img2 from "./714745-beautiful-dj-music-wallpaper-2880x1800-hd.jpg";

const EventItem = (
  {
    id = 0,
    name = "Dream World Wide In Jakata",
    img = img2,
    price = 0,
    tag = [],
    date = "Saturday, Sep 14, 2019 at 20:30 PM",
    host = { name: "Someone" },
    location,
  },
  ref
) => {
  return (
    <Link
      ref={ref}
      to={`/detail/${id}`}
      className="block overflow-hidden duration-200 ease-in-out rounded-lg shadow-md event-item group dark:bg-gray-900 dark:hover:bg-gray-800 transform-gpu hover:-translate-y-3 hover:shadow-xl transition-allt"
    >
      <div
        className="flex items-start justify-between p-6 bg-no-repeat bg-cover img h-52 filter dark:contrast-125"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="flex items-center h-10 px-3 font-semibold uppercase bg-white rounded-md price">
          {price === 0 ? "Free" : `${Number.parseInt(price)} $`}
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
      <div className="px-6 py-6 divide-y divide-gray-300 content">
        <div className="flex py-3 space-x-4">
          <div className="mb-auto overflow-hidden text-center bg-gray-200 rounded-lg shadow day dark:bg-gray-600 dark:text-gray-50">
            <div className="px-5 py-1 text-sm font-medium uppercase bg-red-400 month text-gray-50">
              {date?.split(",")?.[1].trim().split(" ")?.[0]}
            </div>
            <div className="p-3 text-xl font-bold day h-[52px]">
              {" "}
              {date?.split(",")?.[1].trim().split(" ")?.[1]}
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-lg font-semibold title dark:text-white">
              {name}
            </div>
            <div className="flex items-center space-x-1 font-medium dark:text-gray-400">
              <img
                src={`https://i.pravatar.cc/50?u=${id}`}
                alt=""
                className="rounded-full w-9 h-9"
              />
              <span>{!!host?.name ? host.name : "Someone"}</span>
            </div>
          </div>
        </div>
        <div className="flex py-3 space-x-1 text-gray-600 dark:text-gray-400">
          <LocationMarkerIcon className="w-5 h-5" />
          <span>{location?.name || "Some where"}</span>
        </div>
      </div>
    </Link>
  );
};

export default forwardRef(EventItem);
