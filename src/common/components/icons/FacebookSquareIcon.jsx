import React from "react";

const FacebookSquareIcon = ({ className }) => {
  return (
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-miterlimit="10"
        strokeWidth="2"
        d="M26,25V7c0-0.552-0.448-1-1-1H7C6.448,6,6,6.448,6,7v18c0,0.552,0.448,1,1,1h18C25.552,26,26,25.552,26,25z"
      />
      <path d="M19.8,26v-7.745h2.6l0.389-3.018H19.8v-1.927c0-0.874,0.243-1.469,1.496-1.469l1.598-0.001v-2.7c-0.277-0.037-1.225-0.119-2.329-0.119c-2.304,0-3.882,1.407-3.882,3.99v2.226h-2.606v3.018h2.606V26H19.8z" />
    </svg>
  );
};

export default FacebookSquareIcon;
