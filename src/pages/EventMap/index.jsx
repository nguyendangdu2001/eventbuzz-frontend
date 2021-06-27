import GoogleMapReact from "google-map-react";
import React, { useState } from "react";
import EventOnMapItem from "./EventOnMapItem";
import ListEventPlace from "./ListEventPlace";
import { style } from "./MapStyle";

const EventMap = ({ className }) => {
  const markers = [
    { id: 1, content: "333$", lat: 15.882375, lng: 108.328445 },
    { id: 2, content: "333$", lat: 16, lng: 108.328445 },
    { id: 3, content: "333$", lat: 13.882375, lng: 108.328445 },
    { id: 4, content: "333$", lat: 12.882375, lng: 108.328445 },
    { id: 5, content: "333$", lat: 11.882375, lng: 108.328445 },
  ];
  const [hoveringItem, setHoveringItem] = useState(-1);
  //   const _onChildHover = ()
  return (
    <div className={`${className} grid w-full grid-cols-12 gap-x-5`}>
      <div className="col-span-12 lg:col-span-8">
        <div className="relative w-full h-full aspect-w-16 aspect-h-9">
          <div className="absolute w-full h-full max-h-full overflow-hidden">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyDIv-dA6LPtsVl7r1t5keDHPvlpVNlKoCE",
              }}
              //   options={{ styles: style }}
              defaultCenter={{
                lat: 15.882375,
                lng: 108.328445,
              }}
              defaultZoom={15}
              onChildMouseEnter={(hoverKey) => setHoveringItem(hoverKey)}
              hoverDistance={Math.sqrt(80 ** 2 + 48 ** 2) / 2}
              distanceToMouse={(markerPos, mousePos, markerProps) => {
                // console.log(mousePos);
                const x = markerPos.x + 40;
                // because of marker non symmetric,
                // we transform it central point to measure distance from marker circle center
                // you can change distance function to any other distance measure
                const y = markerPos.y + 24;

                // and i want that hover probability on markers with text === 'A' be greater than others
                // so i tweak distance function (for example it's more likely to me that user click on 'A' marker)
                // another way is to decrease distance for 'A' marker
                // this is really visible on small zoom values or if there are a lot of markers on the map

                // it's just a simple example, you can tweak distance function as you wish
                return Math.sqrt(
                  (x - mousePos.x) * (x - mousePos.x) +
                    (y - mousePos.y) * (y - mousePos.y)
                );
              }}
            >
              {markers.map((item) => (
                <EventOnMapItem
                  key={item?.id}
                  {...item}
                  isHover={hoveringItem === item?.id}
                />
              ))}
            </GoogleMapReact>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-4">
        <div className="sticky top-[88px] min-h-[calc(100vh-88px)] max-h-0">
          <div className="absolute inset-0 overflow-y-auto">
            <ListEventPlace />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventMap;
