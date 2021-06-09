import React from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

const Tab2 = ({ next }) => {
  const history = useHistory();
  return (
    <form>
      <div className="grid w-full grid-cols-2 mt-12 gap-x-8 gap-y-6">
        <div className="col-span-2 space-y-2">
          <span className="font-semibold">Address 1</span>
          <input
            type="text"
            placeholder="Ex. Samantha"
            className="w-full px-4 py-3 font-medium border border-gray-300 rounded-lg bg-gray-50"
          />
        </div>
        <div className="col-span-2 space-y-2">
          <span className="font-semibold">Address 2</span>
          <input
            type="text"
            placeholder="Ex. William"
            className="w-full px-4 py-3 font-medium border border-gray-300 rounded-lg bg-gray-50"
          />
        </div>
        <div className="space-y-2">
          <span className="font-semibold">City</span>
          <input
            placeholder="Ex. hello@gmail.com"
            type="email"
            className="w-full px-4 py-3 font-medium border border-gray-300 rounded-lg bg-gray-50"
          />
        </div>
        <div className="space-y-2 ">
          <span className="font-semibold">Country</span>
          <input
            placeholder="Ex. +84 83 801 9145"
            type="tel"
            className="w-full px-4 py-3 font-medium border border-gray-300 rounded-lg bg-gray-50"
          />
        </div>
        <div className="space-y-2">
          <span className="font-semibold">State/Province</span>
          <input
            type="text"
            className="w-full px-4 py-3 font-medium border border-gray-300 rounded-lg bg-gray-50"
          />
        </div>
        <div className="space-y-2">
          <span className="font-semibold">Potral code</span>
          <input
            type="text"
            className="w-full px-4 py-3 font-medium border border-gray-300 rounded-lg bg-gray-50"
          />
        </div>
      </div>
      <button
        className="px-8 py-4 mt-12 text-lg font-bold bg-blue-600 rounded-lg text-gray-50"
        onClick={() => {
          toast.success("Buying tickket successfully", {
            position: toast.POSITION.TOP_RIGHT,
          });
          history.push("/user-home");
        }}
      >
        Continue
      </button>
    </form>
  );
};

export default Tab2;
