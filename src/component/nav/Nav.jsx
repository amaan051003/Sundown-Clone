import React from "react";

import { motion } from "framer-motion";
const Nav = () => {
  const fillVariants = {
    rest: { scaleY: 0 },
    hover: { scaleY: 1 },
  };
  const textVariants = {
    rest: { color: "#000" },
    hover: { color: "#fff" },
  };
  return (
    <div className="p-[2.5vw] pl-[2vw] pr-[2vw] relative z-10 flex justify-between items-center bg-background">
      <div>
        <img src="/logo.svg" alt="logo" />
      </div>
      <div className="flex gap-4 font-[sun-roman] font-bold ">
        <motion.button
          initial="rest"
          whileHover="hover"
          animate="rest"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="relative overflow-hidden rounded-4xl border border-[#917e78dc] px-[20px] py-[11px]"
        >
          <motion.span
            variants={fillVariants}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
            className="absolute bg-black"
            style={{
              left: "-10%",
              width: "120%",
              height: "300%",
              bottom: "-200%",
              borderRadius: "25%",
            }}
          />
          <motion.h4
            variants={textVariants}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="relative z-10"
          >
            Work
          </motion.h4>
        </motion.button>
        <motion.button
          initial="rest"
          whileHover="hover"
          animate="rest"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="relative overflow-hidden rounded-4xl border border-[#917e78dc] px-[18px] py-[11px]"
        >
          <motion.span
            variants={fillVariants}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
            className="absolute bg-black"
            style={{
              left: "-10%",
              width: "120%",
              height: "300%",
              bottom: "-200%",
              borderRadius: "25%",
            }}
          />
          <motion.h4
            variants={textVariants}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="relative z-10"
          >
            Studio
          </motion.h4>
        </motion.button>
        <motion.button
          initial="rest"
          whileHover="hover"
          animate="rest"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="relative overflow-hidden rounded-4xl border border-[#917e78dc] px-[18px] py-[11px]"
        >
          <motion.span
            variants={fillVariants}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
            className="absolute bg-black"
            style={{
              left: "-10%",
              width: "120%",
              height: "300%",
              bottom: "-200%",
              borderRadius: "25%",
            }}
          />
          <motion.h4
            variants={textVariants}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="relative z-10"
          >
            Contact
          </motion.h4>
        </motion.button>
      </div>
    </div>
  );
};
export default Nav;
