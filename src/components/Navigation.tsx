"use client";

import Link from "next/link";
import SesaLogo from "../../public/sesaLogo.svg";
import { motion, MotionConfig } from "framer-motion";
import { routes } from "../constants/routes";
import { useState } from "react";

export default function Header() {
  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="bg-transparent flex justify-between items-center py-5">
        <a href="/" className="min-w-36 border-solid text-center inline">
          <img src={SesaLogo.src} alt="SESA Logo" />
        </a>

        <ul className="flex justify-center items-center p-5">
          {routes.map((route) => {
            const { id, name, href } = route;
            return (
              <li
                key={id}
                className="font-sans text-lg text-primary-content whitespace-nowrap inline px-6 group"
              >
                <Link
                  href={href}
                  className="relative flex items-center gap-1 transition-all"
                >
                  {name}
                  <span className="absolute -bottom-0.5 -left-2 -right-2 h-[2px] origin-left scale-x-0 group-hover:scale-100 rounded-full bg-white transition-transform duration-300 ease-out" />
                </Link>
              </li>
            );
          })}
          <a
            key="join-button"
            href="/join"
            className="bg-accent rounded-full font-sans text-lg text-primary-content inline transition-transform duration-200 transform hover:scale-110 px-6 py-[6px] ml-6"
          >
            Join
          </a>
        </ul>

        {/* <AnimatedHambuger /> */}
      </div>
    </div>
  );
}

const AnimatedHambuger = () => {
  const [active, setActive] = useState(false);

  return (
    <MotionConfig transition={{ duration: 0.5 }}>
      <motion.button
        initial={false}
        className="relative h-16 w-16 rounded-full bg-primary/0 transition-colors hover:bg-primary-content/20"
        onClick={() => setActive((a) => !a)}
        animate={active ? "open" : "closed"}
      >
        <motion.span
          className="absolute h-1 w-8 bg-primary-content"
          style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
          variants={{
            open: { rotate: [0, 0, 45], top: ["35%", "50%", "50%"] },
            closed: { rotate: [45, 0, 0], top: ["50%", "50%", "35%"] },
          }}
        />
        <motion.span
          className="absolute h-1 w-8 bg-primary-content"
          style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
          variants={{
            open: { rotate: [0, 0, -45] },
            closed: { rotate: [-45, 0, 0] },
          }}
        />
        <motion.span
          className="absolute h-1 w-8 bg-primary-content"
          style={{ left: "50%", bottom: "35%", x: "-50%", y: "50%" }}
          variants={{
            open: { rotate: [0, 0, 45], bottom: ["35%", "50%", "50%"] },
            closed: { rotate: [45, 0, 0], bottom: ["50%", "50%", "35%"] },
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};
