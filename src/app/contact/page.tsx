import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function JoinPage() {
  return (
    <div>
      <div className="bg-primary">
        <Navigation />
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
