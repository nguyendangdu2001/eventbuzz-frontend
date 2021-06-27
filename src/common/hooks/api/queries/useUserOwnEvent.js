import { gql, useQuery } from "@apollo/client";

export const GET_USER_OWN_EVENT = gql`
  query GetUserOwnEvent($after: String) {
    myEvent(first: 10, after: $after) {
      edges {
        cursor
        node {
          id
          createdAt
          desc
          endDate
          freeSlot
          img
          location
          locationName
          name
          price
          slot
          startDate
        }
      }
    }
  }
`;

const useUserOwnEvent = () => {
  return useQuery(GET_USER_OWN_EVENT);
};

export default useUserOwnEvent;
