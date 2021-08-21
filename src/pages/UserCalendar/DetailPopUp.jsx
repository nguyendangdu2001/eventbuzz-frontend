import React from "react";
import styled from "styled-components";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import useIsDarkTheme from "@hooks/useIsDarkTheme";
import GoogleMapReact from "google-map-react";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import { ShareIcon, UserAddIcon } from "@heroicons/react/solid";

const DetailPopUp = ({
  className,
  isShow,
  close,
  calendar,
  selectedId,
  onRemove,
}) => {
  const dark = useIsDarkTheme();
  const item = calendar?.find((v) => v?.id === selectedId);
  console.log(item);
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

        <div className="min-h-screen my-auto text-right">
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300 transform-gpu"
            enterFrom="translate-x-20 opacity-0"
            enterTo="opacity-100 translate-x-0"
            leave="ease-in duration-200 transform-gpu"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 translate-x-20"
          >
            <div className="inline-block w-full max-w-screen-md min-h-screen space-y-4 text-left align-middle transition-all transform shadow-xl bg-gray-50 dark:bg-gray-800">
              <div className="space-y-4">
                <div>
                  <img
                    src={item?.img}
                    alt=""
                    className="w-full h-[300px] object-cover"
                  />

                  <div className="p-2 space-y-3 dark:text-gray-50">
                    <div className="grid grid-cols-12 gap-x-2">
                      <div className="col-span-9 space-y-1">
                        <div className="text-sm dark:text-gray-200">
                          {item?.time}
                        </div>
                        <div className="text-2xl font-semibold">
                          {item?.name}
                        </div>
                        <div className="flex items-center space-x-1 font-medium text-green-500 dark:text-green-300">
                          <LocationMarkerIcon className="w-6 h-6" />
                          <div className="">{item?.location}</div>
                        </div>
                      </div>
                      <div className="flex self-center justify-end col-span-3 space-x-2">
                        <div className="flex items-center justify-center p-3 transition-colors border border-green-500 rounded-full hover:bg-green-500 hover:text-gray-50 hover:shadow">
                          <UserAddIcon className="w-5 h-5" />
                        </div>
                        <div className="flex items-center justify-center p-3 transition-colors border border-blue-500 rounded-full hover:bg-blue-500 hover:text-gray-50 hover:shadow">
                          <ShareIcon className="w-5 h-5" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="aspect-w-16 aspect-h-9">
                        <div className="absolute w-full h-full overflow-hidden rounded-xl">
                          <GoogleMapReact
                            bootstrapURLKeys={{
                              key: "AIzaSyCOSEZt-JZqEPV7VhBz1FFPqsIbNRJV4fg",
                            }}
                            defaultCenter={{
                              lat: 15.882375,
                              lng: 108.328445,
                            }}
                            defaultZoom={11}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mt-auto space-x-3 modal__custom__footer">
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
                    className="p-3 text-xl font-semibold bg-red-500 rounded-lg btn button-secondary--outline text-gray-50"
                    data-bs-dismiss="modal"
                    onClick={() => {
                      onRemove(selectedId);
                      close();
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default styled(DetailPopUp)``;
