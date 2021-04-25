import EventItem from "@components/EventItem/EventItem";
import React from "react";

const Search = () => {
  return (
    <div className="container mx-auto space-y-14">
      <form className="space-y-14">
        <div className="flex space-x-4">
          <input
            className="form-border-b font-bold text-4xl placeholder-gray-400 bg-transparent border-b-2"
            type="text"
            name=""
            placeholder="Search anything"
          />
          <button
            type="submit"
            className="px-8 rounded-xl bg-blue-500 text-white shadow-xl font-bold text-base"
          >
            Search
          </button>
        </div>
        <div className="flex space-x-3 dark:text-white">
          <select
            name=""
            placeholder="Weekdays"
            className="rounded-md bg-gray-200 dark:bg-gray-900 border-none pr-13 pl-7 py-3 font-semibold"
          >
            <option value="" disabled selected>
              Weekdays
            </option>
            <option value="1">Monday</option>
          </select>
          <select
            name=""
            placeholder="Event Type"
            className="rounded-md bg-gray-200 dark:bg-gray-900 border-none pr-13 pl-7 py-3 font-semibold"
          >
            <option value="" disabled selected>
              Event Type
            </option>
          </select>
          <select
            name=""
            placeholder="Event Type"
            className="rounded-md bg-gray-200 dark:bg-gray-900 border-none pr-13 pl-7 py-3 font-semibold"
          >
            <option value="" disabled selected>
              Any Category
            </option>
          </select>
        </div>
      </form>
      <div className="event-list grid grid-cols-3 grid-flow-row gap-x-16 gap-y-10">
        {[...Array(9)].map((_, i) => (
          <EventItem key={i} />
        ))}
      </div>
      <div className="load-more flex justify-center items-center">
        <div className="load-more__btn px-6 py-4 rounded-xl bg-gray-200 text-blue-600 font-bold text-lg">
          Load More Event
        </div>
      </div>
    </div>
  );
};

export default Search;
