import React from "react";

const SubFoodReciept = () => {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-300 bg-gray-50 flex relative hover:border-blue-500 hover:shadow-lg transition-shadow">
      <div className="w-2/5 img-container relative flex-shrink-0">
        <div className="aspect-w-13 aspect-h-9">
          <img
            src="https://around.createx.studio/img/demo/food-blog/posts/01.jpg"
            alt=""
            className="absolute w-full h-full object-cover"
          />
        </div>
        <div className="tag absolute top-5 right-0 px-4 py-2 rounded-lg rounded-r-none bg-green-700 text-white">
          Vegan
        </div>
      </div>

      <div className="content p-8 gap-y-4 flex flex-col">
        <div className="text-sm text-gray-500">10 min — 2-4 portions</div>

        <h2 className="font-bold text-lg text-gray-600">Vegan Raw Seasoning</h2>
        <p className="text-gray-500 line-clamp-4">
          Dignissim suspendisse in est ante in nibh mauris cursus mattis. Tempor
          id eu nisl nunc mi. Scelerisque eu ultrices vitae auctor. Ut faucibus
          pulvinar elementum integer. Sed vulputate mi sit amet mauris commodo.
          In eu mi bibendum neque
        </p>
        <div className="flex text-sm text-gray-500 self-end mt-auto">
          <div className="date border-r border-gray-500 mr-2 pr-2">Otc 8</div>
          <div className="comment-count">3 comment</div>
        </div>
      </div>
    </div>
  );
};

export default SubFoodReciept;
