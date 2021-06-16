import React, { useState } from "react";
import UserEventModal from "./UserEventModal";

export default function UserEventNew() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <button className="px-6 text-base font-bold bg-blue-600 rounded-md text-gray-50">
      Create event !
      <UserEventModal />
    </button>
  );
}
