"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import SplashHeader from "@/components/SplashHeader";

import HomeBackground from "../../../public/homeBackgroundGreen.png";
import AboutUs from "@/components/AboutUs";

// below are possible ways to add the coloured overlay using css (which would make it easy to change themes)
// currently the green background is part odf the image because text appears behind the coloured overlay otherwise.
// , boxShadow: "inset 0 0 0 1000px rgba(0,55,0,.2)"
// <div className="fixed top-0 left-0 w-48 h-full z-0 bg-base-100 z-0 opacity-80"></div>

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embedsocial.com/cdn/ht.js";
    script.id = "EmbedSocialHashtagScript";
    document.head.appendChild(script);
  }, []);

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
      {/* Social Media Feed Widget */}
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
      {/* About us component */}
      <div>
        <AboutUs />
      </div>
    </main>
  );
}
