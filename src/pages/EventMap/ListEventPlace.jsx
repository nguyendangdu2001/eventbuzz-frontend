import React from "react";
import EventPlaceItem from "./EventPlaceItem";

const ListEventPlace = () => {
  const events = [
    {
      name: "Avalon le Fae Conclusion Campaign",
      location: "Tokyo, Japanes",
      peoples: "and 29 peoples",
      distance: "10km",
    },
    {
      name: "2,200 Days Anniversary",
      location: "Nameta, Kioko",
      peoples: "and 100 peoples",
      distance: "2km",
    },
    {
      name: "Fate/Grand Order ～6th Anniversary～",
      location: "Manaka, Sika",
      peoples: "and 3000 peoples",
      distance: "20km",
    },
    {
      name: "Servant Strengthening Quests Part XIV",
      location: "Yakano, Conan",
      peoples: "and 3200 peoples",
      distance: "8m",
    },
    {
      name: "FGO Summer 2021 Event (US)",
      location: "Action, Meta",
      peoples: "and 200 peoples",
      distance: "90m",
    },
    {
      name: "All In! Las Vegas Championship Match",
      location: "Sika, Nata",
      peoples: "and 10 peoples",
      distance: "9km",
    },
    {
      name: "Seven Duels of Swordbeauties!",
      location: "Temano, Kado",
      peoples: "and 88 peoples",
      distance: "9km",
    },
    {
      name: "Saber Event",
      location: "Kado, Sado",
      peoples: "and 80 peoples",
      distance: "10km",
    },
    {
      name: "Nakmino Event",
      location: "Sanka, Kata",
      peoples: "and 10 peoples",
      distance: "100km",
    },
    {
      name: "Sudo - Root user",
      location: "Ren, Ran",
      peoples: "and 2001 peoples",
      distance: "30m",
    },
  ];
  return (
    <div className="w-full space-y-2">
      {events.map((e, i) => (
        <EventPlaceItem
          name={e.name}
          location={e.location}
          peoples={e.peoples}
          distance={e.distance}
          img={`https://picsum.photos/100/100.jpg?random=${i}`}
        />
      ))}
    </div>
  );
};

export default ListEventPlace;
