import { LocationMarkerIcon } from "@heroicons/react/outline";
import React from "react";

const EventCalendarItem = () => {
  return (
    <div className="flex gap-x-2 py-2.5 first:pt-0">
      <img src="" alt="" />
      <div>
        <div className="flex items-center gap-x-1">
          <LocationMarkerIcon className="w-4 h-4 dark:text-gray-300" />
          <span className="text-sm dark:text-gray-300">Some where</span>
        </div>
        <div className="font-bold line-clamp-1 dark:text-gray-50">
          SOme event
        </div>
        <div className="capitalize dark:text-gray-200">in 2 days</div>
      </div>
    </div>
  );
};

export default EventCalendarItem;
