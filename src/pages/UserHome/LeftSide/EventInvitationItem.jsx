import React from "react";

const EventInvitationItem = () => {
  return (
    <div className="flex p-2 bg-white shadow rounded-xl gap-x-3 dark:bg-gray-900">
      <img
        src="http://fakeimg.pl/90x90?font=museo"
        alt=""
        className="object-cover rounded-lg w-[90px] h-[90px]"
      />
      <div className="space-y-1">
        <div className="flex items-center gap-x-2">
          <img
            src="http://placekitten.com/32/32"
            alt=""
            className="rounded-full"
          />
          <span className="dark:text-gray-400">Name of inviter</span>
        </div>
        <div className="font-semibold dark:text-gray-50">Name of Event</div>
        <div className="text-sm font-medium dark:text-gray-300">
          Saturday, Sep 14, 2019 at 20:30 PM
        </div>
        <div className="dark:text-gray-400">Some where</div>
      </div>
    </div>
  );
};

export default EventInvitationItem;
