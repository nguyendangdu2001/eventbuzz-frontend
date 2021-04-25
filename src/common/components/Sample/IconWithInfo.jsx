import SwitchIcon from "@components/icons/SwitchIcon";
import React from "react";

const IconWithInfo = () => {
  return (
    <div className="grid grid-cols-3 gap-x-8">
      <div className="space-y-3">
        <div className="icon w-12 h-12">
          <SwitchIcon />
        </div>
        <div className="title text-lg font-medium">Built for developers</div>
        <div className="des text-gray-500">
          Landkit is built to make your life easier. Variables, build tooling,
          documentation, and reusable components.
        </div>
      </div>
      <div className="space-y-3">
        <div className="icon w-12 h-12">
          <SwitchIcon />
        </div>
        <div className="title text-lg font-medium">Built for developers</div>
        <div className="des text-gray-500">
          Landkit is built to make your life easier. Variables, build tooling,
          documentation, and reusable components.
        </div>
      </div>
      <div className="space-y-3">
        <div className="icon w-12 h-12">
          <SwitchIcon />
        </div>
        <div className="title text-lg font-medium">Built for developers</div>
        <div className="des text-gray-500">
          Landkit is built to make your life easier. Variables, build tooling,
          documentation, and reusable components.
        </div>
      </div>
    </div>
  );
};

export default IconWithInfo;
