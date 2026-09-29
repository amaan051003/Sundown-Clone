import React from "react";
import Video from "../component/Home/video";
import Ribbon from "../component/Home/ribbon";
import { easeInOut, motion } from "framer-motion";
import HomeList from "../component/Home/HomeList";
import Swipe from "../component/Home/swipe";
import Footer from "../component/Home/footer";
const fillVariants = {
  rest: { scaleY: 0 },
  hover: { scaleY: 1 },
};
const textVariants = {
  rest: { color: "#000" },
  hover: { color: "#fff" },
};
const HomePage = () => {
  return (
    <div className="relative flex flex-col  w-full">
      <div className="main relative z-10 w-full bg-background flex flex-col">
        <div className="my-16 mx-8 h-[68vh] flex items-end justify-between border-b border-[#BFBBB6] pb-[9vh]">
          <div className="basis-1/2 font-[sun-mediu] font-bold text-[32px] text-left pl-3 pb-0.5 leading-[115%] tracking-tight">
            <h3 className="w-[60%]">
              Sundown is a multi-disciplinary studio focused on creating unique,
              end-to-end experiences and environments.
            </h3>
          </div>
          <div className="basis-1/2 font-[sun-mediu] text-[22vh] text-right pr-[1vw] leading-[82%]">
            <h1>SPACES</h1>
            <h1>THAT</h1>
            <h1>INSPIRE</h1>
          </div>
        </div>
        <div className="relative z-10">
          <Video />
        </div>
        <div className="hero h-[36vw] w-[46vw] absolute z-0 right-0 top-[60vh] ">
          <div className="hero1"></div>
          <div className="hero2"></div>
          <div className="hero3"></div>
        </div>
        <div>
          <Ribbon />
        </div>
        <div className="relative flex justify-between gap-2.5 mt-[20vw]">
          <div className="h-[20vh] w-[58%] ml-[8vw] flex items-center justify-center ">
            <h1 className="text-[4.5vw] z-1000 font-[sun-mediu] text-center tracking-tight leading-[4.2vw] text-left">
              We are a group of design-driven, goal-focused creators, producers,
              and designers who believe that the details make all the
              difference.
            </h1>
            <div className="p-hero absolute top-7 left-100 w-[30vw] h-[30vw] rounded-[50%] bg-[#fe330a]">
              <div className="p-hero1 absolute w-full h-full rounded-[50%] bg-[#fe330a]"></div>
            </div>
          </div>
          <div className="pt-[4vh] w-[22%] mr-[5vw] flex flex-col gap-15">
            <img
              className="object-cover rounded-3xl"
              src="/sideimage.webp"
              alt=""
            />
            <p className="text-[1.2vw] font-[sun-mediu] text-left leading-[1.5vw] tracking-tight">
              We love to create, we love to solve, we love to collaborate, and
              we love to turn amazing ideas into reality. We’re here to partner
              with you through every step of the process and know that
              relationships are the most important things we build.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="m-5 flex justify-start items-center gap-1 mt-[10vw]">
            <motion.div
              animate={{ opacity: [1, 0.35, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: easeInOut }}
              className="h-3 w-3 bg-[#fe330a] blur-[1px] rounded-[50%]"
            ></motion.div>
            <p>FEATURED PROJECTS</p>
          </div>
          <div>
            <HomeList />
          </div>
          <div className="ml-18 mt-10">
            <motion.button
              initial="rest"
              whileHover="hover"
              animate="rest"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="relative overflow-hidden rounded-[50px] border border-[#917e78dc] px-[60px] py-[16px]"
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
                  borderRadius: "20%",
                }}
              />
              <motion.h4
                variants={textVariants}
                transition={{ duration: 0.2, delay: 0.2 }}
                className="relative z-10 font-[sun-roman] font-extrabold text-[1.1vw] text-center"
              >
                All Projects - &gt;
              </motion.h4>
            </motion.button>
          </div>
        </div>
        <div className="mt-[3vw] h-[120vh] p-[2vw]">
          <div className="flex justify-center items-center bg-black rounded-3xl w-full h-full">
            <div className="w-[45%] font-[sun-roman] flex flex-col justify-center pl-50">
              <div className="border-l-2 p-1 border-[#504A45] leading-23">
                <h2 className="text-background text-[4.5vw] font-extrabold">
                  Design
                </h2>
                <h2 className="text-[#504A45] text-[4.5vw] font-extrabold ml-10">
                  Project
                </h2>
                <h2 className="text-[#504A45] text-[4.5vw] font-extrabold ml-10">
                  Execution
                </h2>
              </div>
              <div className="text-background mt-5 font-[sun-roman]">
                <p className="w-[30vw] leading-6.5 text-[20px]">
                  Our team works with our clients to refine an idea and concept
                  into an executable design. We create a final design that
                  encompasses the brand narrative to bring stories to life and
                  provide end-to-end design solutions from concept, design, and
                  architectural drawings to 3D renderings.
                </p>
              </div>
            </div>
            <div className="w-[55%] h-full ">
              <img
                className="object-cover w-full h-full rounded-3xl outline-none border-none"
                src="/page4-1.webp"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-full mt-30 h-[34vw]">
          <div className="m-5 flex justify-start items-center gap-1 pl-30">
            <motion.div
              animate={{ opacity: [1, 0.35, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: easeInOut }}
              className="h-3 w-3 bg-[#fe330a] blur-[1px] rounded-[50%]"
            ></motion.div>
            <p className="text-[22px]">WHO WE WORK WITH</p>
          </div>
          <div className="h-[23vw] mt-2 pl-30">
            <Swipe />
          </div>
        </div>
      </div>
      <div className="h-screen w-full bg-transparent pointer-events-none"></div>
      <div className="footer fixed bottom-0 left-0 h-[100vh] w-full z-0 bg-black text-9xl text-amber-300 flex items-center justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
