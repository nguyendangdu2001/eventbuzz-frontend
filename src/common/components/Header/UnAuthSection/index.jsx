import React from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "react-dark-mode-toggle";
import { useDispatch, useSelector } from "react-redux";
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";
const UnAuthSection = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <div className="flex items-center space-x-2 font-bold">
      <LoginButton />
      <SignUpButton />
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
  );
};

export default UnAuthSection;
