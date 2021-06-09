import EventItem from "@components/EventItem/EventItem";
import FacebookIcon from "@components/icons/FacebookIcon";
import GooglePlusIcon from "@components/icons/GooglePlusIcon";
import AddIcon from "@icon/AddIcon";
import GoogleMapReact from "google-map-react";
import React from "react";
import styled from "styled-components";
import {
  ArrowLeftIcon,
  IdentificationIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import img from "./Backstage-Class-Open-PSW.jpg";
import TabView from "./TabView";
import { useParams } from "react-router";
import { fakeData } from "@data/fakeData";
import { Link } from "react-router-dom";

const Detail = ({ className }) => {
  const { id } = useParams();
  const event = fakeData?.find((v) => Number.parseInt(v.id) == id);
  return (
    <div className={`${className} w-full`}>
      <div
        className="heroSection lg:h-[650px] rounded-lg bg-cover mx-2 lg:mx-9 relative overflow-hidden bg-fixed"
        style={{ backgroundImage: `url(${event?.img})` }}
      >
        <div className="h-full px-10 py-8 lg:px-28 lg:py-16 bg-gradient-to-tr from-gray-700">
          <div className="container z-10 mx-auto">
            <div className="flex font-semibold text-white back gap-x-2">
              <ArrowLeftIcon className="w-6 h-6" />
              Back
            </div>
            <div className="grid h-full grid-cols-2 content lg:gap-x-8 gap-y-4">
              <div className="flex flex-col justify-center col-span-2 pr-16 text-white gap-y-4 lg:gap-y-10 lg:col-span-1">
                <h1 className="text-5xl font-bold leading-snug capitalize">
                  {event?.name || "Dream world wide in Jakata"}
                </h1>
                <h2 className="font-semibold">By Saepul Rohman</h2>
                <div className="place">Some where</div>
                <div className="flex items-center text-xl font-bold text-green-400 cursor-pointer view-map__btn gap-x-2">
                  <LocationMarkerIcon className="w-8 h-8" />
                  View Map
                </div>
              </div>
              <div className="flex items-center justify-center col-span-2 lg:col-span-1">
                <div className="p-10 space-y-10 bg-white rounded-lg dark:bg-gray-700">
                  <div className="space-y-4">
                    <div className="text-xl font-bold dark:text-white">
                      Date & Time
                    </div>
                    <div className="text-lg font-medium text-gray-500 date dark:text-gray-300">
                      Saturday, Sep 14, 2019 at 20:30 PM
                    </div>
                    <div className="flex font-bold text-blue-600 add-to-calendar dark:text-blue-400 gap-x-2">
                      <div className="items-center w-6 h-6">
                        <AddIcon />
                      </div>{" "}
                      Add to Calendar
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <Link
                      to="/payment"
                      className="bg-blue-600 flex justify-center text-white text-base font-semibold py-5 px-6 rounded-xl min-w-[300px]"
                    >
                      Book now (Free)
                    </Link>
                    <button className="bg-gray-200 text-base font-semibold py-5 px-6 rounded-xl min-w-[300px]">
                      Promote Program
                    </button>
                  </div>
                  <div className="text-center text-gray-500 refund dark:text-gray-300">
                    No refund
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        {/* <div className="flex">
          <div className="p-6 text-xl font-semibold border-b-2 border-indigo-500 dark:text-gray-50">
            About
          </div>
          <div className="p-6 text-xl font-semibold text-gray-500 dark:text-gray-50">
            Discussion
          </div>
        </div> */}
        <div className="grid grid-cols-12 mt-24 lg:gap-x-12 xl:gap-x-24 gap-y-16 lg:gap-y-0">
          <div className="col-span-12 space-y-16 lg:col-span-7 xl:col-span-8">
            <TabView />
          </div>
          <div className="col-span-12 space-y-16 lg:col-span-5 xl:col-span-4">
            <div className="space-y-8">
              <h1 className="header">Event location</h1>
              <div className="lg:aspect-w-1 lg:aspect-h-1 aspect-w-16 aspect-h-9">
                <div className="absolute w-full h-full overflow-hidden rounded-xl">
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: "AIzaSyCOSEZt-JZqEPV7VhBz1FFPqsIbNRJV4fg",
                    }}
                    defaultCenter={{
                      lat: 15.882375,
                      lng: 108.328445,
                    }}
                    defaultZoom={11}
                  />
                </div>
              </div>
              <h1 className="header">Dream world wide in Jakata</h1>
              <div className="place">Some where</div>
            </div>
            <div className="space-y-8">
              <h1 className="header">Tags</h1>

              <div className="flex flex-wrap gap-y-3 gap-x-2">
                {event?.tag?.map((v, i) => (
                  <span
                    key={i}
                    className="flex-1 p-4 text-sm font-semibold text-center transition-colors bg-gray-200 border-blue-500 cursor-pointer whitespace-nowrap dark:bg-transparent dark:border dark:text-gray-50 dark:hover:border-gray-50 dark:hover:text-black dark:hover:bg-gray-50 rounded-xl"
                  >
                    {v}
                  </span>
                ))}

                <span className="flex-grow-[10]"></span>
              </div>
            </div>
            <div className="space-y-8">
              <h1 className="header">Share with friends</h1>
              <div className="flex gap-x-4">
                <div className="p-4 text-white bg-blue-500 rounded-full h-14 w-14">
                  <FacebookIcon />
                </div>
                <div className="p-4 text-white bg-red-500 rounded-full h-14 w-14">
                  <GooglePlusIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-32 space-y-20 upcoming-event">
          <div className="flex items-center justify-between header">
            <h1 className="header">Other event you may like</h1>
          </div>
          <div className="grid grid-flow-row grid-cols-1 event-list md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 lg:gap-x-16 lg:gap-y-10">
            {[...Array(6)].map((_, i) => (
              <EventItem key={i} />
            ))}
          </div>
          <div className="flex items-center justify-center load-more">
            <div className="p-6 text-lg font-bold text-blue-600 bg-gray-200 load-more__btn rounded-xl">
              Load More Event
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default styled(Detail)``;
