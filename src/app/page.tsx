"use client";

import Header from "@/components/SesaHeader";
import Footer from "@/components/SesaFooter";
import SplashHeader from "@/components/SplashHeader";
import AboutUs from "@/components/AboutUs";

import HomeBackground from "../../public/homeBackgroundGreen.png";
import TestImage from "../../public/test_image.jpeg";

// below are possible ways to add the coloured overlay using css (which would make it easy to change themes)
// currently the green background is part odf the image because text appears behind the coloured overlay otherwise.
// , boxShadow: "inset 0 0 0 1000px rgba(0,55,0,.2)"
// <div className="fixed top-0 left-0 w-48 h-full z-0 bg-base-100 z-0 opacity-80"></div>

const images: string[] = [HomeBackground.src, TestImage.src];

export default function Home() {
  return (
    <div>
      
      <Header />
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${HomeBackground.src})` }}
        // style={{ backgroundImage: `url(${HomeBackground.src})` }}
      >
        <SplashHeader
          images={images}
          headerText="Software Engineering Students Association"
          bodyText="SESA is the association for students and alumni of the Software Engineering programme at the University of Auckland."
        />
      </div>
      <AboutUs />
      <Footer />
    </div>
  );
}