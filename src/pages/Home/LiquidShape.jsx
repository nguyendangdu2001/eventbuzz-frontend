import React from "react";

const LiquidShape = ({ className }) => {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop
            id="stop1"
            stop-color="rgba(169.97, 236.278, 255, 1)"
            offset="0%"
          ></stop>
          <stop
            id="stop2"
            stop-color="rgba(90.734, 138.16, 198.258, 1)"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient)"
        d="M21.8,-24.4C29.1,-19.8,36.5,-13.8,39.8,-5.5C43.1,2.8,42.3,13.4,36.8,19.8C31.3,26.2,21.2,28.4,11.8,31.3C2.4,34.3,-6.4,38,-13.1,35.7C-19.8,33.3,-24.4,25,-28,17C-31.7,9,-34.3,1.2,-33.9,-6.8C-33.5,-14.9,-30,-23.3,-23.9,-28C-17.7,-32.7,-8.8,-33.9,-0.8,-32.9C7.2,-31.9,14.5,-28.9,21.8,-24.4Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        stroke-width="0"
        // style="transition: all 0.3s ease 0s;"
        stroke="url(#sw-gradient)"
      ></path>
    </svg>
  );
};

export default LiquidShape;
