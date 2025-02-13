import { motion, MotionConfig } from "framer-motion";

interface AnimatedHamburgerProps {
  isActive: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AnimatedHambuger: React.FC<AnimatedHamburgerProps> = ({
  isActive,
  setActive,
}) => {
  return (
    <>
      <MotionConfig transition={{ duration: 0.5 }}>
        <motion.button
          initial={false}
          className="relative h-16 w-16 rounded-full lg:hidden bg-sesa-navy-dark/0 transition-colors hover:bg-white/20 z-20"
          onClick={() => setActive(!isActive)}
          animate={isActive ? "open" : "closed"}
        >
          <motion.span
            className="absolute h-1 w-8 bg-white"
            style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
            variants={{
              open: { rotate: [0, 0, 45], top: ["35%", "50%", "50%"] },
              closed: { rotate: [45, 0, 0], top: ["50%", "50%", "35%"] },
            }}
          />
          <motion.span
            className="absolute h-1 w-8 bg-white"
            style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
            variants={{
              open: { rotate: [0, 0, -45] },
              closed: { rotate: [-45, 0, 0] },
            }}
          />
          <motion.span
            className="absolute h-1 w-8 bg-white"
            style={{ left: "50%", bottom: "35%", x: "-50%", y: "50%" }}
            variants={{
              open: { rotate: [0, 0, 45], bottom: ["35%", "50%", "50%"] },
              closed: { rotate: [45, 0, 0], bottom: ["50%", "50%", "35%"] },
            }}
          />
        </motion.button>
      </MotionConfig>
    </>
  );
};
