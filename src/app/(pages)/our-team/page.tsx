import ExecDisplay from "@/components/ExecDisplay";
import PastExecutives from "@/components/PastExecutives";

export const metadata = {
  title: "SESA - Our Team",
};

export default function OurTeamPage() {
  return (
    <div className="w-full flex flex-col font-sans p-6 lg:px-24 text-center items-center">
      <h1 className="text-2xl md:text-3xl text-sesa-teal-dark font-bold m-6">
        SESA Executive Team 2024
      </h1>
      <div className="mx-auto w-20 mb-6 bg-sesa-teal-dark h-[2px]"></div>
      <ExecDisplay />
      <h1 className="text-2xl md:text-3xl text-sesa-teal-dark font-bold m-6">
        Past SESA Executives
      </h1>
      <div className="mx-auto w-20 mb-6 bg-sesa-teal-dark h-[2px]"></div>
      {/* <PastExecutives /> */}
    </div>
  );
}
