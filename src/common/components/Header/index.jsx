import React, { memo, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  CalendarIcon,
  HomeIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import User from "./User";
import gsap from "gsap";
import UnAuthSection from "./UnAuthSection";

const Header = () => {
  const logo = useRef(null);

  const auth = useSelector((state) => state.userStatus?.auth);
  useEffect(() => {
    window.onload = () => {
      gsap.from(logo.current, {
        letterSpacing: "-0.5em",
        opacity: 0,
        immediateRender: false,
      });
    };

    return () => {};
  }, []);
  const dispatch = useDispatch();
  return (
    <div className="sticky top-0 z-[999] bg-gray-50 dark:bg-gray-900">
      <div className="container relative z-10 flex items-center justify-between px-2 py-1 mx-auto md:z-auto lg:py-5">
        <Link
          to="/"
          className="text-xl font-extrabold lg:text-2xl logo dark:text-white w-fit first-letter:text-blue-500 first-letter:text-4xl first-letter:textshadow-neon-blue-500 "
          ref={logo}
        >
          EventBuzz
        </Link>
        {!auth ? <UnAuthSection /> : <User />}
      </div>
      {auth && (
        <div className="flex items-center justify-center w-full text-gray-500 transform bg-gray-100 md:px-8 md:py-2 dark:bg-gray-900 md:rounded-t-lg md:-translate-x-1/2 md:w-auto md:absolute dark:text-gray-300 md:dark:bg-gray-500 space-x-9 top-2 left-1/2 md:rounded-b-2xl">
          <NavLink
            to="/user-home"
            className="flex items-center justify-center flex-1 p-3 transition-colors duration-200 rounded-xl"
            activeClassName="text-gray-100 bg-[#022f96]"
          >
            <HomeIcon className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
          </NavLink>
          <NavLink
            to="/event-map"
            className="flex items-center justify-center flex-1 p-3 transition-colors duration-200 rounded-xl"
            activeClassName="text-gray-100 bg-[#022f96]"
          >
            <LocationMarkerIcon className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
          </NavLink>
          <NavLink
            to="/user-calendar"
            className="flex items-center justify-center flex-1 p-3 transition-colors duration-200 rounded-xl"
            activeClassName="text-gray-100 bg-[#022f96] transition-colors duration-200"
          >
            <CalendarIcon className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default memo(Header);
