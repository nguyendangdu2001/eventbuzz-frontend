import React from "react";
import FriendRequestSection from "./FriendRequestSection";
import NextEventSection from "./NextEventSection";

const RightSide = () => {
  return (
    <div className="min-h-full p-6 bg-gray-100 space-y-7 dark:bg-transparent">
      <NextEventSection />
      <FriendRequestSection />
    </div>
  );
};

export default RightSide;
