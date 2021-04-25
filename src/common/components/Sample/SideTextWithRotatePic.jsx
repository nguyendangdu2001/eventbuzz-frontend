import SwitchIcon from "@components/icons/SwitchIcon";
import React from "react";

const SideTextWithRotatePic = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-6 space-y-5 flex flex-col justify-center">
        <h2 className="font-semibold text-2xl">
          We have lots of experience <br />
          <span className="text-blue-500">building Bootstrap themes.</span>
        </h2>
        <div className="font-medium text-gray-500">
          We've built well over a dozen Bootstrap themes and sold tens of
          thousands of copies.
        </div>
        <div className="space-y-5">
          <div className="flex gap-x-3">
            <div className="icon h-8 w-8">
              <SwitchIcon />
            </div>
            <div className="content space-y-1">
              <h3>Bootstrap users since the beginning</h3>
              <div className="text-gray-500">
                We've been developing with Bootstrap since it was publicly
                released in 2011.
              </div>
            </div>
          </div>
          <div className="flex gap-x-3">
            <div className="icon h-8 w-8">
              <SwitchIcon />
            </div>
            <div className="content space-y-1">
              <h3>Bootstrap users since the beginning</h3>
              <div className="text-gray-500">
                We've been developing with Bootstrap since it was publicly
                released in 2011.
              </div>
            </div>
          </div>
          <div className="flex gap-x-3">
            <div className="icon h-8 w-8">
              <SwitchIcon />
            </div>
            <div className="content space-y-1">
              <h3>Bootstrap users since the beginning</h3>
              <div className="text-gray-500">
                We've been developing with Bootstrap since it was publicly
                released in 2011.
              </div>
            </div>
          </div>
          <div className="flex gap-x-3">
            <div className="icon h-8 w-8">
              <SwitchIcon />
            </div>
            <div className="content space-y-1">
              <h3>Bootstrap users since the beginning</h3>
              <div className="text-gray-500">
                We've been developing with Bootstrap since it was publicly
                released in 2011.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-6">
        <div>
          <div
            style={{
              transformStyle: "preserve-3d",
              perspective: 1500,
              perspectiveOrigin: "left center",
            }}
          >
            <img
              src="https://landkit.goodthemes.co/assets/img/screenshots/desktop/dashkit.jpg"
              alt=""
              className="rounded-xl"
              style={{
                transform: "rotateY(-35deg) rotateX(15deg) scale(0.8)",
                transformStyle: "preserve-3d",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideTextWithRotatePic;
