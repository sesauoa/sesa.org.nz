"use client";

import Header from "@/components/Header";
import SplashHeader from "@/components/SplashHeader";

import HomeBackground from "../../../public/homeBackgroundGreen.png";
import AboutUs from "@/components/AboutUs";

// below are possible ways to add the coloured overlay using css (which would make it easy to change themes)
// currently the green background is part odf the image because text appears behind the coloured overlay otherwise.
// , boxShadow: "inset 0 0 0 1000px rgba(0,55,0,.2)"
// <div className="fixed top-0 left-0 w-48 h-full z-0 bg-base-100 z-0 opacity-80"></div>

export default function Home() {
  return (
    <main>
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${HomeBackground.src})` }}
      >
        <div className="h-screen flex flex-col min-h-inherit">
          <div className="mx-auto max-w-screen-xl">
            <Header />
            <SplashHeader
              headerText="Software Engineering Students Association"
              bodyText="SESA is the association for students and alumni of the Software Engineering programme at the University of Auckland."
            />
          </div>
        </div>
      </div>
        <AboutUs />
    </main>
  );
}
