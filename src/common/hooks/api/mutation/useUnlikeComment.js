import { gql, useMutation } from "@apollo/client";

const CREATE_POST = gql`
  mutation unlikeComment($id: ID!) {
    unlikeComment(id: $id) {
      isUserLiked
      id
      likeCount
    }
  }
`;

const useUnlikeComment = () => {
  //   const dispatch = useDispatch();
  //   const history = useHistory();
  return useMutation(CREATE_POST);
};

export default useUnlikeComment;
