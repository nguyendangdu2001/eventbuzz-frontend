import React from "react";

const Tab1 = ({ next }) => {
  return (
    <form>
      <div className="grid w-full grid-cols-2 mt-12 gap-x-8 gap-y-6">
        <div className="space-y-2">
          <span className="font-semibold">First name</span>
          <input
            type="text"
            placeholder="Ex. Samantha"
            className="w-full px-4 py-3 font-medium border border-gray-300 rounded-lg bg-gray-50"
          />
        </div>
        <div className="space-y-2">
          <span className="font-semibold">Last name</span>
          <input
            type="text"
            placeholder="Ex. William"
            className="w-full px-4 py-3 font-medium border border-gray-300 rounded-lg bg-gray-50"
          />
        </div>
        <div className="col-span-2 space-y-2">
          <span className="font-semibold">Your Email</span>
          <input
            placeholder="Ex. hello@gmail.com"
            type="email"
            className="w-full px-4 py-3 font-medium border border-gray-300 rounded-lg bg-gray-50"
          />
        </div>
        <div className="col-span-2 space-y-2">
          <span className="font-semibold">Phone number</span>
          <input
            placeholder="Ex. +84 83 801 9145"
            type="tel"
            className="w-full px-4 py-3 font-medium border border-gray-300 rounded-lg bg-gray-50"
          />
        </div>
        <div className="col-span-2 space-y-2">
          <span className="font-semibold">Bussiness detail</span>
          <input
            type="text"
            className="w-full px-4 py-3 font-medium border border-gray-300 rounded-lg bg-gray-50"
          />
        </div>
      </div>
      <button
        className="px-8 py-4 mt-12 text-lg font-bold bg-blue-600 rounded-lg text-gray-50"
        onClick={next}
      >
        Continue
      </button>
    </form>
  );
};

export default Tab1;
