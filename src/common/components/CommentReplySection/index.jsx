import React from "react";
import CommentForm from "@components/CommentForm";
import Comment from "../Comment";
import useComments from "@hooks/api/queries/useComments";
import { ReplyIcon } from "@heroicons/react/outline";

const CommentReplySection = ({ postId, commentId }) => {
  const { data, fetchMore, loading } = useComments({
    postId: postId,
    commentId: commentId,
  });
  //   console.log(data);
  const commentEdges = data?.comments?.edges;
  const { hasNextPage, endCursor } = data?.comments?.pageInfo || {};
  console.log(commentEdges);

  return (
    !loading &&
    commentEdges?.length > 0 && (
      <div className="p-2 space-y-2">
        <div className="space-y-1">
          {[...commentEdges]?.reverse()?.map((edges) => (
            <Comment {...edges?.node} key={edges?.node?.id} />
          ))}
        </div>
        {/* <CommentForm postId={postId} commentId={commentId} /> */}
        {hasNextPage && (
          <button
            className="flex items-center space-x-1 text-base font-semibold text-gray-500"
            onClick={() =>
              fetchMore({ variables: { after: endCursor, first: 10 } })
            }
          >
            <ReplyIcon className="w-5 h-5 transform rotate-180" />
            <span>See more comment</span>
          </button>
        )}
      </div>
    )
  );
};

export default CommentReplySection;
