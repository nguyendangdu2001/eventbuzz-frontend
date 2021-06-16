import { gql, useQuery } from "@apollo/client";

const GET_POSTS = gql`
  query GetPosts($after: String) {
    posts(first: 10, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          comments(first: 1) {
            pageInfo {
              endCursor
              hasNextPage
              hasPreviousPage
              startCursor
            }
            edges {
              node {
                user {
                  avatar
                  firstName
                  lastName
                }
                text
              }
            }
          }
          author {
            avatar
            firstName
            lastName
            id
          }
          id
          likeCount
          content
          media
          createdAt
          commentCount
          isUserLiked
        }
      }
    }
  }
`;

const usePosts = () => {
  return useQuery(GET_POSTS);
};

export default usePosts;
