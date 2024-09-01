import AboutUs from "@/components/AboutUs";

export const metadata = {
  title: "SESA - About Us",
};

export default function AboutUsPage() {
  return (
    <div className="w-full flex flex-col font-sans p-6 lg:px-24">
      <AboutUs />
    </div>
  );
}
