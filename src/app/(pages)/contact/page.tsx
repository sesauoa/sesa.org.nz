import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "SESA - Contact Us",
};

export default function ContactPage() {
  return (
    <div className="page-padding">
      <h2 className="page-title">Contact Form</h2>
      <ContactForm />
    </div>
  );
}
