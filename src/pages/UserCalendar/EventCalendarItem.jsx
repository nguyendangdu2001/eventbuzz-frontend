import { LocationMarkerIcon, TrashIcon } from "@heroicons/react/outline";
import React from "react";

const EventCalendarItem = ({ img, name, location, time, onClick }) => {
  return (
    <button
      className="overflow-hidden transition-transform transform bg-white rounded-md shadow dark:bg-gray-800 group w-[300px] flex-shrink-0 calendar-event cursor-pointer text-left"
      onClick={onClick}
    >
      <div
        className="relative h-56 bg-cover"
        style={{
          backgroundImage: `url(${
            img ||
            "https://cdn.dribbble.com/users/1626229/screenshots/15031394/media/eef54ce87566d4217c4340a3049ff77c.jpg?compress=1&resize=1000x750"
          })`,
        }}
      >
        <div className="flex items-end w-full h-full bg-gradient-to-t from-blue-800 dark:from-gray-900">
          <div className="p-4">
            <div className="flex items-center space-x-1 font-medium text-green-300">
              <LocationMarkerIcon className="w-6 h-6" />
              <div className="text-sm">{location || "Some where"}</div>
            </div>

            <div className="font-semibold text-gray-50">
              {name || "Name of the event"}
            </div>
            <div className="text-sm text-gray-50">
              {time || "Saturday, Sep 14, 2019 at 20:30 PM"}
            </div>
          </div>
        </div>
        <div className="absolute p-2 text-gray-100 transition-opacity duration-300 ease-in-out bg-green-600 rounded opacity-0 bg-opacity-80 top-2 left-2 group-hover:opacity-100">
          <LocationMarkerIcon className="w-6 h-6" />
        </div>
        <div className="absolute p-2 text-gray-100 transition-opacity duration-300 ease-in-out bg-gray-400 rounded opacity-0 bg-opacity-80 top-2 right-2 group-hover:opacity-100">
          <TrashIcon className="w-6 h-6" />
        </div>
      </div>
    </button>
  );
};

export default EventCalendarItem;
