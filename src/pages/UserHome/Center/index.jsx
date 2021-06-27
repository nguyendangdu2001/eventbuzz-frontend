// import { PaperAirplaneIcon } from "@heroicons/react/solid";
import useCreatePost from "@hooks/api/mutation/useCreatePost";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import NewFeed from "./NewFeed";
import PostForm from "./PostForm";

const Center = () => {
  return (
    <div className="w-full max-h-full px-2 py-2 space-y-4 md:px-6">
      <PostForm />
      <NewFeed />
    </div>
  );
};

export default Center;
