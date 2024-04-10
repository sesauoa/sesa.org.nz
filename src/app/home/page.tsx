import Heading from "@/components/Heading";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CardContainer from "@/components/CardContainer";
import HomeBackground from "../../public/homeBackgroundGreen.png";

// below are possible ways to add the coloured overlay using css (which would make it easy to change themes)
// currently the green background is part odf the image because text appears behind the coloured overlay otherwise.
// , boxShadow: "inset 0 0 0 1000px rgba(0,55,0,.2)"
// <div className="fixed top-0 left-0 w-48 h-full z-0 bg-base-100 z-0 opacity-80"></div>

export default function Home() {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${HomeBackground.src})` }}
    >
      <Header />
      <div className="m-[max(15vw,20px)] flex-1 items-center justify-center">
        <h1 className="font-sans text-accent text-5xl text-center drop-shadow-lg">
          Need a website? Leave it to us.
        </h1>
        <p className="font-sans text-base-content font-bold text-2xl text-center m-10 drop-shadow-lg">
          We’re a group of university students united on our common interest in
          web design and development.
        </p>
      </div>
      <Heading title="our projects" />
      <div className="flex min-h-screen flex-col items-center justify-between">
        <CardContainer />
      </div>
      <Footer />
    </div>
  );
}
