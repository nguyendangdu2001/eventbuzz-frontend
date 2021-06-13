import useCreateComment from "@hooks/api/mutation/useCreateComment";
import useUserProfile from "@hooks/api/queries/useUserProfile";
import React from "react";
import { useForm } from "react-hook-form";

const CommentForm = ({ postId, commentId }) => {
  const { data } = useUserProfile();
  const { register, handleSubmit } = useForm();
  const [createComment] = useCreateComment();
  const onSubmit = (data) => {
    createComment({
      variables: {
        comment: { ...data, postBelongId: postId, commentBelongId: commentId },
      },
      optimisticResponse: {},
    });
  };

  return (
    <form
      className="flex items-center p-2 space-x-1"
      onSubmit={handleSubmit(onSubmit)}
    >
      <img src={data?.user?.avatar} alt="" className="w-10 h-10 rounded-full" />
      <input
        type="text"
        className="flex-auto bg-transparent bg-gray-100 border-none rounded-lg dark:bg-gray-800"
        placeholder="Write your comment..."
        {...register("text")}
      />
    </form>
  );
};

export default CommentForm;
