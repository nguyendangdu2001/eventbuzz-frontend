import FacebookIcon from "@components/icons/FacebookIcon";
import React from "react";

const SideTabSubFoodList = () => {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Popular recipie</h3>

        <div className="space-y-4">
          <div className="flex gap-x-3">
            <div className="w-16 rounded-lg overflow-hidden">
              <div className="img-container aspect-w-1 aspect-h-1">
                <img
                  src="https://around.createx.studio/img/demo/food-blog/posts/th/01.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className="space-y-1">
              <h4 className="font-medium text-gray-600">Sweet cream cupcake</h4>
              <div className="text-gray-400 text-xs">By Amelie Mayer</div>
            </div>
          </div>
          <div className="flex gap-x-3">
            <div className="w-16 rounded-lg overflow-hidden">
              <div className="img-container aspect-w-1 aspect-h-1">
                <img
                  src="https://around.createx.studio/img/demo/food-blog/posts/th/01.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className="space-y-1">
              <h4 className="font-medium text-gray-600">Sweet cream cupcake</h4>
              <div className="text-gray-400 text-xs">By Amelie Mayer</div>
            </div>
          </div>
          <div className="flex gap-x-3">
            <div className="w-16 rounded-lg overflow-hidden">
              <div className="img-container aspect-w-1 aspect-h-1">
                <img
                  src="https://around.createx.studio/img/demo/food-blog/posts/th/01.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className="space-y-1">
              <h4 className="font-medium text-gray-600">Sweet cream cupcake</h4>
              <div className="text-gray-400 text-xs">By Amelie Mayer</div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Popular Tags</h3>
        <div className="flex flex-wrap gap-y-3 gap-x-2">
          <span className="whitespace-nowrap text-center text-gray-600 font-semibold text-xs ring-1 p-3 rounded-lg hover:ring-blue-400 hover:text-black">
            Indonesia
          </span>
          <span className="whitespace-nowrap text-center text-gray-600 font-semibold text-xs ring-1 p-3 rounded-xl hover:ring-blue-400 hover:text-black">
            Events
          </span>
          <span className="whitespace-nowrap text-center text-gray-600 font-semibold text-xs ring-1 p-3 rounded-xl hover:ring-blue-400 hover:text-black">
            Jakarta
          </span>
          <span className="whitespace-nowrap text-center text-gray-600 font-semibold text-xs ring-1 p-3 rounded-xl hover:ring-blue-400 hover:text-black">
            Events
          </span>
          <span className="whitespace-nowrap text-center text-gray-600 font-semibold text-xs ring-1 p-3 rounded-xl hover:ring-blue-400 hover:text-black">
            UI
          </span>
          <span className="whitespace-nowrap text-center text-gray-600 font-semibold text-xs ring-1 p-3 rounded-xl hover:ring-blue-400 hover:text-black">
            Thing To Do In Jakarta
          </span>
          <span className="whitespace-nowrap text-center text-gray-600 font-semibold text-xs ring-1 p-3 rounded-xl hover:ring-blue-400 hover:text-black">
            Jakarta Seminar
          </span>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Follow me</h3>
        <div className="flex">
          <div className="h-10 w-10 p-3 ring-1 rounded-lg hover:bg-blue-700 hover:text-white transition-colors">
            <FacebookIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideTabSubFoodList;
