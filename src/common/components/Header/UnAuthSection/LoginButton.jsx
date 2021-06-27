import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  const text = useRef(null);
  const container = useRef(null);
  console.log("render");
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(container.current, {
      width: 0,
      opacity: 0,
      ease: "sine.inOut",
      immediateRender: false,
      duration: 1,
      delay: 0.5,
    });
    tl.from(text.current, { opacity: 0, x: "20px", duration: 1 }, "-=0.5");
    tl.play();
    return () => {};
  }, []);
  return (
    <Link
      ref={container}
      to="/login"
      className="py-3 bg-gray-100 login px-9 rounded-xl dark:text-white dark:bg-gray-600"
    >
      <span ref={text}>Login</span>
    </Link>
  );
};

export default LoginButton;
