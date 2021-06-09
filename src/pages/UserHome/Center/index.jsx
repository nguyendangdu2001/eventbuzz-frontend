import EventHomeItem from "@components/EventHomeItem";
import PostItem from "@components/PostItem";
import { PhotographIcon, VideoCameraIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { useInView } from "react-intersection-observer";

const Center = () => {
  const [numOfPost, setNumOfPost] = useState(6);
  const [userPost, setUserPost] = useState([]);
  const { ref, inView } = useInView({ rootMargin: "100px", delay: 100 });
  useEffect(() => {
    if (inView === true) setNumOfPost((prev) => prev + 6);
    return () => {};
  }, [inView]);
  const { register, handleSubmit } = useForm();
  const onSubmit = ({ body }) => {
    setUserPost([{ name: "Me", text: body }, ...userPost]);
  };
  return (
    <div className="w-full max-h-full px-6 py-2 space-y-4">
      <div className="p-3 bg-white shadow dark:bg-gray-900 rounded-xl">
        <form className="flex space-x-2" onSubmit={handleSubmit(onSubmit)}>
          <img
            src="https://dummyimage.com/50x50.png"
            alt=""
            className="rounded-full"
          />

          <input
            type="text"
            name=""
            {...register("body")}
            className="flex-auto font-medium placeholder-gray-400 bg-transparent border-none dark:placeholder-gray-300"
            placeholder="You want to share somthing ?"
          />
          <button
            type="submit"
            className="flex items-center justify-center px-5 py-3 text-base font-bold text-white bg-blue-500 rounded-lg"
          >
            Post
          </button>
        </form>
        <div className="flex py-2 space-x-2">
          <div className="flex px-4 py-4 space-x-2 font-medium bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-gray-400">
            <VideoCameraIcon className="w-6 h-6" />
            <span>Video</span>
          </div>
          <div className="flex px-4 py-4 space-x-2 font-medium bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-gray-400">
            <PhotographIcon className="w-6 h-6" />
            <span>Photo</span>
          </div>
          <div className="flex px-4 py-4 font-medium bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-gray-400">
            Feeling
          </div>
        </div>
      </div>
      <div className="space-y-4">
        {userPost?.map((post, i) => (
          <PostItem text={post?.text} name={post?.name} img={[]} />
        ))}
        {[...Array(numOfPost)].map((_, i) => (
          <Fragment key={i}>
            <EventHomeItem
              img={`https://picsum.photos/500/500.jpg?random=${3 * i}`}
            />
            <PostItem
              img={[
                `https://picsum.photos/500/500.jpg?random=${3 * i + 1}`,
                `https://picsum.photos/500/500.jpg?random=${3 * i + 2}`,
              ]}
            />
          </Fragment>
        ))}
        <div ref={ref}></div>
      </div>
    </div>
  );
};

export default Center;
