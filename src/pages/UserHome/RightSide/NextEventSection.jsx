import React from "react";
import EventCalendarItem from "./EventCalendarItem";

const NextEventSection = () => {
  return (
    <div className="space-y-6">
      <h3 className="font-semibold text-gray-500 uppercase dark:text-gray-50">
        Recent Event
      </h3>
      <div className="divide-y divide-gray-500 ">
        {[...Array(3)].map((_, i) => (
          <EventCalendarItem key={i} />
        ))}
      </div>
    </div>
  );
};

export default NextEventSection;
