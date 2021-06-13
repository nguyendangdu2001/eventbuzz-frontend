import { gql, useMutation } from "@apollo/client";

const CREATE_POST = gql`
  mutation LikePost($id: ID!) {
    likePost(idPost: $id) {
      id
      authorId
      likeCount
      isUserLiked
    }
  }
`;

const useLikePost = () => {
  //   const dispatch = useDispatch();
  //   const history = useHistory();
  return useMutation(CREATE_POST);
};

export default useLikePost;
