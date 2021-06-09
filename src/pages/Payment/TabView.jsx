import { CheckIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import Tab1 from "./Tabs/Tab1";
import Tab2 from "./Tabs/Tab2";

const TabView = () => {
  const [index, setIndex] = useState(0);
  const next = () => {
    setIndex((index + 1) % tabs.length);
  };
  const tabs = [
    { name: "Customer info", component: <Tab1 next={next} /> },
    { name: "Billing info", component: <Tab2 next={next} /> },
  ];
  return (
    <>
      <div className="flex mt-6 space-x-12">
        {tabs.map((tab, i) => (
          <div className="flex items-center space-x-2">
            <div
              className={`${
                index >= i ? "bg-blue-600 text-gray-50" : ""
              } transition-colors flex items-center justify-center text-base font-semibold border border-gray-500 rounded-full w-7 h-7`}
            >
              {index > i ? <CheckIcon className="w-6 h-6" /> : i + 1}
            </div>
            <span className="text-base font-semibold">{tab.name}</span>
          </div>
        ))}
      </div>
      {tabs?.[index]?.component}
    </>
  );
};

export default TabView;
