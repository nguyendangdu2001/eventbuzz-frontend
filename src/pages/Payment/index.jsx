import AddIcon from "@icon/AddIcon";
import React from "react";
import TabView from "./TabView";
import img from "@assets/img/event3.jpg";

const Payment = () => {
  return (
    <div className="grid w-full grid-cols-12 dark:text-gray-50">
      <div className="col-span-9 px-64 py-8">
        <h3 className="text-2xl font-bold">Personal Infomation</h3>
        <TabView />
      </div>
      <div className="col-span-3 bg-gray-100 dark:bg-gray-800">
        <div className="bg-gray-300 aspect-w-16 aspect-h-9">
          <img src={img} className="absolute w-full h-full" alt="" />
        </div>
        <div className="p-10 space-y-8">
          <div className="">
            <h5 className="text-lg font-bold">Ticket sumary</h5>
            <div className="divide-y divide-gray-300">
              <div className="py-4 space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-500">
                    2 General adminssion
                  </span>
                  <span className="font-semibold">100$</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-500">Fees</span>
                  <span className="font-semibold">7.5$</span>
                </div>
              </div>
              <div className="flex justify-between pt-4 font-semibold">
                <span>Total</span>
                <span className="text-blue-500">207.5</span>
              </div>
            </div>
          </div>
          <div>
            <h5 className="mb-3 text-lg font-bold">Location</h5>
            <div className="font-medium text-gray-500">SOme where</div>
          </div>
          <div>
            <h5 className="mb-3 text-lg font-bold">Hours</h5>
            <div className="space-y-3">
              <div>
                <span className="font-medium text-gray-500">
                  Weekly Hours:{" "}
                </span>
                <span className="font-semibold">7 PM - 10 PM</span>
              </div>
              <div>
                <span className="font-medium text-gray-500">
                  Sunday Hours:{" "}
                </span>
                <span className="font-semibold">10 AM - 3 PM</span>
              </div>
            </div>
          </div>
          <button className="flex text-base font-bold text-blue-600 add-to-calendar dark:text-blue-400 gap-x-2">
            <div className="items-center w-6 h-6">
              <AddIcon />
            </div>{" "}
            Add to Calendar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
