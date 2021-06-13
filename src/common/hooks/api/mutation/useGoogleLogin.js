import { loginSuccess } from "@action/userAction";
import { gql, useMutation } from "@apollo/client";
import User from "@components/Header/User";
import { USER_LOGIN_SUCCESS } from "@redux/constants/userConstants";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const GOOGLE_LOGIN = gql`
  mutation LoginGoogle($id_token: String!) {
    loginGoogle(id_token: $id_token) {
      avatar
      firstName
      id
      lastName
      token
      userName
      verified
    }
  }
`;

const useGoogleLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return useMutation(GOOGLE_LOGIN, {
    onCompleted: (data) => {
      console.log(data);
      dispatch(loginSuccess(data?.loginGoogle));
      history.push("/user-home");
    },
    update(
      cache,
      {
        data: {
          loginGoogle: { __typename, ...user },
        },
      }
    ) {
      cache.writeQuery({
        query: gql`
          query GetUserInfo {
            me {
              avatar
              firstName
              id
              lastName
              token
              userName
              verified
            }
          }
        `,
        data: {
          // Contains the data to write
          me: {
            __typename: "User",
            ...user,
          },
        },
      });
    },
  });
};

export default useGoogleLogin;
