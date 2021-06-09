import React, { memo } from "react";
import { Link, NavLink } from "react-router-dom";
import DarkModeToggle from "react-dark-mode-toggle";
import { useDispatch, useSelector } from "react-redux";
import {
  CalendarIcon,
  HomeIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import User from "./User";

const Header = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const auth = useSelector((state) => state.userStatus?.auth);

  const dispatch = useDispatch();
  return (
    <div className="sticky top-0 z-[999] bg-gray-50 dark:bg-gray-900">
      <div className="container relative flex items-center justify-between py-5 mx-auto">
        <Link to="/" className="text-3xl font-extrabold logo dark:text-white">
          EventBuzz
        </Link>
        {!auth ? (
          <div className="flex items-center space-x-2 font-bold">
            <Link
              to="/login"
              className="py-3 login px-9 rounded-xl dark:text-white dark:bg-gray-600"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="py-3 text-blue-600 bg-gray-200 signup px-9 rounded-xl"
            >
              Sign up
            </Link>
            <DarkModeToggle
              className="hidden md:block"
              onChange={(isDarkMode) => {
                console.log(isDarkMode);
                dispatch({ type: "CHANGE_DARKMODE", payload: isDarkMode });
              }}
              checked={darkMode}
              size={80}
            />
          </div>
        ) : (
          <User />
        )}
        {auth && (
          <div className="absolute flex items-center justify-center px-8 py-2 text-gray-500 transform -translate-x-1/2 bg-gray-100 rounded-t-lg dark:text-gray-300 dark:bg-gray-500 space-x-9 top-2 left-1/2 rounded-b-2xl">
            <NavLink
              to="/user-home"
              className="p-3 transition-colors duration-200 rounded-xl"
              activeClassName="text-gray-100 bg-[#022f96]"
            >
              <HomeIcon className="w-8 h-8" />
            </NavLink>
            <NavLink
              to="/event-map"
              className="p-3 rounded-xl"
              activeClassName="text-gray-100 bg-[#022f96] transition-colors duration-200"
            >
              <LocationMarkerIcon className="w-8 h-8" />
            </NavLink>
            <NavLink
              to="/user-calendar"
              className="p-3 rounded-xl"
              activeClassName="text-gray-100 bg-[#022f96] transition-colors duration-200"
            >
              <CalendarIcon className="w-8 h-8" />
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(Header);
