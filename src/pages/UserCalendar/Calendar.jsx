import React from "react";
import {
  // Agenda,
  // Day,
  // Month,
  Week,
  Inject,
  ScheduleComponent,
  TimelineViews,
  ViewDirective,
  ViewsDirective,
} from "@syncfusion/ej2-react-schedule";
import { extend, Browser, Internationalization } from "@syncfusion/ej2-base";
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
const Calendar = () => {
  return (
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
      <Inject services={[TimelineViews, Week]} />
    </ScheduleComponent>
  );
};

export default Calendar;
