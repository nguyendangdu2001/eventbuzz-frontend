import React from "react";
import EventItem from "../EventItem";

const PostTab = () => {
  return (
    <div className="space-y-2">
      <div className="flex">
        <div className="w-1/4">
          <EventItem />
        </div>
        <div className="w-3/4 px-3">
          <div className="space-y-2">
            <div className="p-2 space-y-2">
              <div className="flex space-x-1">
                <img
                  src="https://dummyimage.com/50x50.png"
                  alt=""
                  className="rounded-full"
                />
                <div>
                  <div className="font-bold dark:text-gray-50">
                    Name of user
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">Day</div>
                </div>
              </div>
              <div className="dark:text-gray-50">So happy to be here</div>
            </div>

            <div className="flex w-full space-x-1">
              <div className="flex-1 overflow-hidden rounded-xl">
                <img
                  src="https://dummyimage.com/500x500.png"
                  alt=""
                  className="object-cover"
                />
              </div>

              <div className="flex-1 object-cover overflow-hidden rounded-xl">
                <img
                  src="https://dummyimage.com/500x500.png"
                  alt=""
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex">
              <div className="flex-1 p-2 text-center dark:text-gray-50">
                Like
              </div>
              <div className="flex-1 p-2 text-center dark:text-gray-50">
                Comment
              </div>
              <div className="flex-1 p-2 text-center dark:text-gray-50">
                Share
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostTab;
