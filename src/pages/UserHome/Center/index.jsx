import { PhotographIcon, VideoCameraIcon } from "@heroicons/react/outline";
import useCreatePost from "@hooks/api/mutation/useCreatePost";
import useUserProfile from "@hooks/api/queries/useUserProfile";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import NewFeed from "./NewFeed";

const Center = () => {
  const [createPost] = useCreatePost();
  const { data: userData } = useUserProfile();
  const { register, handleSubmit } = useForm();
  const onSubmit = (body) => {
    createPost({ variables: { post: body } });
  };
  return (
    <div className="w-full max-h-full px-6 py-2 space-y-4">
      <div className="p-3 bg-white shadow dark:bg-gray-900 rounded-xl">
        <form className="flex space-x-2" onSubmit={handleSubmit(onSubmit)}>
          <img
            src={userData?.user?.avatar}
            alt=""
            className="w-12 h-12 rounded-full"
          />

          <input
            type="text"
            name=""
            {...register("content")}
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
      <NewFeed />
    </div>
  );
};

export default Center;
