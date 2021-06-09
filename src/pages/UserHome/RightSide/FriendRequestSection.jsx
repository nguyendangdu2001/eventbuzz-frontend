import React from "react";
import FriendRequestItem from "./FriendRequestItem";

const FriendRequestSection = () => {
  return (
    <div className="space-y-6">
      <h3 className="font-semibold text-gray-500 uppercase dark:text-gray-50">
        Friend Request
      </h3>
      <div className="space-y-3">
        {[...Array(3)].map((_, i) => (
          <FriendRequestItem key={i} />
        ))}
      </div>
    </div>
  );
};

export default FriendRequestSection;
