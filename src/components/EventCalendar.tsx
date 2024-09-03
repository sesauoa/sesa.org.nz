import React from "react";

const EventCalendar: React.FC = () => {
  return (
    <div className="flex h-screen m-4">
      <main className="hidden md:block w-2/3 h-full bg-white rounded-lg shadow-md p-4 pb-16 mr-4">
        <h2 className="text-xl font-semibold mb-2">Monthly View</h2>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=c_2l290qgafiq2qa5a7kjq5t2evk@group.calendar.google.com&ctz=Pacific%2FAuckland"
          className="w-full h-full"
        ></iframe>
      </main>
      <aside className="w-full md:w-1/3 h-full bg-white rounded-lg shadow-md p-4 pb-16">
        <h2 className="text-xl font-semibold mb-2">Upcoming Events</h2>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=c_2l290qgafiq2qa5a7kjq5t2evk@group.calendar.google.com&ctz=Pacific%2FAuckland&mode=AGENDA"
          className="w-full h-full"
        ></iframe>
      </aside>
    </div>
  );
};

export default EventCalendar;
