import React from "react";
import FriendSection from "./FriendSection";
import InvitationSection from "./InvitationSection";

const LeftSIde = () => {
  return (
    <div className="min-h-full p-6 bg-gray-100 space-y-7 dark:bg-transparent">
      <InvitationSection />
      <FriendSection />
    </div>
  );
};

export default LeftSIde;
