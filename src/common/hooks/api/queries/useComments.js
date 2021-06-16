import { gql, useQuery } from "@apollo/client";

export const GET_COMMENTS = gql`
  query CommentById(
    $postId: ID!
    $commentId: ID
    $first: Float
    $after: String
  ) {
    comments: commentsById(
      first: $first
      postId: $postId
      commentId: $commentId
      after: $after
    ) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          id
          text
          createdAt
          isUserLiked
          media
          likeCount
          commentCount
          postBelongId
          commentBelongId
          user {
            avatar
            firstName
            lastName
          }
        }
      }
    }
  }
`;

const useComments = ({ postId, commentId } = {}) => {
  // console.log(postId, "sfsf");
  return useQuery(GET_COMMENTS, {
    variables: { postId, commentId, first: 1 },
    returnPartialData: true,
  });
};

export default useComments;
