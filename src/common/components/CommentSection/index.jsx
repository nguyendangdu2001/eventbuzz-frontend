import CommentForm from "@components/CommentForm";
import useComments from "@hooks/api/queries/useComments";
import React from "react";
import Comment from "../Comment";
const CommentSection = ({ postId }) => {
  const { data, fetchMore, loading } = useComments({ postId: postId });
  //   console.log(data);
  const commentEdges = data?.comments?.edges;
  const { hasNextPage, endCursor } = data?.comments?.pageInfo || {};

  return (
    <div className="p-3 space-y-2">
      <CommentForm postId={postId} />
      <div className="space-y-2">
        {commentEdges?.map((edges) => (
          <Comment {...edges?.node} key={edges?.node?.id} />
        ))}
      </div>
      {hasNextPage && (
        <button
          className="text-base font-semibold text-gray-500"
          onClick={() =>
            fetchMore({ variables: { after: endCursor, first: 10 } })
          }
        >
          More comment
        </button>
      )}
    </div>
  );
};

export default CommentSection;
