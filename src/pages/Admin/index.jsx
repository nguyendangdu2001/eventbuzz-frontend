import React from "react";
import eventIcon from "@assets/eventIcon.png";
import userIcon from "@assets/userIcon.png";
import webTrafficIcon from "@assets/webTrafficIcon.png";
import { Line } from "react-chartjs-2";
import eventProgressIcon from "@assets/eventProgressIcon.png";
import {
  DotsVerticalIcon,
  FlagIcon,
  TrendingUpIcon,
} from "@heroicons/react/solid";
import { TrashIcon, UsersIcon } from "@heroicons/react/outline";
import ThickArrowDownIcon from "@icon/ThickArrowDownIcon";
const data = {
  labels: [
    "January 2021",
    "Febuary 2021",
    "March 2021",
    "April 2021",
    "May 2021",
    "June 2021",
  ],
  datasets: [
    {
      label: "Traffic",
      data: [300000, 340000, 500000, 740000, 890000, 1000000],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  tension: 0.25,
};
const Admin = () => {
  return (
    <div className="w-full">
      <div className="container py-2 mx-auto space-y-4">
        <div className="grid grid-cols-4 gap-x-4">
          <div className="flex items-center p-3 space-x-2 bg-white rounded-lg shadow">
            <img src={eventIcon} alt="" />
            <div>
              <div className="font-medium text-gray-600">Events</div>
              <div className="text-xl font-semibold">2000</div>
            </div>
          </div>
          <div className="flex items-center p-3 space-x-2 bg-white rounded-lg shadow">
            <img src={userIcon} alt="" />
            <div>
              <div className="font-medium text-gray-600">Users</div>
              <div className="text-xl font-semibold">200.000</div>
            </div>
          </div>
          <div className="flex items-center p-3 space-x-2 bg-white rounded-lg shadow">
            <img src={eventProgressIcon} alt="" />
            <div>
              <div className="font-medium text-gray-600">
                Wating for approval
              </div>
              <div className="text-xl font-semibold">200</div>
            </div>
          </div>
          <div className="flex items-center p-3 space-x-2 bg-white rounded-lg shadow">
            <img src={webTrafficIcon} alt="" />
            <div>
              <div className="font-medium text-gray-600">Trafics</div>
              <div className="text-xl font-semibold">1000000</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-5 max-h-[400px">
          <div className="p-3 bg-white rounded-lg shadow">
            <Line
              className="w-full h-full"
              // width="100%"
              // height="100%"
              data={data}
              options={{
                borderWidth: 5,
                plugins: {
                  legend: {
                    labels: {
                      // This more specific font property overrides the global property
                      font: {
                        size: 16,
                        weight: 500,
                      },
                    },
                  },
                },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        display: false,
                      },
                    },
                  ],
                },
                borderDash: [1000, 1000],
                borderDashOffset: 10,
                tension: 0.25,
                animation: {
                  borderDashOffset: {
                    duration: 2000,
                    from: 1000,
                    to: 0,
                    // loop: true,
                  },
                },
              }}
            />
          </div>
          <div className="relative flex flex-col min-h-full p-3 space-y-2 bg-white rounded-lg shadow max-h-0">
            <div className="text-xl font-bold">Top of event</div>
            <div className="flex-grow space-y-2 overflow-auto">
              {[...Array(6)].map((_, i) => (
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1 text-sm">
                    <ThickArrowDownIcon className="w-5 h-5 text-red-600" />{" "}
                    <span>5</span>
                  </div>
                  <div className="w-1/12">
                    <div className="aspect-w-1 aspect-h-1">
                      <img
                        src={`https://picsum.photos/100/100.jpg?random=${i}`}
                        alt=""
                        className="absolute object-cover w-full h-full rounded-md"
                      />
                    </div>
                  </div>
                  <div className="w-3/12 space-y-2">
                    <div className="text-lg font-semibold dark:text-gray-50">
                      Name
                    </div>
                    {/* <div className="text-gray-500">Location</div> */}
                  </div>
                  <div className="w-1/12 space-y-2">
                    <div className="font-semibold dark:text-gray-50">Free</div>
                  </div>
                  <div className="flex items-center w-3/12 space-x-1">
                    <div className="flex items-center">
                      <UsersIcon className="w-5 h-5" />
                      <span>335</span>
                    </div>

                    <div className="flex items-center p-1 font-medium text-white bg-green-500 rounded-lg">
                      <TrendingUpIcon className="w-4 h-4" /> <span>30</span>{" "}
                    </div>
                  </div>
                  <div className="w-2/12"></div>
                  <div className="flex justify-end w-1/12">
                    <div className="p-3">
                      <DotsVerticalIcon className="w-4 h-4 text-gray-500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-5 h-96">
          <div className="relative flex flex-col min-h-full p-3 space-y-2 bg-white rounded-lg shadow max-h-0">
            <div className="text-xl font-bold">Event being reported</div>
            <div className="flex-grow space-y-2 overflow-auto">
              {[...Array(6)].map((_, i) => (
                <div className="flex items-center space-x-2">
                  <div className="w-1/12">
                    <div className="aspect-w-1 aspect-h-1">
                      <img
                        src={`https://picsum.photos/100/100.jpg?random=${i}`}
                        alt=""
                        className="absolute object-cover w-full h-full rounded-md"
                      />
                    </div>
                  </div>
                  <div className="w-2/12 space-y-2">
                    <div className="text-lg font-semibold dark:text-gray-50 line-clamp-1">
                      Name
                    </div>
                    {/* <div className="text-gray-500">Location</div> */}
                  </div>
                  <div className="flex w-4/12 space-x-1">
                    <div className="p-1 text-xs border border-red-600 rounded-full whitespace-nowrap">
                      Not apropriate
                    </div>
                    {/* <div className="font-semibold dark:text-gray-50">Free</div> */}
                  </div>
                  <div className="flex items-center w-1/12 space-x-1">
                    <div className="flex items-center">
                      <FlagIcon className="w-5 h-5 text-red-600" />
                      <span>335</span>
                    </div>
                  </div>
                  <div className="flex w-2/12">
                    <button className="flex items-center p-2 space-x-1 font-medium bg-red-500 rounded-lg text-gray-50">
                      <TrashIcon className="w-4 h-4" />
                      <span>Delete</span>
                    </button>
                  </div>
                  <div className="flex justify-end w-1/12">
                    <div className="p-3">
                      <DotsVerticalIcon className="w-4 h-4 text-gray-500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex flex-col min-h-full p-3 space-y-2 bg-white rounded-lg shadow max-h-0">
            <div className="text-xl font-bold">User being reported</div>
            <div className="flex-grow space-y-2 overflow-auto">
              {[...Array(6)].map((_, i) => (
                <div className="flex items-center space-x-2">
                  <div className="w-1/12">
                    <div className="aspect-w-1 aspect-h-1">
                      <img
                        src={`https://picsum.photos/100/100.jpg?random=${i}`}
                        alt=""
                        className="absolute object-cover w-full h-full rounded-full"
                      />
                    </div>
                  </div>
                  <div className="w-2/12 space-y-2">
                    <div className="text-lg font-semibold dark:text-gray-50 line-clamp-1">
                      Name
                    </div>
                    {/* <div className="text-gray-500">Location</div> */}
                  </div>
                  <div className="flex w-4/12 space-x-1">
                    <div className="p-1 text-xs border border-red-600 rounded-full whitespace-nowrap">
                      Not apropriate
                    </div>
                    {/* <div className="font-semibold dark:text-gray-50">Free</div> */}
                  </div>
                  <div className="flex items-center w-1/12 space-x-1">
                    <div className="flex items-center">
                      <FlagIcon className="w-5 h-5 text-red-600" />
                      <span>335</span>
                    </div>
                  </div>
                  <div className="flex w-3/12 space-x-1 text-sm">
                    <button className="flex items-center p-2 space-x-1 font-medium bg-red-500 rounded-lg text-gray-50">
                      <TrashIcon className="w-4 h-4" />
                      <span>Ban</span>
                    </button>
                    <button className="flex items-center p-2 space-x-1 font-medium bg-gray-500 rounded-lg text-gray-50">
                      {/* <TrashIcon className="w-4 h-4" /> */}
                      <span>More action</span>
                    </button>
                  </div>
                  <div className="flex justify-end">
                    <div className="p-3">
                      <DotsVerticalIcon className="w-4 h-4 text-gray-500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
