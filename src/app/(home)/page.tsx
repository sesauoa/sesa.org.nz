"use client";

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Slideshow from "@/components/Slideshow";
import SplashHeader from "@/components/SplashHeader";
import OurSponsors from "@/components/OurSponsors";
import { goldSponsors, silverSponsors } from "@/data/sponsors";
import JoinInfo from "@/components/JoinInfo";
import EmbeddedSocial from "@/components/EmbeddedSocial";
import { statistics } from "@/data/statistics";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embedsocial.com/cdn/ht.js";
    script.id = "EmbedSocialHashtagScript";
    document.head.appendChild(script);
  }, []);

  return (
    <main>
      <div className="bg-black bg-opacity-60 bg-cover bg-center bg-no-repeat bg-blend-overlay min-h-[650px] w-full h-screen">
        <Slideshow />
        <div className="mx-auto max-w-screen-xl">
          <Navigation />
          <SplashHeader
            headerText="Software Engineering Students Association"
            bodyText="SESA is the association for students and alumni of the Software Engineering programme at the University of Auckland."
          />
        </div>
      </div>
      <h1 className="text-2xl md:text-3xl text-sesa-teal-dark font-bold m-6 text-center pt-4">
        Our {statistics.SPONSOR_YEAR} Sponsors
      </h1>
      <div className="mx-auto w-20 mb-6 bg-sesa-teal-dark h-[1.5px]"></div>
      <OurSponsors title="Gold Sponsors" sponsors={goldSponsors} type="gold" />
      <OurSponsors
        title="Silver Sponsors"
        sponsors={silverSponsors}
        type="silver"
      />

      <h1 className="text-2xl md:text-3xl text-sesa-teal-dark font-bold m-6 text-center">
        Connect with us
      </h1>
      <div className="mx-auto w-20 mb-6 bg-sesa-teal-dark h-[1.5px]"></div>
      <div className="w-full">
        <div className="flex justify-center">
          <div className="w-[500px] md:w-[600px] lg:w-[850px] text-center px-10 md:px-10 lg:px-14">
            <JoinInfo />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center relative">
        <EmbeddedSocial />
      </div>
    </main>
  );
}
