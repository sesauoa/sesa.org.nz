"use client";

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Slideshow from "@/components/Slideshow";
import SplashHeader from "@/components/SplashHeader";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embedsocial.com/cdn/ht.js";
    script.id = "EmbedSocialHashtagScript";
    document.head.appendChild(script);
  }, []);

  return (
    <main>
      <div className="bg-black bg-opacity-60 bg-cover bg-center bg-no-repeat bg-blend-overlay min-h-[600px] w-full h-screen">
        <Slideshow />
        <div className="mx-auto max-w-screen-xl">
          <Navigation />
          <SplashHeader
            headerText="Software Engineering Students Association"
            bodyText="SESA is the association for students and alumni of the Software Engineering programme at the University of Auckland."
          />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div
          className="embedsocial-hashtag w-3/4 md:w-2/3 lg:w-3/5"
          data-ref="0d2bef034ff2dfc9fe101fa15784f4eb464e8c45"
        >
          <a
            className="feed-powered-by-es feed-powered-by-es-feed-img"
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
