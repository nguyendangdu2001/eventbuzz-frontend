import { gql, useMutation } from "@apollo/client";

const CREATE_POST = gql`
  mutation ($post: CreatePostInput!) {
    createPost(createPostInput: $post) {
      author {
        avatar
        firstName
        lastName
        id
      }
      authorId
      commentCount
      content
      createdAt
      eventId
      id
      isUserLiked
      likeCount
      media
    }
  }
`;

const useCreatePost = () => {
  return useMutation(CREATE_POST, {
    update(cache, { data: { createPost } }) {
      cache.modify({
        fields: {
          posts(existingPosts) {
            console.log(existingPosts);
            if (!existingPosts) return;

            const newTodoRef = cache.writeFragment({
              data: createPost,
              fragment: gql`
                fragment NewPost on Post {
                  author {
                    avatar
                    firstName
                    lastName
                    id
                  }
                  authorId
                  commentCount
                  content
                  createdAt
                  eventId
                  id
                  isUserLiked
                  likeCount
                  media
                }
              `,
            });
            console.log(newTodoRef);
            return {
              ...existingPosts,
              edges: [
                {
                  __typename: "PostEdge",
                  cursor: createPost?.id,
                  node: newTodoRef,
                },
                ...existingPosts.edges,
              ],
            };
          },
        },
      });
    },
  });
};

export default useCreatePost;
