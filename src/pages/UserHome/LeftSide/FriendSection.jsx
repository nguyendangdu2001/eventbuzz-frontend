import React from "react";
import FriendItem from "./FriendItem";

const FriendSection = () => {
  return (
    <div className="space-y-6">
      <h3 className="font-semibold text-gray-500 uppercase dark:text-gray-50">
        Friends
      </h3>
      <div className="space-y-5">
        <FriendItem />
        <FriendItem />
        <FriendItem />
      </div>
    </div>
  );
};

export default FriendSection;
