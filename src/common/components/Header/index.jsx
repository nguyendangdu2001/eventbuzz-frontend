import React, { memo } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "react-dark-mode-toggle";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  return (
    <div className="container flex justify-between py-5 mx-auto items-center">
      <Link to="/" className="logo text-3xl font-extrabold dark:text-white">
        EventBux
      </Link>
      <div className="space-x-2 flex font-bold items-center">
        <div className="login px-9 py-3 rounded-xl dark:text-white dark:bg-gray-600">
          Login
        </div>
        <div className="signup px-9 py-3 rounded-xl bg-gray-200 text-blue-600">
          Sign up
        </div>
        <DarkModeToggle
          onChange={(isDarkMode) => {
            console.log(isDarkMode);
            dispatch({ type: "CHANGE_DARKMODE", payload: isDarkMode });
          }}
          checked={darkMode}
          size={80}
        />
      </div>
    </div>
  );
};

export default memo(Header);
