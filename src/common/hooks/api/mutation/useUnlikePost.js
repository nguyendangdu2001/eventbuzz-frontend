import { gql, useMutation } from "@apollo/client";

const CREATE_POST = gql`
  mutation LikePost($id: ID!) {
    unLikePost(idPost: $id) {
      id
      authorId
      likeCount
      isUserLiked
    }
  }
`;

const useUnlikePost = () => {
  //   const dispatch = useDispatch();
  //   const history = useHistory();
  return useMutation(CREATE_POST);
};

export default useUnlikePost;
