import SesaLogo from "../../public/sesaLogo.svg";

export default function SesaHeader() {
  return (
    <ul className="bg-primary flex justify-center items-center p-5">
      <div className="min-w-40 border-solid text-center inline pr-3">
        <img src={SesaLogo.src} alt="SESA Logo" />
      </div>
      <li className="font-sans text-lg text-primary-content inline px-6">
        <a href="#">Home</a>
      </li>
      <li className="font-sans text-lg text-primary-content inline px-6">
        <a href="#">News</a>
      </li>
      <li className="font-sans text-lg text-primary-content inline px-6">
        <a href="#">Our Team</a>
      </li>
      <li className="font-sans text-lg text-primary-content inline px-6">
        <a href="#">Sponsors</a>
      </li>
      <li className="font-sans text-lg text-primary-content inline px-6">
        <a href="#">Careers</a>
      </li>
      <li className="font-sans text-lg text-primary-content inline px-6">
        <a href="#">Event Calendar</a>
      </li>
      <li className="font-sans text-lg text-primary-content inline pl-6 pr-9">
        <a href="#">Contact</a>
      </li>
      <button className="bg-accent rounded-full font-sans text-lg text-primary-content inline px-6 py-2">
        Join
      </button>
    </ul>
  );
}
