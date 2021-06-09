import { dummyLogin } from "@action/userAction";
import FacebookIcon from "@icon/FacebookIcon";
import GooglePlusIcon from "@icon/GooglePlusIcon";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import img from "./media/sample.jpg";
const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(dummyLogin(() => history.replace("/user-home")));
  };
  return (
    <div className="grid w-full grid-cols-12">
      <div className="relative items-center justify-center hidden h-full col-span-5 bg-black lg:flex">
        <img
          src={img}
          alt=""
          className="absolute object-cover w-full h-full bg-gray-900 opacity-50"
        />
        <div className="z-10 space-y-4 text-center text-white">
          <h3 className="text-4xl font-bold">Wellcome back!</h3>
          <div>
            To keep connect with us please login with your personal info
          </div>

          <Link
            to="/login"
            className="inline-block py-4 font-bold bg-gray-500 px-14 rounded-xl bg-opacity-60"
          >
            Sign in
          </Link>
        </div>
      </div>
      <div className="flex flex-col h-full col-span-12 lg:col-span-7 p-14 lg:px-56 form">
        {/* <h2 className="text-xl font-bold text-center text-blue-600">
          EventBuzz
        </h2> */}
        <div className="flex items-center justify-center flex-grow w-full my-auto">
          <form
            className="flex flex-col items-center w-full space-y-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 className="text-5xl font-bold text-center dark:text-gray-50">
              Create Account
            </h3>
            <div className="flex gap-x-4">
              <div className="p-4 text-white bg-blue-500 rounded-full h-14 w-14">
                <FacebookIcon />
              </div>
              <div className="p-4 text-white bg-red-500 rounded-full h-14 w-14">
                <GooglePlusIcon />
              </div>
            </div>
            <div className="font-medium text-center text-gray-500">
              Or use email for registration:
            </div>
            <div className="w-full space-y-6 inputs">
              <div className="w-full space-y-2">
                <div>
                  <label
                    htmlFor="name"
                    className="font-semibold uppercase dark:text-gray-50"
                  >
                    Full Name
                  </label>
                </div>
                <input
                  type="text"
                  name="text"
                  placeholder="Ex. William"
                  {...register("name")}
                  id="name"
                  className="w-full px-6 py-4 font-medium transition-colors border-gray-300 rounded-xl dark:bg-gray-800 dark:text-gray-50"
                />
              </div>
              <div className="w-full space-y-2">
                <div>
                  <label
                    htmlFor="name"
                    className="font-semibold uppercase dark:text-gray-50"
                  >
                    Your Email
                  </label>
                </div>
                <input
                  type="text"
                  name="email"
                  placeholder="Jhom@gmail.com"
                  {...register("email")}
                  id="name"
                  className="w-full px-6 py-4 font-medium transition-colors border-gray-300 rounded-xl dark:bg-gray-800 dark:text-gray-50"
                />
              </div>
              <div className="space-y-2">
                <div className="">
                  <label
                    htmlFor="pass"
                    className="font-semibold uppercase dark:text-gray-50"
                  >
                    Password
                  </label>
                </div>

                <input
                  type="password"
                  name="pass"
                  {...register("password")}
                  placeholder="5+ character"
                  id="pass"
                  className="w-full px-6 py-4 font-medium transition-colors border-gray-300 rounded-xl dark:bg-gray-800 dark:text-gray-50"
                />
              </div>
              <div className="space-y-2">
                <div className="">
                  <label
                    htmlFor="pass"
                    className="font-semibold uppercase dark:text-gray-50"
                  >
                    Re-Password
                  </label>
                </div>

                <input
                  type="password"
                  name="pass"
                  {...register("rePassword")}
                  placeholder="5+ character"
                  id="pass"
                  className="w-full px-6 py-4 font-medium transition-colors border-gray-300 rounded-xl dark:bg-gray-800 dark:text-gray-50"
                />
              </div>
            </div>
            <div className="text-center">
              <button
                to="/user-home"
                type="submit"
                className="px-16 py-4 text-xl font-bold bg-blue-500 rounded-lg shadow-lg text-gray-50"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
