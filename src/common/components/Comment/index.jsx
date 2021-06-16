import CommentForm from "@components/CommentForm";
import { ReplyIcon } from "@heroicons/react/outline";
import { HeartIcon } from "@heroicons/react/solid";
import useLikeComment from "@hooks/api/mutation/useLikeComment";
import useUnlikeComment from "@hooks/api/mutation/useUnlikeComment";
import React, { useState } from "react";
import ReactTimeAgo from "timeago-react";
import CommentReplySection from "../CommentReplySection";
const Comment = ({
  id,
  likeCount,
  text,
  media,
  createdAt,
  user,
  postBelongId,
  commentBelongId,
  commentCount,
  isUserLiked,
}) => {
  console.log(isUserLiked);
  const [showReply, setShowReply] = useState(false);
  const [likeComment] = useLikeComment();
  const [unlikeComment] = useUnlikeComment();
  const onLikeHandler = () => {
    !isUserLiked
      ? likeComment({
          variables: { id },
          optimisticResponse: {
            likeComment: {
              id,
              likeCount: likeCount++,
              isUserLiked: true,
              __typename: "Comment",
            },
          },
        })
      : unlikeComment({
          variables: { id },
          optimisticResponse: {
            unlikeComment: {
              id,
              likeCount: likeCount--,
              isUserLiked: false,
              __typename: "Comment",
            },
          },
        });
  };
  // console.log(postBelongId);
  return (
    <div className={`flex space-x-1 ${id === "new" ? "opacity-70" : ""}`}>
      <img src={user?.avatar} alt="" className="w-10 h-10 rounded-full" />
      <div className="flex flex-col flex-grow space-y-1">
        <div className="relative self-start p-2 bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-gray-50">
          <div className="font-medium">{`${user?.firstName || ""} ${
            user.lastName
          }`}</div>
          <div>{text}</div>
          {likeCount > 0 && (
            <div className="absolute flex items-center px-2 py-1 space-x-1 text-xs text-white transform translate-x-1/2 translate-y-1/2 bg-gray-600 rounded-full bottom-2 right-1">
              <HeartIcon className="w-4 h-4" />
              <span>{likeCount}</span>
            </div>
          )}
        </div>
        <div className="text-sm dark:text-gray-400">
          <button
            onClick={onLikeHandler}
            className={`${
              isUserLiked ? "text-blue-600" : ""
            } text-sm font-semibold`}
          >
            {isUserLiked ? "Liked" : "Like"}
          </button>{" "}
          ·{" "}
          <button
            className="text-sm font-semibold"
            onClick={() => {
              setShowReply(true);
            }}
          >
            Reply
          </button>{" "}
          · <ReactTimeAgo datetime={createdAt} />
        </div>
        {!commentBelongId && (
          <>
            {showReply && (
              <CommentReplySection postId={postBelongId} commentId={id} />
            )}
            {showReply && <CommentForm postId={postBelongId} commentId={id} />}
            {!showReply && !!commentCount && (
              <button
                className="flex items-center space-x-1 text-base font-semibold cursor-pointer dark:text-gray-400"
                onClick={() => setShowReply(true)}
              >
                <ReplyIcon className="w-5 h-5 transform rotate-180" />
                <span>{commentCount} reply</span>
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Comment;
