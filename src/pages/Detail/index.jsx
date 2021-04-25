import EventItem from "@components/EventItem/EventItem";
import FacebookIcon from "@components/icons/FacebookIcon";
import GoogleMapReact from "google-map-react";
import React from "react";
import styled from "styled-components";
import img from "./Backstage-Class-Open-PSW.jpg";
const Detail = ({ className }) => {
  return (
    <div className={className}>
      <div
        className="heroSection lg:h-[650px] rounded-lg bg-cover mx-2 lg:mx-9 px-10 lg:px-28 lg:py-16 py-8"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="container mx-auto">
          <div className="back font-semibold text-white">Back</div>
          <div className="content grid grid-cols-2 h-full lg:gap-x-8 gap-y-4">
            <div className="gap-y-4 lg:gap-y-10 col-span-2 lg:col-span-1 flex flex-col justify-center pr-16 text-white">
              <h1 className="font-bold text-5xl capitalize leading-snug">
                Dream world wide in Jakata
              </h1>
              <h2 className="font-semibold">By Saepul Rohman</h2>
              <div className="place">Some where</div>
              <div className="view-map__btn font-bold">View Map</div>
            </div>
            <div className="flex justify-center items-center col-span-2 lg:col-span-1">
              <div className="bg-white rounded-lg p-10 space-y-10 dark:bg-gray-700">
                <div className="space-y-4">
                  <div className="font-bold text-xl dark:text-white">
                    Date & Time
                  </div>
                  <div className="date font-medium text-gray-500 dark:text-gray-300">
                    Saturday, Sep 14, 2019 at 20:30 PM
                  </div>
                  <div className="add-to-calendar font-bold text-blue-600 dark:text-blue-400">
                    Add to Calendar
                  </div>
                </div>
                <div className="space-y-4 flex flex-col">
                  <button className="bg-blue-600 text-white text-base font-semibold py-5 px-6 rounded-xl min-w-[300px]">
                    Book now (Free)
                  </button>
                  <button className="bg-gray-200 text-base font-semibold py-5 px-6 rounded-xl min-w-[300px]">
                    Promote Program
                  </button>
                </div>
                <div className="refund text-center text-gray-500 dark:text-gray-300">
                  No refund
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 mt-24 lg:gap-x-12 xl:gap-x-24 gap-y-16 lg:gap-y-0">
          <div className="space-y-16 col-span-12 lg:col-span-7 xl:col-span-8">
            <div className="space-y-8">
              <h1 className="header">Description</h1>
              <div className="space-y-8 text-gray-500 dark:text-gray-300 break-words">
                <p className="font-medium leading-loose break-words">
                  It is the grandiose vision of the Dream World Wide program to
                  allow learning of the original Arabic language of the Quran
                  easy to learn and accessible regardless of a person's language
                  of origin. We want to empower as many students and teachers
                  around the world as possible with our unprecedented Qur'anic
                  language curriculum and hope to create a worldwide network of
                  students that learn from each other and their instructions and
                  remain connected indefinitely. Join us today to begin your
                  journey!
                </p>
                <p className="font-medium leading-loose break-words">
                  We want to empower as many students and teachers around the
                  world as posible with our unprecedented Qur'anic language
                  curriculum and hope to create a worldwide network of students
                  that learn from each other and their instructions and remain
                  connected indefinitely. Join us today to begin your journey!
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <h1 className="header">Hours</h1>
              <div className="space-y-4">
                <p className="font-medium  text-gray-500 dark:text-gray-300 leading-loose">
                  Weakday hours:{" "}
                  <span className="font-bold text-black dark:text-white">
                    7 PM - 10 PM
                  </span>
                </p>
                <p className="font-medium  text-gray-500 dark:text-gray-300 leading-loose">
                  Weakday hours:{" "}
                  <span className="font-bold text-black dark:text-white">
                    7 PM - 10 PM
                  </span>
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <h1 className="header">
                How can I contact the organizer with any question?
              </h1>
              <div className="space-y-4">
                <p className="font-medium text-gray-500 dark:text-gray-300 leading-loose editor">
                  Please visit <a href="#a">www.dreamworldwide.net</a> and refer
                  to the FAQ section for all questions and contact information.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 xl:col-span-4 col-span-12 space-y-16">
            <div className="space-y-8">
              <h1 className="header">Event location</h1>
              <div className="lg:aspect-w-1 lg:aspect-h-1 aspect-w-16 aspect-h-9">
                <div className="absolute w-full h-full rounded-xl overflow-hidden">
                  <GoogleMapReact
                    defaultCenter={{
                      lat: 59.95,
                      lng: 30.33,
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
                <span className="flex-1 whitespace-nowrap text-center font-semibold text-sm bg-gray-200 p-4 rounded-xl">
                  Indonesia
                </span>
                <span className="flex-1 whitespace-nowrap text-center font-semibold text-sm bg-gray-200 dark:bg-gray-600 p-4 rounded-xl">
                  Events
                </span>
                <span className="flex-1 whitespace-nowrap text-center font-semibold text-sm bg-gray-200 p-4 rounded-xl">
                  Jakarta
                </span>
                <span className="flex-1 whitespace-nowrap text-center font-semibold text-sm bg-gray-200 p-4 rounded-xl">
                  Events
                </span>
                <span className="flex-1 whitespace-nowrap text-center font-semibold text-sm bg-gray-200 p-4 rounded-xl">
                  UI
                </span>
                <span className="flex-1 whitespace-nowrap text-center font-semibold text-sm bg-gray-200 p-4 rounded-xl">
                  Thing To Do In Jakarta
                </span>
                <span className="flex-1 whitespace-nowrap text-center font-semibold text-sm bg-gray-200 p-4 rounded-xl">
                  Jakarta Seminar
                </span>
              </div>
            </div>
            <div className="space-y-8">
              <h1 className="header">Share with friends</h1>
              <div className="flex">
                <div className="h-14 w-14 p-4 rounded-full bg-blue-500 text-white">
                  <FacebookIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="upcoming-event space-y-20 py-32">
          <div className="header flex justify-between items-center">
            <h1 className="header">Other event you may like</h1>
          </div>
          <div className="event-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-x-4 gap-y-4 lg:gap-x-16 lg:gap-y-10">
            {[...Array(9)].map((_, i) => (
              <EventItem key={i} />
            ))}
          </div>
          <div className="load-more flex justify-center items-center">
            <div className="load-more__btn p-6 rounded-xl bg-gray-200 text-blue-600 font-bold text-lg">
              Load More Event
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default styled(Detail)``;
