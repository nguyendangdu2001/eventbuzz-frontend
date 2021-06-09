import {
  Agenda,
  Day,
  Inject,
  Month,
  ScheduleComponent,
  TimelineViews,
  ViewDirective,
  ViewsDirective,
  Week,
} from "@syncfusion/ej2-react-schedule";

import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "@syncfusion/ej2-calendars/styles/material.css";
import "@syncfusion/ej2-dropdowns/styles/material.css";
import "@syncfusion/ej2-inputs/styles/material.css";
import "@syncfusion/ej2-lists/styles/material.css";
import "@syncfusion/ej2-navigations/styles/material.css";
import "@syncfusion/ej2-popups/styles/material.css";
import "@syncfusion/ej2-splitbuttons/styles/material.css";
import "@syncfusion/ej2-react-schedule/styles/material.css";
import "./index.css";
import { extend, Browser, Internationalization } from "@syncfusion/ej2-base";
import React from "react";
import styled from "styled-components";
import { LocationMarkerIcon, TrashIcon } from "@heroicons/react/outline";
import * as dataSource from "./datasource.json";
const data = extend([], dataSource.webinarData, null, true);

function getTimeString(value) {
  const instance = new Internationalization();
  return instance.formatDate(value, { skeleton: "hm" });
}
function eventTemplate(props) {
  return (
    <div
      className="h-full template-wrap"
      style={{ background: props.SecondaryColor }}
    >
      <div style={{ background: props.PrimaryColor }} className="p-1">
        <div className="font-medium subject">{props.Subject}</div>
        <div className="time">
          Time: {getTimeString(props.StartTime)} -{" "}
          {getTimeString(props.EndTime)}
        </div>
      </div>

      <div className="image">
        <img
          src={
            "https://ej2.syncfusion.com/react/demos/src/schedule/images/" +
            props.ImageName +
            ".svg"
          }
          alt={props.ImageName}
        />
      </div>
      <div className="event-description">{props.Description}</div>
      <div className="footer" style={{ background: props.PrimaryColor }}></div>
    </div>
  );
}
function timelineEventTemplate(props) {
  return (
    <div className="template-wrap" style={{ background: props.PrimaryColor }}>
      <div
        className="subject"
        style={{
          background: props.SecondaryColor,
          borderRightWidth: 15,
          borderLeftWidth: 15,
          borderLeftColor: props.PrimaryColor,
          borderRightColor: props.PrimaryColor,
          borderLeftStyle: "solid",
          borderRightStyle: "solid",
        }}
      >
        {props.Subject}
      </div>
    </div>
  );
}
const UserCalendar = ({ className }) => {
  return (
    <div className={`${className} grid w-full grid-cols-12 px-6 gap-x-5`}>
      <div className="col-span-8">
        <ScheduleComponent
          selectedDate={new Date(2018, 1, 15)}
          startHour="08:00"
          endHour="18:00"
          workHours={{ start: "08:00" }}
          eventSettings={{ dataSource: data }}
          readonly
          rowAutoHeight
          className="!max-h-full min-h-[550px]"
          views={["Day", "Month", "Week"]}
          height="100%"
        >
          <ViewsDirective>
            <ViewDirective
              option={Browser.isDevice ? "TimelineDay" : "TimelineWeek"}
              eventTemplate={timelineEventTemplate}
            />
            <ViewDirective
              option={Browser.isDevice ? "Day" : "Week"}
              eventTemplate={eventTemplate}
            />
          </ViewsDirective>
          <Inject services={[Day, Week, Month, TimelineViews]} />
        </ScheduleComponent>
      </div>
      <div className="col-span-4">
        <div className="sticky top-[88px] min-h-[calc(100vh-88px)] max-h-0">
          <div className="absolute inset-0 overflow-y-auto">
            <div className="grid grid-cols-2 px-2 gap-x-4 gap-y-4">
              {[...Array(6)].map((_, i) => (
                <div className="overflow-hidden transition-transform transform bg-white rounded-md shadow dark:bg-gray-800 group hover:scale-105">
                  <div
                    className="relative h-56 bg-cover"
                    style={{
                      backgroundImage:
                        "url(https://cdn.dribbble.com/users/1626229/screenshots/15031394/media/eef54ce87566d4217c4340a3049ff77c.jpg?compress=1&resize=1000x750)",
                    }}
                  >
                    <div className="flex items-end w-full h-full bg-gradient-to-t from-blue-800 dark:from-gray-900">
                      <div className="p-4">
                        <div className="flex items-center space-x-1 font-medium text-green-300">
                          <LocationMarkerIcon className="w-6 h-6" />
                          <div className="text-sm">Some where</div>
                        </div>

                        <div className="font-semibold text-gray-50">
                          Name of the event
                        </div>
                        <div className="text-sm text-gray-50">
                          Saturday, Sep 14, 2019 at 20:30 PM
                        </div>
                      </div>
                    </div>
                    <div className="absolute p-2 text-gray-100 transition-opacity duration-300 ease-in-out bg-green-600 rounded opacity-0 bg-opacity-80 top-2 left-2 group-hover:opacity-100">
                      <LocationMarkerIcon className="w-6 h-6" />
                    </div>
                    <div className="absolute p-2 text-gray-100 transition-opacity duration-300 ease-in-out bg-gray-400 rounded opacity-0 bg-opacity-80 top-2 right-2 group-hover:opacity-100">
                      <TrashIcon className="w-6 h-6" />
                    </div>
                  </div>
                  {/* <img
                    src="https://cdn.dribbble.com/users/1626229/screenshots/15031394/media/eef54ce87566d4217c4340a3049ff77c.jpg?compress=1&resize=1000x750"
                    alt=""
                  /> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default styled(UserCalendar)``;
