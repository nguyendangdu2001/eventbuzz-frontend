import React from "react";
import NewFeed from "./NewFeed";
import PostForm from "./PostForm";
import Story from "./Story";

const Center = () => {
  return (
    <div className="w-full max-h-full px-2 py-2 space-y-4 md:px-6">
      <Story />
      <PostForm />
      <NewFeed />
    </div>
  );
};

export default Center;
