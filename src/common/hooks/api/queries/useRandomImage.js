import axios from "axios";
import { useQuery } from "react-query";

export const useRandomImage = () => {
  const queryInstance = useQuery(
    ["randomImage"],
    async () => {
      const { data } = await axios.get(`/v2/list`, {
        baseURL: "https://picsum.photos",
      });

      return data;
    },
    { refetchOnWindowFocus: false, refetchOnMount: false }
  );
  return queryInstance;
};
