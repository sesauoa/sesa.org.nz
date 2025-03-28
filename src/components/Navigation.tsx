"use client";

import Link from "next/link";
import SesaLogo from "../../public/sesaLogo.svg";
import { AnimatedHambuger } from "./AnimatedHamburger";
import { routes } from "../data/routes";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import NavSide from "./NavSide";
import JoinButton from "./JoinButton";

export default function Navigation() {
  const [isActive, setActive] = useState(false);

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="bg-transparent flex justify-between items-center p-5">
        <a href="/" className="min-w-36 border-solid text-center inline">
          <img src={SesaLogo.src} alt="SESA Logo" />
        </a>

        <ul className="hidden lg:flex justify-center items-center p-5">
          {routes.map((route) => {
            const { id, name, href, target } = route;
            return (
              <li
                key={id}
                className="font-sans text-lg text-white whitespace-nowrap inline px-5 group"
              >
                <div className="relative inline-block">
                  <Link
                    href={href}
                    target={target}
                    rel={
                      target === "_blank" ? "noopener noreferrer" : undefined
                    }
                    className="relative flex items-center gap-1 transition-all"
                  >
                    {name}
                  </Link>
                  <span className="absolute -bottom-0.5 -left-2 -right-2 h-[2px] origin-left scale-x-0 group-hover:scale-100 rounded-full bg-white transition-transform duration-300 ease-out" />
                </div>
              </li>
            );
          })}
          <div className="ml-6">
            <JoinButton />
          </div>
        </ul>
        <div
          className={
            isActive ? "fixed right-5 top-[29.5px] z-20" : "flex lg:hidden"
          }
        >
          <AnimatedHambuger isActive={isActive} setActive={setActive} />
        </div>
        <AnimatePresence mode="wait">
          {isActive && <NavSide setActive={setActive} />}
        </AnimatePresence>
      </div>
    </div>
  );
}
