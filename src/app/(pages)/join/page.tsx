export const metadata = {
  title: "SESA - Join Us",
};

export default function JoinPage() {
  return (
    <div className="w-full flex flex-col font-sans p-6 lg:px-24">
      <h1 className="text-2xl md:text-3xl text-sesa-teal-dark font-bold m-6 text-center">
        Become a member
      </h1>
      <div className="mx-auto w-20 my-2 bg-sesa-teal-dark h-0.5"></div>
      <iframe
        src="https://forms.gle/DDKjJ2K91jHmKXPw9"
        className="w-full h-screen rounded-lg shadow-md"
      >
        Loading...
      </iframe>
    </div>
  );
}
