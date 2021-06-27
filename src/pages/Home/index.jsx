import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import styled from "styled-components";
import img from "./guitarra.001.jpeg";
import SearchBar from "./SearchBar";
import UpcomingEventSection from "./UpcomingEventSection";

const Home = ({ className }) => {
  const text = useRef(null);
  useEffect(() => {
    const line2 = new SplitType("#banner-text", {
      lineClass: "parrent overflow-hidden",
    });
    const line = new SplitType(line2.lines, {
      types: "lines",
      lineClass: "child",
    });
    gsap.from(line.lines, {
      duration: 1.5,
      yPercent: 100,
      ease: "power4",
      stagger: 0.1,
    });
    console.log(line, text);
    return () => {};
  }, []);

  return (
    <div className={`${className} mx-auto w-full`}>
      <div className="heroSection h-[650px] rounded-lg bg-cover flex justify-end mx-1 lg:mx-9">
        <div className="flex items-center justify-center w-full pl-3 lg:pr-64 content lg:w-2/5">
          <div
            className="text-6xl font-bold leading-tight text-white uppercase banner-text"
            ref={text}
            id="banner-text"
          >
            Made for those who do
          </div>
        </div>
      </div>
      <div className="container mx-auto space-y-16 lg:px-24">
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
