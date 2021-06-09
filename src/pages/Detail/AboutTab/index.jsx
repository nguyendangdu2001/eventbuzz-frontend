import React from "react";

const AboutTab = () => {
  return (
    <>
      <div className="space-y-8">
        <h1 className="header">Description</h1>
        <div className="space-y-8 text-gray-500 break-words dark:text-gray-300">
          <p className="font-medium leading-loose break-words">
            It is the grandiose vision of the Dream World Wide program to allow
            learning of the original Arabic language of the Quran easy to learn
            and accessible regardless of a person's language of origin. We want
            to empower as many students and teachers around the world as
            possible with our unprecedented Qur'anic language curriculum and
            hope to create a worldwide network of students that learn from each
            other and their instructions and remain connected indefinitely. Join
            us today to begin your journey!
          </p>
          <p className="font-medium leading-loose break-words">
            We want to empower as many students and teachers around the world as
            posible with our unprecedented Qur'anic language curriculum and hope
            to create a worldwide network of students that learn from each other
            and their instructions and remain connected indefinitely. Join us
            today to begin your journey!
          </p>
        </div>
      </div>
      <div className="space-y-8">
        <h1 className="header">Hours</h1>
        <div className="space-y-4">
          <p className="font-medium leading-loose text-gray-500 dark:text-gray-300">
            Weakday hours:{" "}
            <span className="font-bold text-black dark:text-white">
              7 PM - 10 PM
            </span>
          </p>
          <p className="font-medium leading-loose text-gray-500 dark:text-gray-300">
            Weakday hours:{" "}
            <span className="font-bold text-black dark:text-white">
              7 PM - 10 PM
            </span>
          </p>
        </div>
      </div>
      <div className="space-y-8">
        <h1 className="header">
          How can I contact the organizer with any question?
        </h1>
        <div className="space-y-4">
          <p className="font-medium leading-loose text-gray-500 dark:text-gray-300 editor">
            Please visit <a href="#a">www.dreamworldwide.net</a> and refer to
            the FAQ section for all questions and contact information.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutTab;
