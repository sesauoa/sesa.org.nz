import SocialMediaButtons from "./SocialMediaButtons";
import SesaLogo from "../../public/sesaLogo.svg";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer>
      <div className="bg-primary text-white shadow-md p-5 justify-center items-center">
        <div className="h-full flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center md:flex-wrap md:gap-6">
          <div className="min-w-28 border-solid inline mx-16">
            <a href="#">
              <img src={SesaLogo.src} alt="SESA Logo" />
            </a>
          </div>
          <div className="py-3 md:px-20">
            <SocialMediaButtons />
          </div>
        </div>
        <div className="py-3 text-center md:flex md:items-center md:justify-center">
          Powered by SESA using React + TypeScript <br />
          &copy; {currentYear} Software Engineering Students Association. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
