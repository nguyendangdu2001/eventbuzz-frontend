import { gql, useMutation } from "@apollo/client";

const CREATE_POST = gql`
  mutation CreateComment($comment: CreateCommentInput!) {
    createComment(createCommentInput: $comment) {
      commentBelongId
      createdAt
      id
      likeCount
      media
      postBelongId
      text
      user {
        avatar
        firstName
        lastName
      }
    }
  }
`;

const useCreateComment = () => {
  //   const dispatch = useDispatch();
  //   const history = useHistory();
  return useMutation(CREATE_POST, {
    update(cache, { data: { createComment } }) {
      cache.writeFragment({ id: `Post:${createComment?.postBelongId}` });
      //   cache.modify({
      //     fields: {
      //       posts(existingPosts) {
      //         console.log(existingPosts);
      //         if (!existingPosts) return;
      //         const newTodoRef = cache.writeFragment({
      //           data: createComment,
      //           fragment: gql`
      //             fragment NewComment on Comment {
      //               commentBelongId
      //               createdAt
      //               id
      //               likeCount
      //               media
      //               postBelongId
      //               text
      //               user {
      //                 avatar
      //                 firstName
      //                 lastName
      //               }
      //             }
      //           `,
      //         });
      //         console.log(newTodoRef);
      //         return {
      //           ...existingPosts,
      //           edges: [
      //             {
      //               __typename: "PostEdge",
      //               cursor: createPost?.id,
      //               node: newTodoRef,
      //             },
      //             ...existingPosts.edges,
      //           ],
      //         };
      //       },
      //     },
      //   });
    },
  });
};

export default useCreateComment;
