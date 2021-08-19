import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { LocationMarkerIcon, TrashIcon } from "@heroicons/react/outline";
import { lazy } from "react";
import gsap from "gsap";
import EventCalendarItem from "./EventCalendarItem";

// const Calendar = lazy(() => import("./Calendar"));

const UserCalendar = ({ className }) => {
  const calendarContainer = useRef(null);
  let q = gsap.utils.selector(calendarContainer);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(q(".main-axis"), {
      opacity: 0,
    });
    tl.from(q(".day-item"), {
      y: 200,
      stagger: {
        each: 0.1,
        from: 0,
        grid: "auto",
      },
      duration: 0.5,
    });
    tl.from(
      q(".day-circle"),
      {
        opacity: 0,
        stagger: {
          each: 0.1,
          from: 0,
          grid: "auto",
        },
      },
      "-=0.5"
    );
    tl.from(
      q(".day-name"),
      {
        opacity: 0,
        stagger: {
          each: 0.1,
          from: 0,
          grid: "auto",
        },
      },
      "-=0.5"
    );
    tl.from(q(".calendar-event"), {
      opacity: 0,
      stagger: {
        each: 0.1,
        from: 0,
        grid: "auto",
      },
      duration: 0.2,
    });

    return () => {};
  }, []);
  return (
    <div className={`${className} container mx-auto px-6 space-y-6 py-2`}>
      <div className="text-3xl font-bold dark:text-gray-50">Calendar</div>
      <div className="relative" ref={calendarContainer}>
        <div className="absolute top-0 bottom-0 left-0 w-0.5 -translate-x-1/2 bg-blue-500 main-axis"></div>
        <div className="space-y-4">
          <div className="relative space-y-4 day-item">
            <div className="relative pl-4 text-xl font-semibold dark:text-gray-50">
              <div className="absolute left-0 w-3 h-3 -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full top-1/2 shadow-neon day-circle"></div>
              <div className="day-name">
                <span className="">Tuesday, 17 August 2021</span>
                <div className="text-sm font-medium text-gray-400">
                  2 events
                </div>
              </div>
            </div>
            <div className="flex ml-4 space-x-2 overflow-auto">
              <EventCalendarItem img="https://shopkingsgate.co.uk/wp-content/uploads/2019/10/GAMING-2019_DigitalArtboards_Mobile-banner.jpg" />
              <EventCalendarItem img="https://i.pinimg.com/originals/a5/4e/e9/a54ee9e19a708ff036b65ed6b29e5113.png" />
            </div>
            <div className="relative space-y-4 day-item">
              <div className="relative pl-4 text-xl font-semibold dark:text-gray-50">
                <div className="absolute left-0 w-3 h-3 -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full top-1/2 shadow-neon day-circle"></div>
                <div className="day-name">
                  <span className="">Tuesday, 17 August 2021</span>
                  <div className="text-sm font-medium text-gray-400">
                    3 events
                  </div>
                </div>
              </div>
              <div className="flex ml-4 space-x-2 overflow-x-auto">
                <EventCalendarItem img="https://img.freepik.com/free-vector/music-event-poster-template-with-colorful-shapes_1361-1591.jpg?size=626&ext=jpg" />
                <EventCalendarItem img="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/131937051/original/9718ba4691185f5300554f3f7da7c5adc4dae886/poster-design-for-events.png" />
                <EventCalendarItem img="https://channel.mediacdn.vn/thumb_w/640/2019/11/8/photo-2-15732207505351867040976.jpg" />
              </div>
            </div>
            <div className="relative space-y-4 day-item">
              <div className="relative pl-4 text-xl font-semibold dark:text-gray-50">
                <div className="absolute left-0 w-3 h-3 -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full top-1/2 shadow-neon day-circle"></div>
                <div className="day-name">
                  <span className="">Tuesday, 17 August 2021</span>
                  <div className="text-sm font-medium text-gray-400">
                    2 events
                  </div>
                </div>
              </div>
              <div className="flex ml-4 space-x-2 overflow-x-auto">
                <EventCalendarItem img="https://pbs.twimg.com/media/Cw_pksQXEAAZkWg.jpg" />
                <EventCalendarItem img="https://asialive365.com/wp-content/uploads/2016/11/Alan-Walker-Announce-Poster-Master.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default styled(UserCalendar)``;
