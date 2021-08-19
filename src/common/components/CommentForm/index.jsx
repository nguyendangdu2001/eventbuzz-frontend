import useCreateComment from "@hooks/api/mutation/useCreateComment";
import useUserProfile from "@hooks/api/queries/useUserProfile";
import React from "react";
import { useForm } from "react-hook-form";

const CommentForm = ({ postId, commentId }) => {
  const { data: user } = useUserProfile();
  const { register, handleSubmit, reset } = useForm();
  const [createComment] = useCreateComment();
  const onSubmit = async (data) => {
    await createComment({
      variables: {
        comment: { ...data, postBelongId: postId, commentBelongId: commentId },
      },
      optimisticResponse: {
        createComment: {
          id: "new",
          ...data,
          postBelongId: postId,
          commentBelongId: commentId,
          createdAt: Date.now(),
          user: {
            avatar: user?.user?.avatar,
            lastName: user?.user?.lastName,
            firstName: 0,
          },
          media: [],
          likeCount: 0,
          __typename: "Comment",
          isCreating: true,
        },
      },
    });
    reset();
  };

  return (
    <form
      className="flex items-center space-x-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <img src={user?.user?.avatar} alt="" className="w-8 h-8 rounded-full" />
      <input
        type="text"
        className="flex-auto w-full bg-transparent bg-gray-100 border-none rounded-lg dark:bg-gray-800"
        placeholder="Write your comment..."
        {...register("text")}
      />
    </form>
  );
};

export default CommentForm;
