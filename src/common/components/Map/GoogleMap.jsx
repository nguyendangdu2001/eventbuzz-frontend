import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import EventOnMapItem from "../../../pages/EventMap/EventOnMapItem";
import LocationMarker from "./LocationMarker";
const GoogleMap = ({ value, onChangeMap }) => {
  const onSelect = ({ x, y, lat, lng, event }) => {
    console.log([lat, lng]);
    onChangeMap([lat, lng]);
  };
  return (
    <div className="aspect-w-16 aspect-h-9">
      <div className="w-full h-full overflow-hidden  rounded-xl">
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
        >
          {value && (
            <LocationMarker key={value} lat={value?.[0]} lng={value?.[1]} />
          )}
        </GoogleMapReact>
      </div>
    </div>
  );
};
export default GoogleMap;
