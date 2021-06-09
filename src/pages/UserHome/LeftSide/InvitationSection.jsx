import React from "react";
import EventInvitationItem from "./EventInvitationItem";

const InvitationSection = () => {
  return (
    <div className="space-y-6">
      <h3 className="font-semibold text-gray-500 uppercase dark:text-gray-50">
        Invitation
      </h3>
      <div className="space-y-5">
        <EventInvitationItem />
        <EventInvitationItem />
        <EventInvitationItem />
      </div>
    </div>
  );
};

export default InvitationSection;
