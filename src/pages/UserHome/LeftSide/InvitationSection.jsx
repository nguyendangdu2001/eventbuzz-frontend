import React from "react";
import EventInvitationItem from "./EventInvitationItem";

const InvitationSection = () => {
  return (
    <div className="space-y-6">
      <h3 className="font-semibold text-gray-500 uppercase dark:text-gray-50">
        Invitation
      </h3>
      <div className="space-y-5">
        <EventInvitationItem
          id="1"
          pic="https://media-exp1.licdn.com/dms/image/C4D1BAQFAC3o2eHS_vA/company-background_10000/0/1565182814457?e=2159024400&v=beta&t=zWT-JPXEhmCFr0L8eTn0LswSz82VWuuJBkRuPAvLN-Q"
          userName="Hunter"
          location="West Roxbury, Massachusetts"
          eventName="Highwood Terrace Events"
        />
        <EventInvitationItem
          id="2"
          pic="https://backstage.vn/wp-content/uploads/2020/07/t%E1%BB%95-ch%E1%BB%A9c-s%E1%BB%B1-ki%E1%BB%87n-3.jpg"
          userName="Peter"
          location="Wauseon, Massachusetts"
          eventName="Cliffs of Moher Events"
        />
        <EventInvitationItem
          id="3"
          pic="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZWRtJTIwZmVzdGl2YWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
          userName="Conor"
          location="Charlotte, North Carolina"
          eventName="Lightning Bug Events"
        />
      </div>
    </div>
  );
};

export default InvitationSection;
