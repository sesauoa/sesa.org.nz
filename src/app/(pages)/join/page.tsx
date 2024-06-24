export const metadata = {
  title: "SESA - Join Us",
};

export default function JoinPage() {
  return (
    <div className="page-padding">
      <h1 className="page-title">Join Us</h1>
      <iframe
        src="https://forms.gle/DDKjJ2K91jHmKXPw9"
        className="w-full h-screen custom-border"
      >
        Loading...
      </iframe>
    </div>
  );
}
