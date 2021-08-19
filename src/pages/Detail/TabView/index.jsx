import { AnimateSharedLayout, m } from "framer-motion";
import React, { useState } from "react";
import AboutTab from "../AboutTab";
import PictureTab from "../PictureTab";
import PostTab from "../PostTab";

const TabView = () => {
  const [index, setIndex] = useState(0);
  const tabs = [
    { name: "About", component: <AboutTab /> },
    { name: "Discussion", component: <PostTab /> },
    { name: "Picture", component: <PictureTab /> },
  ];
  return (
    <div className="space-y-3">
      <div className="flex">
        <AnimateSharedLayout>
          {tabs.map((tab, i) => (
            <button
              className={`p-6 text-xl font-semibold dark:text-gray-50 capitalize relative `}
              onClick={() => setIndex(i)}
            >
              {tab.name}
              {index === i && (
                <m.div
                  layoutId="a"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400 shadow-neon"
                ></m.div>
              )}
            </button>
          ))}
        </AnimateSharedLayout>
      </div>
      {tabs?.[index]?.component}
    </div>
  );
};

export default TabView;
