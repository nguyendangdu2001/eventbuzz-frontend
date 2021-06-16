import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
const useGoogleMap = () => {
  const [coordinates, setcoordinates] = useState({});
  const onSelect = ({ x, y, lat, lng, event }) => {
    console.log({ x, y, lat, lng, event });
  };
  const GGMap = () => {
    <GoogleMapReact
      onClick={onSelect}
      bootstrapURLKeys={{
        key: "AIzaSyDIv-dA6LPtsVl7r1t5keDHPvlpVNlKoCE",
      }}
      defaultCenter={{
        lat: 15.882375,
        lng: 108.328445,
      }}
      defaultZoom={15}
      hoverDistance={Math.sqrt(80 ** 2 + 48 ** 2) / 2}
      distanceToMouse={(markerPos, mousePos, markerProps) => {
        const x = markerPos.x + 40;
        const y = markerPos.y + 24;
        return Math.sqrt(
          (x - mousePos.x) * (x - mousePos.x) +
            (y - mousePos.y) * (y - mousePos.y)
        );
      }}
    ></GoogleMapReact>;
  };
  return { GGMap, coordinates };
};
export default useGoogleMap;
