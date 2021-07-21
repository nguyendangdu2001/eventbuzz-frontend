import { gql, useQuery } from "@apollo/client";

export const GET_SUGGESTION_TAGS = gql`
  query GetSuggestionTags($key: String!) {
    tags: suggestionTags(key: $key, first: 10) {
      edges {
        cursor
        node {
          id
          name
        }
      }
    }
  }
`;

const useSuggestionTags = ({ key }) => {
  return useQuery(GET_SUGGESTION_TAGS, { variables: { key } });
};

export default useSuggestionTags;
