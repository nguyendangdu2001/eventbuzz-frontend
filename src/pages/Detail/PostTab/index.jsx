import PostItem from "@components/PostItem";
import { PhotographIcon, VideoCameraIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";

const PostTab = () => {
  const { register, handleSubmit } = useForm();
  const [userPost, setUserPost] = useState([]);

  const onSubmit = ({ body }) => {
    setUserPost([{ name: "Me", text: body }, ...userPost]);
  };
  return (
    <div className="space-y-2">
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
      {userPost?.map((post, i) => (
        <PostItem text={post?.text} name={post?.name} img={[]} />
      ))}
      {/* {[...Array(5)].map((_, i) => (
        <Fragment key={i}>
          <PostItem
            img={[
              `https://picsum.photos/500/500.jpg?random=${2 * i}`,
              `https://picsum.photos/500/500.jpg?random=${2 * i + 1}`,
            ]}
          />
        </Fragment>
      ))} */}
    </div>
  );
};

export default PostTab;
