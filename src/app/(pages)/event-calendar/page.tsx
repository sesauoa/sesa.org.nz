import EventCalendar from "@/components/EventCalendar";

export const metadata = {
  title: "SESA - Event Calendar",
};

export default function EventCalendarPage() {
  return (
    <div className="page-padding">
      <h1 className="page-title">Event Calendar</h1>
      <EventCalendar />
    </div>
  );
}
