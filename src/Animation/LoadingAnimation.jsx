import React, { useState } from "react";
import { motion } from "framer-motion";

const LoadingAnimation = ({ children }) => {
  const [done, setDone] = useState(false);

  return (
    <>
      {children}

      {!done && (
        <div className=" select-none cursor-pointer fixed inset-0 z-1000 flex justify-center items-center overflow-hidden">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.5, times: [0, 0.3, 0.7, 1] }}
            className="bg-gradient-to-r from-[#ff9731] to-[#fe340a] bg-clip-text text-transparent absolute z-100 font-extrabold font-[sun-roman] text-[10vw] leading-none"
          >
            Environment
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.5, delay: 1.5, times: [0, 0.3, 0.7, 1] }}
            className="bg-gradient-to-r from-[#ff9731] to-[#fe340a] bg-clip-text text-transparent absolute z-100 font-extrabold font-[sun-roman] text-[10vw] leading-none"
          >
            Experiences
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.5, delay: 3, times: [0, 0.3, 0.7, 1] }}
            className="bg-gradient-to-r from-[#ff9731] to-[#fe340a] bg-clip-text text-transparent absolute z-100 font-extrabold font-[sun-roman] text-[10vw] leading-none"
          >
            Content
          </motion.h1>

          <motion.div
            initial={{ y: "0%" }}
            animate={{ y: "-100%" }}
            transition={{ duration: 1.5, delay: 4.5, ease: "easeInOut" }}
            onAnimationComplete={() => setDone(true)}
            className="absolute inset-0 bg-black"
          />
        </div>
      )}
    </>
  );
};

export default LoadingAnimation;
