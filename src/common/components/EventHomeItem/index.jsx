import {
  BookmarkIcon,
  LocationMarkerIcon,
  ShareIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";

const EventHomeItem = ({ img }) => {
  return (
    <Link
      to={`/detail/${1 + Math.ceil(Math.random() * 17)}`}
      className="block p-3 space-y-2 bg-white rounded-2xl dark:bg-gray-900"
    >
      <div className="flex justify-between">
        <div className="flex gap-x-3">
          <div className="p-3 text-center text-indigo-800 bg-blue-200 rounded-2xl dark:bg-blue-300 dark:text-indigo-800">
            <div className="font-medium">May</div>
            <div className="text-3xl font-bold">08</div>
          </div>
          <div>
            <h4 className="text-xl font-bold dark:text-gray-50">
              SomeFestival
            </h4>
            <p className="mt-auto text-gray-500">Thu 10:00</p>
            <div className="flex space-x-1 text-gray-600 dark:text-gray-400">
              <LocationMarkerIcon className="w-5 h-5" />
              <span>Some where</span>
            </div>
          </div>
        </div>
        <div>
          <div className="p-2 text-yellow-500 bg-gray-100 rounded-lg dark:bg-gray-700">
            <BookmarkIcon className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="relative aspect-w-16 aspect-h-7">
        <img
          src={img || "https://dummyimage.com/855x374.jpg"}
          alt=""
          className="absolute object-cover w-full h-full rounded-lg"
        />
      </div>

      <div className="flex flex-col gap-y-3">
        <div className="flex-grow pb-3 text-gray-400 border-b border-gray-200 dark:border-gray-500">
          Rmay not be possble to squeeze mos time in the day without sacrificing
          sleep. So how do you achieve
        </div>
        {/* <div className="flex creater-section gap-x-3">
          <img
            src="https://dummyimage.com/50x50.jpg"
            alt=""
            className="w-12 h-12 rounded-full"
          />
          <div className="space-y-1">
            <div className="font-bold name dark:text-gray-50">SOme oneeeee</div>
            <div className="text-sm font-medium text-gray-400">Subcriver</div>
          </div>
        </div> */}
        <div className="flex justify-between">
          <div className="flex items-center space-x-1">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/50?u=${i}`}
                  alt=""
                  className="w-9 h-9 p-0.5 bg-white rounded-full dark:bg-gray-600"
                />
              ))}
            </div>
            <div className="text-sm font-medium dark:text-gray-400">+ 3000</div>
          </div>
          <div className="flex space-x-3 dark:text-gray-400">
            <div className="flex items-center space-x-2 font-medium">
              <div className="p-2 text-red-600 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-green-500">
                <UsersIcon className="w-5 h-5"></UsersIcon>
              </div>
              <span>30</span>
            </div>
            <div className="flex items-center space-x-2 font-medium">
              <div className="p-2 text-blue-600 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-blue-400">
                <ShareIcon className="w-5 h-5"></ShareIcon>
              </div>
              <span>30</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventHomeItem;
