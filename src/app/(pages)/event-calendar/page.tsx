import EventCalendar from "@/components/EventCalendar";

export const metadata = {
  title: "SESA - Event Calendar",
};

export default function EventCalendarPage() {
  return (
    <div className="w-full flex flex-col font-sans p-6 lg:px-24">
      <h1 className="text-2xl md:text-3xl text-sesa-teal-dark font-bold m-6 text-center">
        Event Calendar
      </h1>
      <div className="mx-auto w-20 my-2 bg-sesa-teal-dark h-0.5"></div>
      <EventCalendar />
    </div>
  );
}
