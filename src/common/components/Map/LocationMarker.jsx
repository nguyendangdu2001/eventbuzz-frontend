import React from "react";
import locationMarker from "@assets/locationMarker.png";
const LocationMarker = () => {
  return (
    <div className="absolute bottom-0 transform -translate-x-1/2 lef-1/2">
      <img src={locationMarker} alt="" />
    </div>
  );
};

export default LocationMarker;
