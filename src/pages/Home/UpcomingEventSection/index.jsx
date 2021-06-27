import EventItem from "@components/EventItem/EventItem";
import React, { useEffect } from "react";
import { fakeData } from "@data/fakeData";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const UpcomingEventSection = () => {
  const eventContainer = useRef(null);
  let q = gsap.utils.selector(eventContainer);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: { trigger: q(".event-item"), start: "top 80%" },
    });
    tl.from(q(".event-item"), {
      opacity: 0,
      stagger: {
        each: 0.1,
        from: 0,
        grid: "auto",
      },
      ease: "Power2.easeIn",
    });
    tl.from(
      q(".price"),
      {
        width: 0,
        stagger: {
          each: 0.1,
          from: 0,
          grid: "auto",
        },
        ease: "Power2.easeIn",
      },
      0.25
    );
    return () => {};
  }, [q]);
  return (
    <div className="py-6 space-y-20 upcoming-event">
      <div className="flex flex-col space-y-8 header lg:justify-between lg:items-center lg:flex-row lg:space-y-0">
        <h1 className="text-3xl font-bold dark:text-white">Upcoming Event</h1>
        <div className="flex flex-wrap gap-x-3 gap-y-3">
          <select
            name=""
            placeholder="Weekdays"
            className="flex-1 py-3 font-semibold bg-gray-200 border-none rounded-md dark:bg-gray-800 pr-13 pl-7"
          >
            <option value="" disabled selected>
              Weekdays
            </option>
            <option value="1">Monday</option>
          </select>
          <select
            name=""
            placeholder="Event Type"
            className="flex-1 py-3 font-semibold bg-gray-200 border-none rounded-md dark:bg-gray-800 pr-13 pl-7"
          >
            <option value="" disabled selected>
              Event Type
            </option>
          </select>
          <select
            name=""
            placeholder="Event Type"
            className="flex-1 py-3 font-semibold bg-gray-200 border-none rounded-md dark:bg-gray-800 pr-13 pl-7"
          >
            <option value="" disabled selected>
              Any Category
            </option>
          </select>
        </div>
      </div>
      <div
        className="grid grid-flow-row grid-cols-1 event-list md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 lg:gap-x-16 lg:gap-y-10"
        ref={eventContainer}
      >
        {fakeData.map((_, i) => (
          <EventItem
            key={i}
            {..._}
            // ref={(el) => (eventItems.current[i] = el)}
          />
        ))}
      </div>
      <div className="flex items-center justify-center load-more">
        <div className="px-6 py-4 text-lg font-bold text-blue-600 bg-gray-200 load-more__btn rounded-xl">
          Load More Event
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventSection;
