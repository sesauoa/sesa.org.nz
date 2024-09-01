import Link from "next/link";
import { motion } from "framer-motion";
import { routes } from "@/constants/routes";

interface NavSideProps {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const menuSlide = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

const slide = {
  initial: { x: 80 },
  enter: (i: number) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i: number) => ({
    x: 80,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

export default function NavSide({
  setActive,
}: NavSideProps): React.ReactElement {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();
    setActive(false);
    setTimeout(() => {
      window.location.href = path;
    }, 800);
  };

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen bg-sesa-navy fixed lg:hidden right-0 top-0 text-white z-10"
    >
      <div className="box-border h-full px-24 pt-10 flex flex-col justify-between">
        <div className="flex flex-col text-xl gap-3 mt-20">
          {routes.map((data) => {
            return (
              <motion.div
                key={data.id}
                className="relative flex items-center group"
                custom={data.id}
                variants={slide}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <div className="relative inline-block">
                  <Link
                    href={data.href}
                    onClick={(e) => handleClick(e, data.href)}
                  >
                    {data.name}
                  </Link>
                  <span className="absolute -bottom-0.5 -left-2 -right-2 h-[2px] origin-left scale-x-0 group-hover:scale-100 rounded-full bg-white transition-transform duration-300 ease-out" />
                </div>
              </motion.div>
            );
          })}
          <a
            key="join-button"
            onClick={(e) => handleClick(e, "/join")}
            className="bg-sesa-teal-light cursor-pointer rounded-full font-sans text-lg text-white inline transition-transform duration-200 hover:scale-110 p-6 py-1 w-[85px]"
          >
            Join
          </a>
        </div>
      </div>
    </motion.div>
  );
}
