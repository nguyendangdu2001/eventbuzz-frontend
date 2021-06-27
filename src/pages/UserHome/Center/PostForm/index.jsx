import {
  PaperAirplaneIcon,
  PhotographIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import useCreatePost from "@hooks/api/mutation/useCreatePost";
import axios from "axios";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";

const PostForm = () => {
  const [createPost] = useCreatePost();
  const { register, handleSubmit } = useForm();
  const [ava, setAva] = useState();
  const [img, setImg] = useState([]);

  const onDrop = async (acceptedFiles) => {
    if (acceptedFiles?.length === 0) return;
    console.log(acceptedFiles);
    const uploadFiles = acceptedFiles?.map(async (img) => {
      const form = new FormData();
      form.append("image", img);
      const { data } = await axios.post(
        "https://api.imgbb.com/1/upload?key=164107c247d7ad9d3c93d685037d3f4e",
        form,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: false,
        }
      );
      return data?.data?.display_url;
    });
    const uploadedImg = await Promise.all(uploadFiles);
    console.log(uploadedImg);

    setImg((prev) => [...prev, ...uploadedImg]);
  };
  const onSubmit = (body) => {
    createPost({ variables: { post: { ...body, media: img } } });
  };
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    onDrop,
    accept: "image/*",
  });
  return (
    <form
      {...getRootProps()}
      className="p-12 space-y-6 bg-white shadow dark:bg-gray-900 rounded-xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="text-2xl font-semibold dark:text-gray-50">
        Create post
      </div>
      <div className="">
        {/* <img
            src={userData?.user?.avatar}
            alt=""
            className="w-12 h-12 rounded-full"
          /> */}
        <textarea
          type="text"
          name=""
          {...register("content", { required: true })}
          className="flex-auto font-medium placeholder-gray-400 bg-gray-100 border-none rounded-lg dark:placeholder-gray-300"
          placeholder="You want to share somthing ?"
        />
        {img?.length > 0 && (
          <div className="flex flex-wrap">
            {img?.map((v, i) => (
              <div className="h-[100px] flex-grow m-1" key={v}>
                <img
                  src={v}
                  alt=""
                  className="object-cover max-h-full min-w-full rounded-lg"
                />
              </div>
            ))}
            <div className="flex-grow-[10]"></div>
          </div>
        )}
        <input {...getInputProps()} />
      </div>
      <div className="flex justify-between">
        <div className="flex py-2 divide-x divide-gray-300">
          <div className="flex px-2 py-2 space-x-2 font-medium dark:text-gray-400">
            <VideoCameraIcon className="w-6 h-6" />
            <span>Video</span>
          </div>
          <button
            type="button"
            onClick={open}
            className="flex px-2 py-2 space-x-2 font-medium dark:text-gray-400"
          >
            <PhotographIcon className="w-6 h-6" />
            <span>Photo</span>
          </button>
        </div>
        <button
          type="submit"
          className="flex items-center justify-center px-8 py-3 space-x-2 text-base font-bold text-white bg-blue-500 rounded-full"
        >
          <PaperAirplaneIcon className="w-6 h-6 transform rotate-90" />
          <span>Post</span>
        </button>
      </div>
    </form>
  );
};

export default PostForm;
