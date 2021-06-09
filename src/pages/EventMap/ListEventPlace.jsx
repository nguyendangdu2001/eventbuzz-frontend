import React from "react";
import EventPlaceItem from "./EventPlaceItem";

const ListEventPlace = () => {
  return (
    <div className="w-full space-y-2">
      {[...Array(9)].map((_, i) => (
        <EventPlaceItem img={`https://picsum.photos/100/100.jpg?random=${i}`} />
      ))}
    </div>
  );
};

export default ListEventPlace;
