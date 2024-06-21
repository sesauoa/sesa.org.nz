import Link from "next/link";
import SesaLogo from "../../public/sesaLogo.svg";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-primary flex justify-between items-center p-[20px] px-[150px] mx-auto">
      <a href="#" className="min-w-40 border-solid text-center inline px-3">
        <Image src={SesaLogo.src} alt="SESA Logo" />
      </a>

      <ul className="flex justify-center items-center p-5">
        <li className="font-sans text-lg text-primary-content inline px-6">
          <Link href="/">Home</Link>
        </li>
        <li className="font-sans text-lg text-primary-content inline px-6">
          <Link href="/our-team">Our Team</Link>
        </li>
        <li className="font-sans text-lg text-primary-content inline px-6">
          <Link href="/sponsors">Sponsors</Link>
        </li>
        <li className="font-sans text-lg text-primary-content inline px-6">
          <Link href="https://linktr.ee/sesa.uoa">Linktree</Link>
        </li>
        <li className="font-sans text-lg text-primary-content inline px-6">
          <Link href="/event-calendar">Event Calendar</Link>
        </li>
        <li className="font-sans text-lg text-primary-content inline pl-6 pr-9">
          <Link href="/contact">Contact</Link>
        </li>
        <button className="bg-accent rounded-full font-sans text-lg text-primary-content inline px-6 py-[6px]">
          Join
        </button>
      </ul>
    </div>
  );
}
