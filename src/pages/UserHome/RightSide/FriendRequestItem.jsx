import { XIcon } from "@heroicons/react/outline";
import React from "react";

const FriendRequestItem = () => {
  return (
    <div className="p-4 space-y-2 bg-white rounded-lg shadow dark:bg-gray-900 dark:text-gray-50">
      <div className="flex space-x-2">
        <img
          src="https://dummyimage.com/50x50.png"
          alt=""
          className="rounded-full"
        />
        <div>
          <span className="font-semibold">Someone</span> want to be your friend
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <div className="flex-auto p-3 font-semibold text-center text-white bg-green-500 rounded-lg dark:bg-green-800">
          Accept
        </div>

        <div className="flex justify-center flex-auto h-full p-3 rounded-lg ring-2 ring-red-500">
          <XIcon className="flex w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default FriendRequestItem;
