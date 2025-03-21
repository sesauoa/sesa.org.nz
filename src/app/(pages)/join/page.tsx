export const metadata = {
  title: "SESA - Join Us",
};

export default function JoinPage() {
  return (
    <div className="w-full flex flex-col font-sans p-6 lg:px-24">
      <h1 className="text-2xl md:text-3xl text-sesa-teal-dark font-bold m-6 text-center">
        Become a SESA member
      </h1>
      <div className="mx-auto w-20 mb-6 bg-sesa-teal-dark h-[2px]"></div>
      <iframe
        src="https://forms.gle/mTgnytcWUxMA6HET9"
        className="w-full h-screen rounded-lg shadow-md"
      >
        Loading...
      </iframe>
    </div>
  );
}
