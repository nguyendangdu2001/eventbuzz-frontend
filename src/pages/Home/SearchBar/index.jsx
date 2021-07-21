import SearchIcon from "@icon/SearchIcon";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const searchContainer = useRef(null);
  const searchButton = useRef(null);
  const label = useRef([]);
  const inputs = useRef([]);
  useEffect(() => {
    // const tl = gsap.timeline();

    // tl.from(searchContainer.current, {
    //   y: "50px",
    //   opacity: 0,
    //   width: 0,
    //   height: 0,
    //   duration: 0.7,
    //   immediateRender: false,
    // });
    // tl.from(label.current, { y: "20px", opacity: 0, stagger: 0.3 });
    // tl.from(inputs.current, { y: "20px", opacity: 0, stagger: 0.3 });
    // tl.from(searchButton.current, {
    //   scale: 0,
    //   opacity: 0,
    //   duration: 0.5,
    // });
    // tl.play();

    return () => {};
  }, []);
  return (
    <form
      ref={searchContainer}
      className=" mx-auto search-form rounded-xl p-6 flex items-center backdrop-filter backdrop-blur-sm bg-opacity-80 bg-[#0b0434] dark:shadow-neon text-white shadow-xl space-x-3"
      // style={{ marginTop: "-100px" }}
    >
      <div className="grid flex-1 grid-cols-3 gap-x-4 gap-y-2">
        <div className="col-span-3 space-y-3 lg:col-span-1">
          <h3
            className="text-lg font-medium"
            ref={(el) => (label.current[0] = el)}
          >
            Looking for
          </h3>
          {/* <Listbox>
            <div className="relative"></div>
          </Listbox> */}
          <input
            ref={(el) => (inputs.current[0] = el)}
            type="text"
            name=""
            className="!bg-[#0b0434] w-full text-xl font-semibold border-t-0 border-b-2 border-l-0 border-r-0 rounded-md outline-none ring-offset-2"
          />
        </div>
        <div className="col-span-3 space-y-3 lg:col-span-1">
          <h3
            className="text-lg font-medium"
            ref={(el) => (label.current[1] = el)}
          >
            In
          </h3>
          <input
            ref={(el) => (inputs.current[1] = el)}
            type="text"
            name=""
            className="!bg-[#0b0434] w-full text-xl font-semibold border-t-0 border-b-2 border-l-0 border-r-0 rounded-md outline-none ring-offset-2"
          />
        </div>
        <div className="col-span-3 space-y-3 lg:col-span-1">
          <h3
            className="text-lg font-medium"
            ref={(el) => (label.current[2] = el)}
          >
            When
          </h3>

          <select
            ref={(el) => (inputs.current[2] = el)}
            name=""
            className="transition-colors capitalize bg-[#0b0434] w-full border-b-2 border-t-0 border-r-0 border-l-0 font-semibold text-xl outline-none rounded-md ring-offset-2"
          >
            <option value="a" className="text-xl font-semibold capitalize">
              any date
            </option>
            <option value="a" className="text-xl font-semibold">
              1
            </option>
            <option value="a" className="text-xl font-semibold">
              1
            </option>
            <option value="a" className="text-xl font-semibold">
              1
            </option>
          </select>
        </div>
      </div>
      <div className="flex h-full submit-btn" ref={searchButton}>
        <Link
          to="/search"
          type="submit"
          className="flex h-full p-5 text-white bg-blue-500 rounded-lg"
        >
          <SearchIcon className="w-10 h-10" />
        </Link>
      </div>
    </form>
  );
};

export default SearchBar;
