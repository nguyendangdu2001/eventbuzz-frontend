import EventItem from "@components/EventItem/EventItem";
import { fakeData } from "@data/fakeData";
import { AnimateSharedLayout, m } from "framer-motion";
import React, { useEffect, useState } from "react";

const Search = () => {
  const [key, setKey] = useState("");
  const [filterArray, setFilterArray] = useState(fakeData);
  useEffect(() => {
    const filterArray2 = fakeData.filter((v) => {
      const regex = new RegExp(`${key}`, "g");
      return v?.name.match(regex);
    });
    console.log(filterArray2);
    setFilterArray(filterArray2);
    return () => {};
  }, [key]);
  return (
    <div className="container pt-8 mx-auto space-y-14">
      <form className="space-y-14">
        <div className="flex flex-col space-x-4 md:flex-row">
          <input
            className="w-auto text-4xl font-bold placeholder-gray-400 bg-transparent border-b-2 border-none form-border-b dark:bg-transparent"
            type="text"
            name=""
            value={key}
            placeholder="Search anything"
            onChange={(e) => setKey(e.target.value)}
          />
          <button
            type="submit"
            className="px-8 py-4 text-base font-bold text-white bg-blue-500 shadow-xl rounded-xl w-fit"
          >
            Search
          </button>
        </div>
        <div className="flex space-x-3 dark:text-white">
          <select
            name=""
            placeholder="Weekdays"
            className="py-3 font-semibold bg-gray-200 border-none rounded-md dark:bg-gray-900 pr-13 pl-7"
          >
            <option value="" disabled selected>
              Weekdays
            </option>
            <option value="1">Monday</option>
          </select>
          <select
            name=""
            placeholder="Event Type"
            className="py-3 font-semibold bg-gray-200 border-none rounded-md dark:bg-gray-900 pr-13 pl-7"
          >
            <option value="" disabled selected>
              Event Type
            </option>
          </select>
          <select
            name=""
            placeholder="Event Type"
            className="py-3 font-semibold bg-gray-200 border-none rounded-md dark:bg-gray-900 pr-13 pl-7"
          >
            <option value="" disabled selected>
              Any Category
            </option>
          </select>
        </div>
      </form>
      <div className="grid grid-flow-row grid-cols-1 event-list md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 lg:gap-x-16 lg:gap-y-10">
        <AnimateSharedLayout>
          {filterArray.map((_, i) => (
            <m.div layout>
              <EventItem key={i} {..._} />
            </m.div>
          ))}
        </AnimateSharedLayout>
      </div>
      <div className="flex items-center justify-center load-more">
        <div className="px-6 py-4 text-lg font-bold text-blue-600 bg-gray-200 load-more__btn rounded-xl">
          Load More Event
        </div>
      </div>
    </div>
  );
};

export default Search;
