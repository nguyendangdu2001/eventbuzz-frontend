import { ChatIcon, HeartIcon, ShareIcon } from "@heroicons/react/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/solid";
import useLikeComment from "@hooks/api/mutation/useLikePost";
import useUnlikePost from "@hooks/api/mutation/useUnlikePost";
import React, { useEffect, useState } from "react";
import TimeAgo from "timeago-react";
// import FbImageLibrary from "react-fb-image-grid";

import CommentSection from "@components/CommentSection";
import MediaLayout from "./MediaLayout";
import ReactPhotoGrid from "react-photo-grid";
const PostItem = ({
  id,
  name = "Name of user",
  content = "So happy to be here",
  media = [
    "https://picsum.photos/500/500.jpg?random=1",
    "https://picsum.photos/500/500.jpg?random=2",
  ],
  author = { lastName: "Name of user" },
  likeCount,
  createdAt = Date.now(),
  isUserLiked,
  comments,
}) => {
  const [likePost] = useLikeComment();
  const [unlikePost] = useUnlikePost();

  // const { fetchMore } = useFetchMoreCommentPost(id);

  return (
    <div className="space-y-2 bg-white rounded-lg shadow dark:bg-gray-900">
      <div className="p-3 space-y-2">
        <div className="flex space-x-2">
          <img
            src={author?.avatar || "https://dummyimage.com/50x50.png"}
            alt=""
            className="rounded-full h-[50px] w-[50px]"
          />
          <div>
            <div className="font-bold dark:text-gray-50">{author.lastName}</div>
            <div className="text-gray-500 dark:text-gray-400">
              <TimeAgo locale="es" datetime={createdAt}></TimeAgo>
            </div>
          </div>
        </div>
        <div className="dark:text-gray-50">{content}</div>
      </div>
      <div>
        <MediaLayout media={media} />
      </div>

      {/* <div className="flex w-full space-x-1">
        {media?.map((image, i) => (
          <div className="flex-auto overflow-hidden rounded" key={i}>
            <img src={image} alt="" className="object-cover" />
          </div>
        ))}
      </div> */}
      <div className="flex">
        <button
          onClick={() =>
            isUserLiked
              ? unlikePost({
                  variables: { id },
                  optimisticResponse: {
                    unLikePost: {
                      id: id,
                      likeCount: likeCount - 1,
                      isUserLiked: false,
                      __typename: "Post",
                    },
                  },
                })
              : likePost({
                  variables: { id },
                  optimisticResponse: {
                    likePost: {
                      id: id,
                      likeCount: likeCount + 1,
                      isUserLiked: true,
                      __typename: "Post",
                    },
                  },
                })
          }
          className="flex items-center justify-center flex-1 p-2 space-x-2 text-center rounded-lg cursor-pointer dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {isUserLiked ? (
            <SolidHeartIcon className="w-6 h-6" />
          ) : (
            <HeartIcon className="w-6 h-6" />
          )}{" "}
          <span className="text-base">Like</span>
        </button>
        <button
          // onClick={() => fetchMore({ variables: { after: endCursor } })}
          className="flex items-center justify-center flex-1 p-2 space-x-2 text-base text-center rounded-lg cursor-pointer dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <ChatIcon className="w-6 h-6" />
          <span>Comment</span>
        </button>
        <div className="flex items-center justify-center flex-1 p-2 space-x-2 text-center rounded-lg cursor-pointer dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700">
          <ShareIcon className="w-6 h-6" />
          <span>Share</span>
        </div>
      </div>
      <CommentSection postId={id} />
    </div>
  );
};

export default PostItem;
