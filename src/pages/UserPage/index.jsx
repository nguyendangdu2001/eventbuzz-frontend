import EventItem from "./EventItem";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import React from "react";
import userbg from "./userbg.jpg";

import SideBar from "./SideBar";
import TabView from "./TabView";

const UserPage = () => {
  return (
    <div className="container grid grid-cols-12 mx-auto gap-x-6">
      <div className="col-span-9 space-y-8">
        <div className="bg-white shadow dark:bg-gray-900 rounded-3xl">
          <img
            src={userbg}
            alt=""
            className="object-cover w-full h-96 rounded-3xl"
          />
          <div className="grid grid-cols-12 px-12 gap-x-8">
            <div className="relative col-span-3">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src="https://picsum.photos/200/200.jpg"
                  alt=""
                  className="absolute top-0 w-full h-full p-1 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full left-1/2"
                />
              </div>
            </div>
            <div className="col-span-9 py-8">
              <div className="flex ">
                <div className="space-y-4">
                  <h3 className="text-4xl font-bold dark:text-gray-50">
                    Adrian Brewer
                  </h3>
                  <div className="space-y-2 font-medium text-gray-600 dark:text-gray-400">
                    <div>Engineer at somewhere </div>
                    <div className="flex items-center">
                      <LocationMarkerIcon className="w-6 h-6" />
                      <span>New York, United State</span>
                    </div>
                  </div>
                  <div className="flex space-x-2 font-semibold">
                    <div className="p-2 text-sm bg-gray-300 rounded-lg dark:bg-gray-600 dark:text-gray-200">
                      UX Research
                    </div>
                    <div className="p-2 text-sm bg-gray-300 rounded-lg dark:bg-gray-600 dark:text-gray-200">
                      UX Research
                    </div>
                    <div className="p-2 text-sm bg-gray-300 rounded-lg dark:bg-gray-600 dark:text-gray-200">
                      UX Research
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-12 space-y-6 bg-white shadow dark:bg-gray-900 rounded-3xl">
          <h4 className="text-xl font-bold dark:text-gray-50">About me</h4>
          <div className="font-semibold text-gray-500 dark:text-gray-400">
            Hi, my name is Adrian Brewer,
            <br /> 'm the Co-founder and Head of Design at BB agency. Designer
            at heart. <br />
            <br />
            Head of Design might be an overstatement, but as with many 20 people
            agencies I need to wear many different hats. I manage creative teams
            and set up processes that allow our collaborators and clients to
            achieve growth, scalability, and progress.
            <br />
            <br /> My design journey started in 2012, sitting across my brother
            in our home office on the island of Krk, Croatia. We designed our
            way across 99designs and later on to the Dribbble Top 20 teams in
            the world.
          </div>
        </div>
        <div className="p-12 space-y-6 bg-white shadow dark:bg-gray-900 rounded-3xl">
          <h4 className="text-xl font-bold dark:text-gray-50">
            Adrian's recent event
          </h4>
          <div className="flex space-x-2">
            {[...Array(4)].map((_, i) => (
              <div className="w-1/4">
                <EventItem />
              </div>
            ))}
          </div>
        </div>
        <TabView />
      </div>
      <div className="col-span-3">
        <SideBar />
      </div>
    </div>
  );
};

export default UserPage;
