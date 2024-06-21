import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EventCalendar from "@/components/EventCalendar";

export default function JoinPage() {
  return (
    <div>
      <div className="bg-primary">
        <Navigation />
      </div>
      <EventCalendar />
      <Footer />
    </div>
  );
}
