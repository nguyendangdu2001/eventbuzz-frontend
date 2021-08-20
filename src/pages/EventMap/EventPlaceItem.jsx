import { LocationMarkerIcon } from "@heroicons/react/outline";
import React from "react";

const EventPlaceItem = ({ img, name, location, distance, peoples }) => {
  return (
    <div className="flex space-x-1">
      <div className="flex w-10/12 space-x-1">
        <div className="relative">
          <img
            src={img || "https://picsum.photos/100/100.jpg"}
            alt=""
            className="rounded-lg"
          />
          <div className="absolute flex items-center px-3 text-xs font-semibold uppercase bg-white rounded-md h-7 price top-1 left-1">
            Free
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-lg font-bold dark:text-gray-50">{name}</div>
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <LocationMarkerIcon className="w-6 h-6" />
            <span>{distance}</span>&nbsp; · &nbsp;<span>{location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="flex -space-x-2">
              {/* <div className="py-1 pl-1 pr-3 font-medium text-white bg-indigo-600 rounded-full">
            <span className="w-8 h-8 p-1 mr-1 font-semibold text-indigo-600 bg-white rounded-full">
              72
            </span>
            Participants
          </div> */}
              <img
                src="https://i.pravatar.cc/50?u=1"
                alt=""
                className="w-7 h-7 p-0.5 bg-white dark:bg-gray-700 rounded-full"
              />
              <img
                src="https://i.pravatar.cc/50?u=2"
                alt=""
                className="w-7 h-7 p-0.5 bg-white dark:bg-gray-700 rounded-full"
              />
              <img
                src="https://i.pravatar.cc/50?u=3"
                alt=""
                className="w-7 h-7 p-0.5 bg-white dark:bg-gray-700 rounded-full"
              />
              <img
                src="https://i.pravatar.cc/50?u=5"
                alt=""
                className="w-7 h-7 p-0.5 bg-white dark:bg-gray-700 rounded-full"
              />
              <img
                src="https://i.pravatar.cc/50?u=6"
                alt=""
                className="w-7 h-7 p-0.5 bg-white dark:bg-gray-700 rounded-full"
              />
            </div>
            <div className="text-sm font-medium dark:text-gray-400">
              {peoples}
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/12 px-2">
        <div className="overflow-hidden text-center bg-gray-200 rounded-lg shadow day dark:bg-gray-600 dark:text-gray-50">
          <div className="px-5 py-1 text-sm font-medium uppercase bg-red-400 month text-gray-50">
            sep
          </div>
          <div className="p-3 text-xl font-bold day">18</div>
        </div>
      </div>
    </div>
  );
};

export default EventPlaceItem;
