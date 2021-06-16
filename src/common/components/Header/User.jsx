import { logout } from "@action/userAction";
import { Popover, Transition } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/outline";
import useUserProfile from "@hooks/api/queries/useUserProfile";
import React from "react";
import { Fragment } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const User = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);
  const history = useHistory();
  const { data } = useUserProfile();
  const { user } = data || {};
  // console.log(user);
  return (
    <div className="flex items-center space-x-6 font-bold">
      <div className="p-3 rounded-lg hover:bg-gray-200 dark:bg-transparent dark:hover:bg-gray-600 dark:text-gray-50">
        <BellIcon className="cursor-pointer w-7 h-7" />
      </div>
      <Popover as="div" className="relative inline-block text-left">
        <Popover.Button className="flex items-center px-2 py-1 space-x-2 rounded-lg cursor-pointer hover:bg-gray-200 dark:bg-transparent dark:hover:bg-gray-600">
          <img src={user?.avatar} alt="" className="rounded-full w-11 h-11" />
          <div className="text-lg font-bold dark:text-gray-50">
            {user?.lastName}
          </div>
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Popover.Panel className="absolute right-0 p-1 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg dark:bg-gray-600 dark:text-gray-50 w-96 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Link
                to="/user-page"
                className="flex items-center p-2 space-x-2 transition-colors rounded-md hover:bg-gray-100 dark:hover:bg-gray-500"
              >
                <img
                  src={user?.avatar}
                  alt=""
                  className="object-cover w-16 h-16 rounded-full"
                />
                <div className="">
                  <div className="text-base font-bold dark:text-gray-50">
                    {user?.lastName}
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-200">
                    Go to your user page
                  </div>
                </div>
              </Link>
              <button
                className={` group flex rounded-md items-center w-full px-2 py-2 justify-between font-bold text-base h-14`}
              >
                <span>Darkmode</span>
                <DarkModeToggle
                  onChange={(isDarkMode) => {
                    console.log(isDarkMode);
                    dispatch({
                      type: "CHANGE_DARKMODE",
                      payload: isDarkMode,
                    });
                  }}
                  checked={darkMode}
                  size={80}
                />
              </button>
              <Link
                to="/user-event"
                className="flex items-center p-2 text-base font-bold h-14"
              >
                My Event
              </Link>
              <button
                onClick={() => dispatch(logout(() => history.push("/")))}
                to="/user-event"
                className="flex items-center p-2 text-base font-bold h-14"
              >
                Logout
              </button>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default User;
