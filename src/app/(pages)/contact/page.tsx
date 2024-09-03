import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "SESA - Contact Us",
};

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col font-sans p-6 lg:px-24">
      <h1 className="text-2xl md:text-3xl text-sesa-teal-dark font-bold m-6 text-center">
        Contact Form
      </h1>
      <div className="mx-auto w-20 my-2 bg-sesa-teal-dark h-0.5"></div>
      <ContactForm />
    </div>
  );
}
