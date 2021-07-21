import { PlusSmIcon } from "@heroicons/react/outline";
import { ArrowRightIcon } from "@heroicons/react/solid";
import useUserProfile from "@hooks/api/queries/useUserProfile";
import React from "react";

const Story = () => {
  const { data } = useUserProfile();
  const { user } = data || {};
  return (
    <div className="relative grid h-56 grid-cols-5 gap-x-2">
      <div className="flex flex-col overflow-hidden bg-gray-200 rounded-lg shadow">
        <div className="flex-grow overflow-hidden rounded-lg shadow">
          <img src={user?.avatar} alt="" className="object-cover h-full" />
        </div>

        <div className="relative px-3 pt-5 pb-2">
          <div className="absolute top-0 flex items-center justify-center w-10 h-10 p-1 -translate-x-1/2 -translate-y-1/2 bg-gray-200 rounded-full text-gray-50 left-1/2">
            <div className="flex items-center justify-center w-full h-full bg-blue-500 rounded-full">
              <PlusSmIcon className="w-5 h-5" />
            </div>
          </div>
          <div className="text-sm font-medium text-center">New story</div>
        </div>
      </div>
      {[...Array(4)].map((_, i) => (
        <div className="relative overflow-hidden bg-gray-300 rounded-lg shadow">
          <img
            src={`https://picsum.photos/130/220.jpg?random=${i}`}
            alt=""
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute top-0 left-0 p-1 m-2 bg-indigo-600 rounded-full w-14 h-14">
            <img
              src={`https://picsum.photos/64/64.jpg?random=${i}`}
              alt=""
              className="object-cover w-full h-full rounded-full"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-3 font-semibold text-gray-50">
            Someone
          </div>
        </div>
      ))}
      <div className="absolute right-0 flex items-center justify-center transition-transform transform translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-lg shadow-lg w-14 h-14 top-1/2 text-gray-50 hover:scale-110">
        <ArrowRightIcon className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Story;
