import React from "react";

const FriendItem = () => {
  return (
    <div className="flex items-center gap-x-4">
      <img
        src="http://loremflickr.com/80/80/human"
        alt=""
        className="w-8 h-8 rounded-full"
      />
      <span className="font-semibold dark:text-gray-50">Name</span>
      <div className="ml-auto text-sm font-medium text-gray-400">15 min</div>
    </div>
  );
};

export default FriendItem;
