import React from "react";
import FoodRecipie from "./FoodRecipie";

const FoodRecipieList = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-center font-bold text-3xl">Featured recipes</h1>
      <div className="grid grid-cols-3 gap-x-12">
        {[...Array(3)].map(() => (
          <FoodRecipie />
        ))}
      </div>
    </div>
  );
};

export default FoodRecipieList;
