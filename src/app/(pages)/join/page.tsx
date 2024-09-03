export const metadata = {
  title: "SESA - Join Us",
};

export default function JoinPage() {
  return (
    <div className="w-full flex flex-col font-sans p-6 lg:px-24">
      <h1 className="text-2xl md:text-3xl text-sesa-teal-dark font-bold m-6">Join Us</h1>
      <iframe
        src="https://forms.gle/DDKjJ2K91jHmKXPw9"
        className="w-full h-screen rounded-lg shadow-md"
      >
        Loading...
      </iframe>
    </div>
  );
}
