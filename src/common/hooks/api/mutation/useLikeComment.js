import { gql, useMutation } from "@apollo/client";

const CREATE_POST = gql`
  mutation LikePost($id: ID!) {
    likeComment(id: $id) {
      isUserLiked
      id
      likeCount
    }
  }
`;

const useLikeComment = () => {
  //   const dispatch = useDispatch();
  //   const history = useHistory();
  return useMutation(CREATE_POST);
};

export default useLikeComment;
