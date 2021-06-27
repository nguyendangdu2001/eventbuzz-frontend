import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
gsap.registerPlugin(ScrollToPlugin);
export const ScrollToTop = () => {
  const history = useHistory();
  useEffect(() => {
    const unlisten = history.listen(() => {
      gsap.to(window, { duration: 0.7, scrollTo: 0 });
    });
    return unlisten;
  }, [history]);
  return null;
};
