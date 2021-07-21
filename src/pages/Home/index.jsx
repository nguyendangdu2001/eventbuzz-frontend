import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import styled from "styled-components";
import img from "./guitarra.001.jpeg";
import SearchBar from "./SearchBar";
import UpcomingEventSection from "./UpcomingEventSection";
import partyIcon from "@assets/Succes.png";
import LiquidShape from "./LiquidShape";

const Home = ({ className }) => {
  const text = useRef(null);
  const button = useRef(null);
  const textButton = useRef(null);
  useEffect(() => {
    const line2 = new SplitType("#banner-text", {
      lineClass: "parrent overflow-hidden",
    });
    const line = new SplitType(line2.lines, {
      types: "lines",
      lineClass: "child",
    });
    const tl = gsap.timeline();
    tl.from(line.lines, {
      duration: 1.5,
      yPercent: 100,
      ease: "power4",
      stagger: 0.1,
    });
    // tl.from(button.current, {
    //   opacity: 0,
    //   duration: 0.5,
    //   width: 0,
    //   height: 0,
    //   ease: "power4",
    //   // stagger: 0.1,
    // });
    // tl.from(textButton.current, {
    //   duration: 0.5,
    //   yPercent: 100,
    //   opacity: 0,
    //   ease: "power4",
    // });
    tl.play();
    return () => {};
  }, []);

  return (
    <div className={`${className} mx-auto w-full space-y-10`}>
      <div className=" h-[calc(100vh-88px)] rounded-lg bg-cover flex justify-between mx-1 lg:px-12 lg:py-16 overflow-hidden">
        <div className="items-center justify-center w-full pl-10 my-auto space-y-6 lg:pr-40 content lg:w-2/5">
          <div className="relative pl-3">
            <div
              className="text-6xl font-bold leading-tight uppercase dark:text-white banner-text"
              ref={text}
              id="banner-text"
            >
              A Social Media for Event
            </div>
            <div className="absolute top-0 bottom-0 left-0 w-1 bg-blue shadow-neon"></div>
          </div>

          <button
            className="px-16 py-5 overflow-hidden text-xl font-semibold rounded-lg shadow-lg bg-gradient-to-tr from-red-700 to-blue-600 text-gray-50"
            ref={button}
          >
            <div ref={textButton}>Start your journey</div>
          </button>
        </div>
        <div className="relative hidden w-5/12 lg:block">
          <LiquidShape className="absolute z-0 w-10/12 h-auto top-10 left-10"></LiquidShape>
          <img
            src={partyIcon}
            alt=""
            className="absolute z-10 w-10/12 animate-floating"
          />
        </div>
      </div>
      <div className="container px-3 mx-auto space-y-16 lg:px-24">
        <SearchBar />
        <UpcomingEventSection />
      </div>
    </div>
  );
};

export default styled(Home)`
  .heroSection {
    background-image: url(${img});
    background-repeat: no-repeat;
  }
`;
