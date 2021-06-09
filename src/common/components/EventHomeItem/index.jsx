import React from "react";
import { Link } from "react-router-dom";

const EventHomeItem = ({ img }) => {
  return (
    <Link
      to={`/detail/${1 + Math.ceil(Math.random() * 17)}`}
      className="flex p-3 bg-white shadow gap-x-3 rounded-2xl dark:bg-gray-900"
    >
      <img
        src={img || "https://dummyimage.com/500x500.jpg"}
        alt=""
        className="rounded-2xl h-80 w-80"
      />
      <div className="flex flex-col p-5 gap-y-3">
        <div className="flex gap-x-3">
          <div className="p-3 text-center text-indigo-800 bg-blue-200 rounded-2xl">
            <div className="font-medium">May</div>
            <div className="text-3xl font-bold">08</div>
          </div>
          <div>
            <h4 className="text-xl font-bold dark:text-gray-50">
              SomeFestival
            </h4>
            <p className="mt-auto text-gray-500">Thu 10:00</p>
          </div>
        </div>
        <div className="flex-grow pb-3 text-gray-400 border-b border-gray-200 dark:border-gray-500">
          Rmay not be possble to squeeze mos time in the day without sacrificing
          sleep. So how do you achieve
        </div>
        <div className="flex creater-section gap-x-3">
          <img
            src="https://dummyimage.com/50x50.jpg"
            alt=""
            className="w-12 h-12 rounded-full"
          />
          <div className="space-y-1">
            <div className="font-bold name dark:text-gray-50">SOme oneeeee</div>
            <div className="text-sm font-medium text-gray-400">Subcriver</div>
          </div>
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
              className="w-9 h-9 p-0.5 bg-white rounded-full"
            />
            <img
              src="https://i.pravatar.cc/50?u=2"
              alt=""
              className="w-9 h-9 p-0.5 bg-white rounded-full"
            />
            <img
              src="https://i.pravatar.cc/50?u=3"
              alt=""
              className="w-9 h-9 p-0.5 bg-white rounded-full"
            />
            <img
              src="https://i.pravatar.cc/50?u=5"
              alt=""
              className="w-9 h-9 p-0.5 bg-white rounded-full"
            />
            <img
              src="https://i.pravatar.cc/50?u=6"
              alt=""
              className="w-9 h-9 p-0.5 bg-white rounded-full"
            />
          </div>
          <div className="text-sm font-medium dark:text-gray-400">
            And 3000 people
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventHomeItem;
