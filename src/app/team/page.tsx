import Heading from "@/components/Heading";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CardContainer from "@/components/CardContainer";
import HomeBackground from "../../../public/homeBackgroundGreen.png";
import ExecDisplay from "@/components/team/ExecDisplay";

// below are possible ways to add the coloured overlay using css (which would make it easy to change themes)
// currently the green background is part odf the image because text appears behind the coloured overlay otherwise.
// , boxShadow: "inset 0 0 0 1000px rgba(0,55,0,.2)"
// <div className="fixed top-0 left-0 w-48 h-full z-0 bg-base-100 z-0 opacity-80"></div>

export default function Team() {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${HomeBackground.src})` }}
    >
      <Header />
      <h1 className="font-sans text-accent text-5xl text-center drop-shadow-lg">
        SESA 2024 Executive Team
      </h1>
      {/* <div className="m-[max(15vw,20px)] flex-1 items-center justify-center border-2">
        
      </div> */}
      <ExecDisplay />
      <Footer />
    </div>
  );
}
