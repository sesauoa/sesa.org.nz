"use client";

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Slideshow from "@/components/Slideshow";
import SplashHeader from "@/components/SplashHeader";
import OurSponsors from "@/components/OurSponsors";
import { goldSponsors, silverSponsors } from "@/data/sponsors";
import { Statistics } from "@/data/statistics";
import JoinButton from "@/components/JoinButton";
import JoinInfo from "@/components/JoinInfo";

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
        Our {Statistics.YEAR} Sponsors
      </h1>
      <div className="mx-auto w-20 mb-6 bg-sesa-teal-dark h-[1.5px]"></div>
      <OurSponsors title="Gold Sponsor" sponsors={goldSponsors} type="gold" />
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
        <div
          className="embedsocial-hashtag w-3/4 md:w-2/3 lg:w-3/5"
          data-ref="0d2bef034ff2dfc9fe101fa15784f4eb464e8c45"
        >
          <a
            className="feed-powered-by-es feed-powered-by-es-feed-img opacity-0 -z-10"
            href="https://embedsocial.com/social-media-aggregator/"
            target="_blank"
            title="Instagram widget"
          >
            <img
              src="https://embedsocial.com/cdn/images/embedsocial-icon.png"
              alt="EmbedSocial"
            />{" "}
            Instagram widget
          </a>
        </div>
      </div>
    </main>
  );
}
