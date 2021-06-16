import { gql, useMutation } from "@apollo/client";
import { GET_COMMENTS } from "../queries/useComments";

const CREATE_POST = gql`
  mutation CreateComment($comment: CreateCommentInput!) {
    createComment(createCommentInput: $comment) {
      id
      text
      createdAt
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
`;

const useCreateComment = () => {
  //   const dispatch = useDispatch();
  //   const history = useHistory();
  return useMutation(CREATE_POST, {
    update(cache, { data: { createComment } }) {
      console.log(
        createComment?.postBelongId,
        "sfsf",
        createComment?.commentBelongId
      );
      const { comments } = cache.readQuery({
        query: GET_COMMENTS,
        variables: {
          postId: createComment?.postBelongId,
          commentId: createComment?.commentBelongId || undefined,
        },
      });
      console.log(comments);
      // console.log(
      //   {
      //     comments: {
      //       ...comments,
      //       edges: [
      //         {
      //           cursor: createComment.id,
      //           node: { ...createComment },
      //         },
      //         ...comments.edges,
      //       ],
      //     },
      //   },
      //   "new comments"
      // );
      cache.writeQuery({
        query: GET_COMMENTS,
        variables: {
          postId: createComment?.postBelongId,
          commentId: createComment?.commentBelongId || undefined,
        },
        data: {
          comments: {
            ...comments,
            edges: [
              {
                __typename: "CommentEdge",
                cursor: createComment.id,
                node: { ...createComment },
              },
              ...comments.edges,
            ],
          },
        },
      });
      // console.log(
      //   cache.readQuery({
      //     query: GET_COMMENTS,
      //     variables: {
      //       postId: createComment?.postBelongId,
      //       commentId: createComment?.commentBelongId || undefined,
      //     },
      //   }),
      //   "new"
      // );
      //   cache.writeFragment({ id: `Post:${createComment?.postBelongId}` });
      // cache.modify({
      //   fields: {
      //     comments(existingPosts) {
      //       console.log(existingPosts);
      //       if (!existingPosts) return;
      //       const newTodoRef = cache.writeFragment({
      //         data: createComment,
      //         fragment: gql`
      //           fragment NewComment on Comment {
      //             commentBelongId
      //             createdAt
      //             id
      //             likeCount
      //             media
      //             postBelongId
      //             text
      //             user {
      //               avatar
      //               firstName
      //               lastName
      //             }
      //           }
      //         `,
      //       });
      //       console.log(newTodoRef);
      //       return {
      //         ...existingPosts,
      //         edges: [
      //           {
      //             __typename: "CommentEdge",
      //             cursor: createComment?.id,
      //             node: newTodoRef,
      //           },
      //           ...existingPosts.edges,
      //         ],
      //       };
      //     },
      //   },
      // });
    },
  });
};

export default useCreateComment;
