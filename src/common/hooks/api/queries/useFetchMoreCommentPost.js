import { gql, useQuery } from "@apollo/client";
const GET_MORE_COMMENT_POST = gql`
  query GetMorePostComment($id: ID!, $after: String) {
    post(id: $id) {
      id
      commentCount
      likeCount
      comments(first: 10, after: $after) {
        edges {
          cursor
          node {
            id
            likeCount
            createdAt
            text
            media
            user {
              avatar
              firstName
              lastName
              id
            }
          }
        }
      }
    }
  }
`;
const useFetchMoreCommentPost = (id) => {
  return useQuery(GET_MORE_COMMENT_POST, {
    variables: { id },
    skip: true,
  });
};

export default useFetchMoreCommentPost;
