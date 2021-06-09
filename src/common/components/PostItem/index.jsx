import { ChatIcon, HeartIcon, ShareIcon } from "@heroicons/react/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

const PostItem = ({
  name = "Name of user",
  text = "So happy to be here",
  img = [
    "https://picsum.photos/500/500.jpg?random=1",
    "https://picsum.photos/500/500.jpg?random=2",
  ],
}) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="space-y-2">
      <div className="p-2 space-y-2">
        <div className="flex space-x-1">
          <img
            src="https://dummyimage.com/50x50.png"
            alt=""
            className="rounded-full"
          />
          <div>
            <div className="font-bold dark:text-gray-50">{name}</div>
            <div className="text-gray-500 dark:text-gray-400">Day</div>
          </div>
        </div>
        <div className="dark:text-gray-50">{text}</div>
      </div>

      <div className="flex w-full space-x-1">
        {img?.map((image, i) => (
          <div className="flex-1 overflow-hidden rounded-xl" key={i}>
            <img src={image} alt="" className="object-cover" />
          </div>
        ))}
      </div>
      <div className="flex">
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="flex items-center justify-center flex-1 p-2 space-x-2 text-center rounded-lg cursor-pointer dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {isLiked ? (
            <SolidHeartIcon className="w-6 h-6" />
          ) : (
            <HeartIcon className="w-6 h-6" />
          )}{" "}
          <span className="text-base">Like</span>
        </button>
        <div className="flex items-center justify-center flex-1 p-2 space-x-2 text-center rounded-lg cursor-pointer dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700">
          <ChatIcon className="w-6 h-6" />
          <span>Comment</span>
        </div>
        <div className="flex items-center justify-center flex-1 p-2 space-x-2 text-center rounded-lg cursor-pointer dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700">
          <ShareIcon className="w-6 h-6" />
          <span>Share</span>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
