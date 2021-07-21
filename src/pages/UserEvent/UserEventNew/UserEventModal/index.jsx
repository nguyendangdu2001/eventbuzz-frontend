import React, { useRef, useState } from "react";

import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import GoogleMap from "@components/Map/GoogleMap";
import useIsDarkTheme from "@hooks/useIsDarkTheme";
import { useDropzone } from "react-dropzone";
import useCreateEvent from "@hooks/api/mutation/useCreateEvent";
import useUploadImg from "@hooks/api/mutation/useUploadImg";
import TagInput from "@components/TagInput";
import PriceInput from "./PriceInput";
import SlotInput from "./SlotInput";
const UserEventModal = ({ className, isShow, close }) => {
  const dark = useIsDarkTheme();
  const { register, handleSubmit, errors, watch, reset, control } = useForm();
  const [img, setimg] = useState();
  const [createEvent, { loading }] = useCreateEvent({
    onCompleted: () => {
      reset();
      close();
    },
  });
  const uploadImg = useUploadImg();
  const onDrop = (acceptedFiles) => {
    if (acceptedFiles?.length === 0) return;
    console.log(acceptedFiles);
    setimg(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };
  const onSubmit = async (data) => {
    console.log({ ...data });
    const url = img && (await uploadImg(img?.[0]));
    createEvent({ variables: { event: { ...data, img: url } } });
  };
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxFiles: 1,
  });
  return (
    <Transition show={isShow} as={Fragment}>
      <Dialog
        static
        onClose={close}
        className={`${className} fixed w-screen inset-0 z-[1000] overflow-y-auto ${
          dark ? "dark" : ""
        }`}
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

        <div className="min-h-screen my-auto text-center">
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
            <div className="inline-block w-full max-w-screen-xl my-20 space-y-4 text-left align-middle transition-all transform rounded-lg shadow-xl bg-gray-50 dark:bg-gray-800">
              <form className="p-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-x-6 modal__custom__body">
                  <div className="w-full space-y-6 inputs">
                    <div className="space-y-2">
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
                        {...register("name", {
                          required: "You have to give event a name",
                        })}
                        id="name"
                        // className="w-full px-6 py-4 font-medium transition-colors border-gray-300 rounded-xl dark:bg-gray-800 dark:text-gray-50"
                        className="input"
                      />
                    </div>
                    <div className="w-full">
                      <div className="aspect-w-16 aspect-h-9">
                        <div
                          className="flex items-center justify-center w-full h-full text-center bg-gray-100 border-2 border-gray-700 border-dashed cursor-pointer form__input"
                          {...getRootProps()}
                        >
                          <input {...getInputProps()} className="w-full" />
                          {!img ? (
                            <p>Thả ảnh vào đây</p>
                          ) : (
                            <img
                              src={img?.[0]?.preview}
                              alt=""
                              className="object-cover w-full h-full border-none"
                            />
                          )}
                        </div>
                      </div>
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
                        rows={5}
                        type="date"
                        name="text"
                        {...register("desc")}
                        placeholder="Description"
                        className="w-full px-6 py-4 font-medium transition-colors border-gray-300 rounded-xl dark:bg-gray-800 dark:text-gray-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="">
                        <label
                          htmlFor="pass"
                          className="font-semibold uppercase dark:text-gray-50"
                        >
                          Tags
                        </label>
                      </div>

                      <Controller
                        control={control}
                        name="tags"
                        rules={{
                          required:
                            "you have to specify your event's localtion",
                        }}
                        defaultValue={[]}
                        render={({ field: { onChange, value } }) => (
                          <TagInput {...{ onChange, value }} />
                        )}
                      />
                      {/* <TagInput /> */}
                    </div>
                  </div>
                  <div className="w-full space-y-6 inputs">
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
                          rules={{
                            required:
                              "you have to specify your event's localtion",
                          }}
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
                        {...register("locationName")}
                        placeholder="5+ character"
                        className="w-full px-6 py-4 font-medium transition-colors border-gray-300 rounded-xl dark:bg-gray-800 dark:text-gray-50"
                      />
                    </div>
                    <div className="flex space-x-6">
                      <div className="flex-auto space-y-2 ">
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
                          {...register("startDate", {
                            required: "You have to write this field",
                            setValueAs: (v) => new Date(v).getTime(),
                          })}
                          placeholder="Date Start"
                          className="w-full px-6 py-4 font-medium transition-colors border-gray-300 rounded-xl dark:bg-gray-800 dark:text-gray-50"
                        />
                      </div>
                      <div className="flex-auto space-y-2">
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
                          name="endDate"
                          {...register("endDate", {
                            required: "You have to write this field",
                            setValueAs: (v) => new Date(v).getTime(),
                          })}
                          placeholder="Date End"
                          className="w-full px-6 py-4 font-medium transition-colors border-gray-300 rounded-xl dark:bg-gray-800 dark:text-gray-50"
                        />
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <div className="flex-1 space-y-2">
                        <div className="">
                          <label
                            htmlFor="pass"
                            className="font-semibold uppercase dark:text-gray-50"
                          >
                            Price
                          </label>
                        </div>

                        {/* <input
                          type="number"
                          name="pass"
                          min={1}
                          {...register("price2", { valueAsNumber: true })}
                          placeholder="Price"
                          className="w-full px-6 py-4 font-medium transition-colors border-gray-300 rounded-xl dark:bg-gray-800 dark:text-gray-50"
                        /> */}
                        <Controller
                          control={control}
                          name="price"
                          render={({ field: { onChange, value } }) => (
                            <PriceInput onChange={onChange} />
                          )}
                        />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="">
                          <label
                            htmlFor="pass"
                            className="font-semibold uppercase dark:text-gray-50"
                          >
                            Slot
                          </label>
                        </div>

                        {/* <input
                          type="number"
                          name="slot"
                          {...register("slot", { valueAsNumber: true })}
                          placeholder="Slot"
                          className="w-full px-6 py-4 font-medium transition-colors border-gray-300 rounded-xl dark:bg-gray-800 dark:text-gray-50"
                        /> */}
                        <Controller
                          control={control}
                          name="slot"
                          render={({ field: { onChange, value } }) => (
                            <SlotInput onChange={onChange} />
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end space-x-3 modal__custom__footer">
                  <button
                    type="button"
                    className="p-3 text-lg font-semibold text-gray-400 btn button-secondary--outline"
                    data-bs-dismiss="modal"
                    onClick={close}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="p-3 text-xl font-semibold bg-blue-500 rounded-lg btn button-secondary--outline text-gray-50"
                    data-bs-dismiss="modal"
                  >
                    Create event
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
