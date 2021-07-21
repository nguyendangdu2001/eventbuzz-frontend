import React from "react";
import locationMarker from "@assets/locationMarker.png";
const LocationMarker = () => {
  return (
    <div className="absolute transform -translate-x-1/2 -translate-y-1/2 lef-1/2 top-1/2">
      <img src={locationMarker} alt="" />
    </div>
  );
};

export default LocationMarker;
