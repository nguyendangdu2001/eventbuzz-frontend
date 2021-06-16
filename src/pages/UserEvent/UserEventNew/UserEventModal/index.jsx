import React, { useRef, useState } from "react";

import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import GoogleMap from "@components/Map/GoogleMap";
const UserEventModal = ({ className }) => {
  const { register, handleSubmit, errors, watch, reset, control } = useForm();
  const [img, setimg] = useState("");
  const inputFile = useRef(null);

  const onButtonClick = (e) => {
    inputFile.current.click();
    e.preventDefault();
  };
  const onChangePicture = (e) => {
    console.log(e.target.files[0]);
    setimg(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <Transition show={true} as={Fragment}>
      <Dialog
        open={true}
        static
        onClose={() => true}
        className={`${className} fixed w-screen inset-0 z-[900] overflow-y-auto`}
        as="div"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-70" />
        </Transition.Child>

        <div className="text-center min-h-screen my-auto">
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="space-y-4 pt-20 inline-block w-full max-w-screen-md  text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
              <form className="p-6 space-y-4" onSubmit={() => {}}>
                <div className="modal__custom__body flex items-center flex-col">
                  <h1 className="fs__title font-bold block self-start mb-3 text-3xl">
                    Nhập thông tin
                  </h1>
                  <div>
                    <input
                      type="file"
                      id="file"
                      ref={inputFile}
                      onChange={onChangePicture}
                      style={{ display: "none" }}
                    />
                  </div>
                  {!img && (
                    <div className="w-full h-40 py-6">
                      <div
                        role="button"
                        class="border-dotted border-2 w-full h-full text-center"
                      >
                        <button type="button" onClick={onButtonClick}>
                          Chọn ảnh bìa
                        </button>
                      </div>
                    </div>
                  )}
                  <img className="bg-gray-400 " alt="" src={img} />
                  <div className="form__input flex flex-col w-full">
                    <div className="w-full space-y-6 inputs">
                      <div className="w-full space-y-2">
                        <div>
                          <label
                            htmlFor="name"
                            className="font-semibold uppercase dark:text-gray-50"
                          >
                            Name of Event
                          </label>
                        </div>
                        <input
                          type="text"
                          name="name"
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
                            Location
                          </label>
                        </div>
                        <div>
                          <Controller
                            control={control}
                            name="location"
                            rules={{ required: "Bạn cần chọn gói" }}
                            render={({ field: { onChange, value } }) => (
                              <GoogleMap
                                onChangeMap={onChange}
                                value={value}
                              ></GoogleMap>
                            )}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="">
                          <label
                            htmlFor="pass"
                            className="font-semibold uppercase dark:text-gray-50"
                          >
                            Location Name
                          </label>
                        </div>

                        <input
                          type="text"
                          name="locationName"
                          {...register("rePassword")}
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
                            Date start
                          </label>
                        </div>

                        <input
                          type="date"
                          name="dateStart"
                          {...register("dateStart")}
                          placeholder="Date Start"
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
                            Date end
                          </label>
                        </div>

                        <input
                          type="date"
                          name="dateEnd"
                          {...register("dateEnd")}
                          placeholder="Date End"
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
                            Description
                          </label>
                        </div>

                        <textarea
                          type="date"
                          name="text"
                          {...register("date")}
                          placeholder="Description"
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
                            Price
                          </label>
                        </div>

                        <input
                          type="text"
                          name="pass"
                          {...register("price")}
                          placeholder="Price"
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
                            Slot
                          </label>
                        </div>

                        <input
                          type="number"
                          name="slot"
                          {...register("slot")}
                          placeholder="Slot"
                          id="pass"
                          className="w-full px-6 py-4 font-medium transition-colors border-gray-300 rounded-xl dark:bg-gray-800 dark:text-gray-50"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end space-x-3 modal__custom__footer">
                  <button
                    type="button"
                    className="btn button-secondary--outline"
                    data-bs-dismiss="modal"
                    onClick={() => {}}
                  >
                    Đóng
                  </button>
                </div>
              </form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default styled(UserEventModal)``;
