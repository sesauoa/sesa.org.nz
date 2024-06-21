import Link from "next/link";
import SesaLogo from "../../public/sesaLogo.svg";
import { routes } from "../constants/routes";

export default function Header() {
  return (
    <div className="bg-primary flex justify-between items-center p-[20px] px-[150px] mx-auto">
      <a href="/" className="min-w-40 border-solid text-center inline px-3">
        <img src={SesaLogo.src} alt="SESA Logo" />
      </a>

      <ul className="flex justify-center items-center p-5">
        {routes.map((route) => {
          const { id, name, href } = route;
          return (
            <li key={id} className="font-sans text-lg text-primary-content whitespace-nowrap inline px-6">
              <Link href={href} className="flex items-center gap-1 transition-all">
                {name}
              </Link>
            </li>
          );
        })}
        <button key="join-button" className="bg-accent rounded-full font-sans text-lg text-primary-content inline transition-transform duration-200 transform hover:scale-110 px-6 py-[6px] ml-6">
          Join
        </button>
      </ul>

      {/* <button className="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-8 h-8 stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button> */}
    </div>
  );
}
