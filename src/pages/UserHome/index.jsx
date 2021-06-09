import React from "react";
import Center from "./Center";
import LeftSIde from "./LeftSide";
import RightSide from "./RightSide";

const UserHome = () => {
  return (
    <div className="grid w-full grid-cols-12">
      <div className="col-span-3">
        <div className="sticky top-[88px] min-h-[calc(100vh-88px)] max-h-0">
          <div className="absolute inset-0">
            <LeftSIde />
          </div>
        </div>
      </div>
      <div className="col-span-6">
        <Center />
      </div>
      <div className="col-span-3">
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
