import HeartIcon from "@components/icons/HeartIcon";
import UploadIcon from "@components/icons/UploadIcon";
import React from "react";
import { Link } from "react-router-dom";
import img2 from "./714745-beautiful-dj-music-wallpaper-2880x1800-hd.jpg";

const EventItem = () => {
  return (
    <Link
      to="/detail"
      className="event-item rounded-lg shadow-2xl overflow-hidden dark:bg-gray-900"
    >
      <div
        className="img h-52 bg-cover bg-no-repeat p-6 flex justify-between items-start filter dark:contrast-125 dr"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div className="price rounded-md bg-white font-semibold uppercase h-10 px-3 flex items-center">
          Free
        </div>
        <div className="action flex space-x-3">
          <div className="love h-10 w-10 bg-white rounded-full p-2">
            <HeartIcon />
          </div>
          <div className="upload h-10 w-10 bg-white rounded-full p-2">
            <UploadIcon />
          </div>
        </div>
      </div>
      <div className="content px-6 py-10 flex space-x-4">
        <div className="day text-center space-y-2">
          <div className="month uppercase font-medium text-sm text-blue-500">
            sep
          </div>
          <div className="day font-bold text-xl dark:text-white">18</div>
        </div>
        <div className="space-y-3">
          <div className="title font-semibold text-lg dark:text-white">
            Indonesia - korea Conference
          </div>
          <div className="place text-gray-600 font-medium dark:text-gray-400">
            Some where
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventItem;
