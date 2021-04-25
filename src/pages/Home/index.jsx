import React from "react";
import styled from "styled-components";
import SearchIcon from "../../common/components/icons/SearchIcon";
import img from "./guitarra.001.jpeg";

import EventItem from "../../common/components/EventItem/EventItem";
import IconWithInfo from "@components/Sample/IconWithInfo";
import SideTextWithRotatePic from "@components/Sample/SideTextWithRotatePic";
import FoodRecipieList from "@components/Sample/FoodRecipieList/FoodRecipieList";
import SubFoodRecieptList from "@components/Sample/SubFoodRecieptList";
import SelfIntroduce from "@components/Sample/SelfIntroduce";
import SideTabSubFoodList from "@components/Sample/SideTabSubFoodList";
const Home = ({ className }) => {
  return (
    <div className={`${className} mx-auto`}>
      <div className="heroSection h-[650px] rounded-lg bg-cover flex justify-end mx-1 lg:mx-9">
        <div className="content flex items-center justify-center lg:w-2/5 pr-64 pl-3">
          <h1 className="font-bold uppercase text-6xl text-white leading-tight">
            Made for those who do
          </h1>
        </div>
      </div>
      <div className="container mx-auto space-y-16 lg:px-24">
        <form
          className="search-form rounded-xl p-6 flex items-center bg-[#0b0434] text-white shadow-xl space-x-3"
          style={{ marginTop: "-100px" }}
        >
          <div className="grid grid-cols-3 gap-x-4 flex-1">
            <div className="space-y-3">
              <h3>Name</h3>
              <input
                type="text"
                name=""
                className="w-full border-b-2 border-t-0 border-r-0 border-l-0 bg-transparent font-semibold text-xl outline-none rounded-md ring-offset-2"
              />
            </div>
            <div className="space-y-3">
              <h3>In</h3>
              <select
                name=""
                className="bg-[#0b0434] w-full border-b-2 border-t-0 border-r-0 border-l-0 font-semibold text-xl outline-none rounded-md ring-offset-2"
              >
                <option value="a">1</option>
                <option value="a">1</option>
                <option value="a">1</option>
                <option value="a">1</option>
              </select>
            </div>
            <div className="space-y-3">
              <h3>When</h3>
              <input
                type="text"
                name=""
                className="w-full border-b-2 border-t-0 border-r-0 border-l-0 bg-transparent font-semibold text-xl outline-none rounded-md ring-offset-2"
              />
            </div>
          </div>
          <div className="submit-btn h-full flex">
            <button
              type="submit"
              className="flex h-full bg-blue-500 text-white p-5 rounded-lg"
            >
              <SearchIcon className="w-10 h-10" />
            </button>
          </div>
        </form>
        <div className="upcoming-event space-y-20">
          <div className="header flex lg:justify-between lg:items-center flex-col lg:flex-row space-y-8 lg:space-y-0">
            <h1 className="font-bold text-3xl dark:text-white">
              Upcoming Event
            </h1>
            <div className="flex gap-x-3 gap-y-3 flex-wrap">
              <select
                name=""
                placeholder="Weekdays"
                className="rounded-md bg-gray-200 dark:bg-gray-900 border-none pr-13 pl-7 py-3 font-semibold flex-1"
              >
                <option value="" disabled selected>
                  Weekdays
                </option>
                <option value="1">Monday</option>
              </select>
              <select
                name=""
                placeholder="Event Type"
                className="rounded-md bg-gray-200 dark:bg-gray-900 border-none pr-13 pl-7 py-3 font-semibold flex-1"
              >
                <option value="" disabled selected>
                  Event Type
                </option>
              </select>
              <select
                name=""
                placeholder="Event Type"
                className="rounded-md bg-gray-200 dark:bg-gray-900 border-none pr-13 pl-7 py-3 font-semibold flex-1"
              >
                <option value="" disabled selected>
                  Any Category
                </option>
              </select>
            </div>
          </div>
          <div className="event-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-x-4 gap-y-4 lg:gap-x-16 lg:gap-y-10">
            {[...Array(12)].map((_, i) => (
              <EventItem key={i} />
            ))}
          </div>
          <div className="load-more flex justify-center items-center">
            <div className="load-more__btn px-6 py-4 rounded-xl bg-gray-200 text-blue-600 font-bold text-lg">
              Load More Event
            </div>
          </div>
        </div>
        <IconWithInfo />
        <SideTextWithRotatePic />
        <FoodRecipieList />
        <div className="space-y-16">
          <h1 className="text-center font-bold text-3xl">Featured recipes</h1>
          <div className="grid grid-cols-12 gap-x-8">
            <div className="col-span-9">
              <SubFoodRecieptList />
            </div>
            <div className="col-span-3">
              <SideTabSubFoodList />
            </div>
          </div>
        </div>

        <SelfIntroduce />
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
