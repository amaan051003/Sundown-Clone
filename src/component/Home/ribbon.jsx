import React from "react";
import { motion } from "framer-motion";

const Ribbon = () => {
  const content = (
    <>
      <h1>EXPERIENCES</h1>
      <div className="rounded-full bg-[#FE330A] h-18 w-18 mx-3" />
      <h1>CONTENT</h1>
      <div className="rounded-full bg-[#FE330A] h-18 w-18 mx-3" />
      <h1>ENVIRONMENTS</h1>
      <div className="rounded-full bg-[#FE330A] h-18 w-18 mx-5 " />
    </>
  );

  return (
    <div className="overflow-hidden font-[sun-mediu] text-[120px] whitespace-nowrap">
      <motion.div
        className="flex  items-center w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="flex gap-5 items-center">{content}</div>
        <div className="flex gap-5 items-center">{content}</div>
      </motion.div>
    </div>
  );
};

export default Ribbon;
