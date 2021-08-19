import { gql, useQuery } from "@apollo/client";

const GET_USER_BY_ID = gql`
  query GetUserInfo($id: String!) {
    user: user(id: $id) {
      avatar
      firstName
      id
      lastName
      userName
      verified
    }
  }
`;

const useUserById = (id) => {
  return useQuery(GET_USER_BY_ID, { variables: { id } });
};

export default useUserById;
