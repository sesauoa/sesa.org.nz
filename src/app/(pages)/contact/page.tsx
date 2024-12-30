import SocialMediaCards from "@/components/SocialMediaCards";

export const metadata = {
  title: "SESA - Contact Us",
};

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col font-sans p-6 lg:px-24">
      <h1 className="text-2xl md:text-3xl text-sesa-teal-dark font-bold m-6 text-center">
        Contact Us
      </h1>
      <div className="mx-auto w-20 mb-6 bg-sesa-teal-dark h-[2px]"></div>
      <SocialMediaCards />
    </div>
  );
}
