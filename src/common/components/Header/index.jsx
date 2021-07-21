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
      <div className="container relative flex items-center justify-between py-5 mx-auto">
        <Link
          to="/"
          className="text-2xl font-extrabold logo dark:text-white w-fit first-letter:text-blue-500 first-letter:text-4xl"
          ref={logo}
        >
          EventBuzz
        </Link>
        {!auth ? <UnAuthSection /> : <User />}
        {auth && (
          <div className="absolute flex items-center justify-center px-8 py-2 text-gray-500 transform -translate-x-1/2 bg-gray-100 rounded-t-lg dark:text-gray-300 dark:bg-gray-500 space-x-9 top-2 left-1/2 rounded-b-2xl">
            <NavLink
              to="/user-home"
              className="p-3 transition-colors duration-200 rounded-xl"
              activeClassName="text-gray-100 bg-[#022f96]"
            >
              <HomeIcon className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
            </NavLink>
            <NavLink
              to="/event-map"
              className="p-3 rounded-xl"
              activeClassName="text-gray-100 bg-[#022f96] transition-colors duration-200"
            >
              <LocationMarkerIcon className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
            </NavLink>
            <NavLink
              to="/user-calendar"
              className="p-3 rounded-xl"
              activeClassName="text-gray-100 bg-[#022f96] transition-colors duration-200"
            >
              <CalendarIcon className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(Header);
