import React from "react";
import FriendRequestItem from "./FriendRequestItem";

const FriendRequestSection = () => {
  const request = [
    { userName: "Harold", time: "18 hours" },
    { userName: "Conner", time: "1 day" },
    { userName: "Peter", time: "2 days" },
  ];
  return (
    <div className="space-y-6">
      <h3 className="font-semibold text-gray-500 uppercase dark:text-gray-50">
        Friend Request
      </h3>
      <div className="space-y-3">
        {request.map((_, i) => (
          <FriendRequestItem
            key={i}
            userName={_.userName}
            time={_.time}
            id={i}
          />
        ))}
      </div>
    </div>
  );
};

export default FriendRequestSection;
