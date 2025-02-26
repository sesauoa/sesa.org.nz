import Link from "next/link";
import { motion } from "framer-motion";
import { routes } from "@/data/routes";
import JoinButton from "./JoinButton";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
    setActive: (value: boolean) => void,
    router: any
  ) => {
    e.preventDefault();
    setActive(false);
    setTimeout(() => {
      if (path.startsWith("http")) {
        window.open(path, "_blank", "noopener,noreferrer");
      } else {
        router.push(path);
      }
    }, 500);
  };


  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen bg-sesa-navy-dark fixed lg:hidden right-0 top-0 text-white z-10"
    >
      <div className="box-border h-full px-24 pt-10 flex flex-col justify-between">
        <div className="flex flex-col text-xl gap-3 mt-20">
          {routes.map((route) => {
            const { id, name, href, target } = route;
            return (
              <motion.div
                key={id}
                className="relative flex items-center group"
                custom={id}
                variants={slide}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <div className="relative inline-block">
                  <Link
                    href={href}
                    onClick={(e) => handleClick(e, href, setActive, router)}
                    target={target}
                    rel={
                      target === "_blank" ? "noopener noreferrer" : undefined
                    }
                  >
                    {name}
                  </Link>
                  <span className="absolute -bottom-0.5 -left-2 -right-2 h-[2px] origin-left scale-x-0 group-hover:scale-100 rounded-full bg-white transition-transform duration-300 ease-out" />
                </div>
              </motion.div>
            );
          })}
          <div className="w-[85px] mt-2">
            <JoinButton />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
