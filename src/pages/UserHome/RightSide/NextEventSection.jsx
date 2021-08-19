import React from "react";
import EventCalendarItem from "./EventCalendarItem";

const NextEventSection = () => {
  return (
    <div className="space-y-6">
      <h3 className="font-semibold text-gray-500 uppercase dark:text-gray-50">
        Recent Event
      </h3>
      <div className="divide-y divide-gray-500 ">
        <EventCalendarItem
          name="Origami Crane Wedding Planners"
          locationName="Alabama"
        />
        <EventCalendarItem
          name="Hyde Park Event Design"
          locationName="Massachusetts"
        />
        <EventCalendarItem
          name="Polka Dot Party Planners"
          locationName="Michigan"
        />
      </div>
    </div>
  );
};

export default NextEventSection;
