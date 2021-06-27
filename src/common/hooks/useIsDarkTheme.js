import { useSelector } from "react-redux";

const useIsDarkTheme = () => {
  return useSelector((state) => state.darkMode);
};

export default useIsDarkTheme;
