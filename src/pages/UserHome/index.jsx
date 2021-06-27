import React from "react";
import Center from "./Center";
import LeftSIde from "./LeftSide";
import RightSide from "./RightSide";

const UserHome = () => {
  return (
    <div className="grid w-full grid-cols-12">
      <div className="hidden col-span-3 lg:block">
        <div className="sticky top-[88px] min-h-[calc(100vh-88px)] max-h-0">
          <div className="absolute inset-0">
            <LeftSIde />
          </div>
        </div>
      </div>
      <div className="col-span-12 xl:px-20 md:col-span-8 lg:col-span-6">
        <Center />
      </div>
      <div className="hidden col-span-3 md:col-span-4 lg:col-span-3 md:block">
        <div className="sticky top-[88px] min-h-[calc(100vh-88px)] max-h-0">
          <div className="absolute inset-0">
            <RightSide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
