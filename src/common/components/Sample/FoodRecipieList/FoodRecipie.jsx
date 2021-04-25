import React from "react";

const FoodRecipie = () => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-50 hover:ring-blue-500 ring-1 ring-transparent transition-all group">
      <div className="img-container relative">
        <img
          src="https://around.createx.studio/img/demo/food-blog/featured-recipes/01.jpg"
          alt=""
        />
        <div className="bg-gradient absolute inset-0 bg-gradient-to-t from-blue-400 opacity-0 group-hover:opacity-100 transition-colors"></div>
        <div className="tag absolute top-5 right-0 px-4 py-2 rounded-lg rounded-r-none bg-green-700 text-white">
          Vegan
        </div>
        <span className="discover p-6 text-white opacity-0 group-hover:opacity-100 absolute bottom-0 right-0 font-semibold">
          Discover this recipe
        </span>
      </div>
      <div className="content p-5 space-y-2">
        <div className="flex text-sm text-gray-500">
          <div className="date border-r border-gray-500 mr-2 pr-2">Otc 8</div>
          <div className="comment-count">3 comment</div>
        </div>
        <h2 className="font-bold text-lg text-gray-600">Vegan Raw Seasoning</h2>
        <div className="text-sm text-gray-500">10 min — 2-4 portions</div>
      </div>
    </div>
  );
};

export default FoodRecipie;
