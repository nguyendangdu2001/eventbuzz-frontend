import React from "react";
import SubFoodReciept from "./SubFoodReciept";

const SubFoodRecieptList = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-y-8">
        {[...Array(3)].map(() => (
          <SubFoodReciept />
        ))}
      </div>
    </div>
  );
};

export default SubFoodRecieptList;
