import React, { useState } from "react";
import PictureTab from "../PictureTab";
import PostTab from "../PostTab";

const TabView = () => {
  const [index, setIndex] = useState(0);
  const tabs = [
    { name: "post", component: <PostTab /> },
    { name: "Picture", component: <PictureTab /> },
  ];
  return (
    <div className="space-y-3">
      <div className="flex">
        {tabs.map((tab, i) => (
          <button
            className={`p-6 text-xl font-semibold border-b-2 dark:text-gray-50 capitalize ${
              index === i ? "border-indigo-500" : "border-transparent"
            }`}
            onClick={() => setIndex(i)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      {tabs?.[index]?.component}
    </div>
  );
};

export default TabView;
