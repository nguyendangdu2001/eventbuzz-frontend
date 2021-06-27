import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const SignUpButton = () => {
  const text = useRef(null);
  const container = useRef(null);
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
    window.onload = () => tl.play();

    return () => {};
  }, []);
  return (
    <Link
      ref={container}
      to="/signup"
      className="py-3 text-blue-600 bg-gray-200 signup px-9 rounded-xl"
    >
      <span ref={text} className="whitespace-nowrap">
        Sign up
      </span>
    </Link>
  );
};

export default SignUpButton;
