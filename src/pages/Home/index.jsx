import React from "react";
import styled from "styled-components";
import SearchIcon from "../../common/components/icons/SearchIcon";
import img from "./guitarra.001.jpeg";
import { fakeData } from "@data/fakeData";
import EventItem from "../../common/components/EventItem/EventItem";
import { Link } from "react-router-dom";

const Home = ({ className }) => {
  return (
    <div className={`${className} mx-auto w-full`}>
      <div className="heroSection h-[650px] rounded-lg bg-cover flex justify-end mx-1 lg:mx-9">
        <div className="flex items-center justify-center pl-3 pr-64 content lg:w-2/5">
          <h1 className="text-6xl font-bold leading-tight text-white uppercase">
            Made for those who do
          </h1>
        </div>
      </div>
      <div className="container mx-auto space-y-16 lg:px-24">
        <form
          className="search-form rounded-xl p-6 flex items-center backdrop-filter backdrop-blur-sm bg-opacity-80 bg-[#0b0434] dark:bg-gray-300 text-white dark:text-black shadow-xl space-x-3"
          style={{ marginTop: "-100px" }}
        >
          <div className="grid flex-1 grid-cols-3 gap-x-4">
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Looking for</h3>
              <input
                type="text"
                name=""
                className="bg-[#0b0434] dark:bg-gray-50 w-full text-xl font-semibold border-t-0 border-b-2 border-l-0 border-r-0 rounded-md outline-none ring-offset-2"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium">In</h3>
              <input
                type="text"
                name=""
                className="bg-[#0b0434] dark:bg-gray-50 w-full text-xl font-semibold border-t-0 border-b-2 border-l-0 border-r-0 rounded-md outline-none ring-offset-2"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium">When</h3>

              <select
                name=""
                className="transition-colors capitalize bg-[#0b0434] dark:bg-gray-50 w-full border-b-2 border-t-0 border-r-0 border-l-0 font-semibold text-xl outline-none rounded-md ring-offset-2"
              >
                <option value="a" className="text-xl font-semibold capitalize">
                  any date
                </option>
                <option value="a" className="text-xl font-semibold">
                  1
                </option>
                <option value="a" className="text-xl font-semibold">
                  1
                </option>
                <option value="a" className="text-xl font-semibold">
                  1
                </option>
              </select>
            </div>
          </div>
          <div className="flex h-full submit-btn">
            <Link
              to="/search"
              type="submit"
              className="flex h-full p-5 text-white bg-blue-500 rounded-lg"
            >
              <SearchIcon className="w-10 h-10" />
            </Link>
          </div>
        </form>
        <div className="py-6 space-y-20 upcoming-event">
          <div className="flex flex-col space-y-8 header lg:justify-between lg:items-center lg:flex-row lg:space-y-0">
            <h1 className="text-3xl font-bold dark:text-white">
              Upcoming Event
            </h1>
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
          <div className="grid grid-flow-row grid-cols-1 event-list md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 lg:gap-x-16 lg:gap-y-10">
            {fakeData.map((_, i) => (
              <EventItem key={i} {..._} />
            ))}
          </div>
          <div className="flex items-center justify-center load-more">
            <div className="px-6 py-4 text-lg font-bold text-blue-600 bg-gray-200 load-more__btn rounded-xl">
              Load More Event
            </div>
          </div>
        </div>
        {/* <IconWithInfo />
        <SideTextWithRotatePic />
        <FoodRecipieList />
        <div className="space-y-16">
          <h1 className="text-3xl font-bold text-center">Featured recipes</h1>
          <div className="grid grid-cols-12 gap-x-8">
            <div className="col-span-9">
              <SubFoodRecieptList />
            </div>
            <div className="col-span-3">
              <SideTabSubFoodList />
            </div>
          </div>
        </div> */}

        {/* <SelfIntroduce /> */}
      </div>
    </div>
  );
};

export default styled(Home)`
  .heroSection {
    background-image: url(${img});
    background-repeat: no-repeat;
  }
`;
