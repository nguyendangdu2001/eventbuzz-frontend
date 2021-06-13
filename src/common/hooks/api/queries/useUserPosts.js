import { gql, useQuery } from "@apollo/client";

const GET_POSTS = gql`
  query GetUserPost($after: String, $userId: ID!) {
    userPosts(userId: $userId, first: 10, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          author {
            avatar
            lastName
            firstName
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

const useUserPosts = (userId) => {
  return useQuery(GET_POSTS, { variables: { userId } });
};

export default useUserPosts;
