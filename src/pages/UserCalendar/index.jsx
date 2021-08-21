import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import EventCalendarItem from "./EventCalendarItem";
import DetailPopUp from "./DetailPopUp";

// const Calendar = lazy(() => import("./Calendar"));

const UserCalendar = ({ className }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const calendarContainer = useRef(null);
  const [selected, setSelected] = useState();
  const [calendar, setcalendar] = useState([
    {
      location: "Orlando,Mimana",
      time: "Tuesday, 17 August 2021, 07:00 PM",
      name: "Origami Crane Wedding Planners",
      img: "https://shopkingsgate.co.uk/wp-content/uploads/2019/10/GAMING-2019_DigitalArtboards_Mobile-banner.jpg",
      id: "1",
    },
    {
      location: "Tokyo,Japanes",
      time: "Tuesday, 17 August 2021, 6:00 PM",
      name: "Mosaic Events",
      img: "https://i.pinimg.com/originals/a5/4e/e9/a54ee9e19a708ff036b65ed6b29e5113.png",
      id: "2",
    },
    {
      location: "Masya,Taiwan",
      time: "Monday, 10 October 2021, 9:00 AM",
      name: "Electronic Events",
      img: "https://img.freepik.com/free-vector/music-event-poster-template-with-colorful-shapes_1361-1591.jpg?size=626&ext=jpg",
      id: "3",
    },
    {
      location: "Sadnes, Kiomo",
      time: "Monday, 10 October 2021, 3:30 PM",
      name: "Yukino Yukinoshite",
      img: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/131937051/original/9718ba4691185f5300554f3f7da7c5adc4dae886/poster-design-for-events.png",
      id: "4",
    },
    {
      location: "Yamita, Shata",
      time: "Monday, 10 October 2021, 4:00 PM",
      name: "Object can be null",
      img: "https://channel.mediacdn.vn/thumb_w/640/2019/11/8/photo-2-15732207505351867040976.jpg",
      id: "5",
    },
    {
      location: "Gitema , Sanko",
      time: "Sunday, 02 December 2021, 09:00 PM",
      name: "Binding Kameha",
      img: "https://pbs.twimg.com/media/Cw_pksQXEAAZkWg.jpg",
      id: "6",
    },
    {
      location: "Sita , Meta",
      time: "Sunday, 02 December 2021, 10:30 PM",
      name: "Kanja, Napa",
      img: "https://asialive365.com/wp-content/uploads/2016/11/Alan-Walker-Announce-Poster-Master.jpg",
      id: "7",
    },
  ]);
  const onRemove = (id) => {
    const newCalendar = calendar?.filter((v) => v?.id !== id);
    setcalendar(newCalendar);
  };
  const showCalendar = calendar?.reduce((prev, cur) => {
    const key = cur?.time.split(",")?.slice(0, 2)?.join(",");
    return { ...prev, [key]: [...(prev[key] || []), cur] };
  }, {});
  console.log(showCalendar);
  const q = useMemo(() => gsap.utils.selector(calendarContainer), []);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(q(".main-axis"), {
      opacity: 0,
    });
    tl.from(q(".day-item"), {
      y: 200,
      stagger: {
        each: 0.1,
        from: 0,
        grid: "auto",
      },
      duration: 0.5,
    });
    tl.from(
      q(".day-circle"),
      {
        opacity: 0,
        stagger: {
          each: 0.1,
          from: 0,
          grid: "auto",
        },
      },
      "-=0.5"
    );
    tl.from(
      q(".day-name"),
      {
        opacity: 0,
        stagger: {
          each: 0.1,
          from: 0,
          grid: "auto",
        },
      },
      "-=0.5"
    );
    tl.from(q(".calendar-event"), {
      opacity: 0,
      stagger: {
        each: 0.1,
        from: 0,
        grid: "auto",
      },
      duration: 0.2,
    });

    return () => {};
  }, [q]);
  return (
    <div className={`${className} container mx-auto px-6 space-y-6 py-2`}>
      <div className="text-3xl font-bold dark:text-gray-50">Calendar</div>
      <div className="relative" ref={calendarContainer}>
        <div className="absolute top-0 bottom-0 left-0 w-0.5 -translate-x-1/2 bg-blue-500 main-axis"></div>
        <div className="space-y-4">
          {Object.keys(showCalendar)?.map((v) => (
            <div className="relative space-y-4 day-item" key={v}>
              <div className="relative pl-4 text-xl font-semibold dark:text-gray-50">
                <div className="absolute left-0 w-3 h-3 -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full top-1/2 shadow-neon day-circle"></div>
                <div className="day-name">
                  <span className="">{v}</span>
                  <div className="text-sm font-medium text-gray-400">
                    {showCalendar[v]?.length} events
                  </div>
                </div>
              </div>
              <div className="flex ml-4 space-x-2 overflow-auto">
                {showCalendar[v]?.map((v2) => (
                  <EventCalendarItem
                    key={v2?.id}
                    onClick={() => {
                      setIsModalOpened(true);
                      setSelected(v2?.id);
                    }}
                    {...v2}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <DetailPopUp
        isShow={isModalOpened && !!selected}
        selectedId={selected}
        calendar={calendar}
        close={() => {
          setIsModalOpened(false);
          setSelected();
        }}
        onRemove={onRemove}
      />
    </div>
  );
};

export default styled(UserCalendar)``;
