import React from "react";

const EventInvitationItem = ({ pic, userName, location, eventName, id }) => {
  return (
    <div className="flex p-2 bg-white shadow rounded-xl gap-x-3 dark:bg-gray-900">
      <img
        src={pic || "http://fakeimg.pl/90x90?font=museo"}
        alt=""
        className="object-cover rounded-lg w-[90px] h-[90px]"
      />
      <div className="space-y-1">
        <div className="flex items-center gap-x-2">
          <img
            src={`http://loremflickr.com/80/80/human?random=3${id}`}
            alt=""
            className="rounded-full w-[32px] h-[32px]"
          />
          <span className="dark:text-gray-400">
            {userName || "Name of inviter"}
          </span>
        </div>
        <div className="font-semibold dark:text-gray-50">
          {eventName || "Name of Event"}
        </div>
        <div className="text-sm font-medium dark:text-gray-300">
          Saturday, Sep 14, 2019 at 20:30 PM
        </div>
        <div className="dark:text-gray-400">{location || "Some where"}</div>
      </div>
    </div>
  );
};

export default EventInvitationItem;
