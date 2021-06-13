import { gql, useQuery } from "@apollo/client";

const GET_USER_INFO = gql`
  query GetUserInfo {
    user: me {
      avatar
      firstName
      id
      lastName
      userName
      verified
    }
  }
`;

const useUserProfile = () => {
  return useQuery(GET_USER_INFO);
};

export default useUserProfile;
