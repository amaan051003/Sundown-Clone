import React, { useState } from "react";

const HomeList = () => {
  const [hoverImage, setHoverImage] = useState("");

  return (
    <div className="home-list relative h-full w-full flex flex-col">
      <div
        className="imgdiv fixed opacity-0 pointer-events-none z-50 left-250 top-60 rounded-3xl bg-amber-600 h-[0] w-[24vw] bg-cover bg-center"
        style={{ backgroundImage: `url(${hoverImage})` }}
      ></div>
      <div
        onMouseEnter={() => setHoverImage("/1.webp")}
        data-image="/1.webp"
        className="main-list relative py-8 h-[9vw] overflow-hidden w-screen border-b-2 border-[#BFBBB6]  flex items-center px-[2vw]"
      >
        <div className="elem h-full w-full  top-[-100%] absolute left-0 "></div>
        <div className="flex justify-between items-center w-full  ">
          <h2 className="relative z-10 text-[3vw] font-extrabold font-[sun-mediu]">
            Play New Kedivison
          </h2>
          <div className="flex flex-col justify-end items-end -gap-0.5">
            <h3 className="text-[1.2vw] font-[sun-roman] font-semibold">
              Nike
            </h3>
            <p className="text-[#BFBBB6] font-[sun-roman]">Environment</p>
          </div>
        </div>
      </div>
      <div
        onMouseEnter={() => setHoverImage("/2.webp")}
        data-image="/2.webp"
        className="main-list relative py-8 h-[9vw] overflow-hidden w-screen border-b-2 border-[#BFBBB6]  flex items-center px-[2vw]"
      >
        <div className="elem h-full w-full  top-[-100%] absolute bg-amber-500 left-0 "></div>
        <div className="flex justify-between items-center w-full  ">
          <h2 className="relative z-10 text-[3vw] font-extrabold font-[sun-mediu]">
            SOHO NYC
          </h2>
          <div className="flex flex-col justify-end items-end -gap-0.5">
            <h3 className="text-[1.2vw] font-[sun-roman] font-semibold">
              ARC'TERYX
            </h3>
            <p className="text-[#BFBBB6] font-[sun-roman]">Environment</p>
          </div>
        </div>
      </div>
      <div
        onMouseEnter={() => setHoverImage("/3.webp")}
        data-image="/3.webp"
        className="main-list relative py-8 h-[9vw] overflow-hidden w-screen border-b-2 border-[#BFBBB6]  flex items-center px-[2vw]"
      >
        <div className="elem h-full w-full  top-[-100%] absolute bg-amber-500 left-0 "></div>
        <div className="flex justify-between items-center w-full  ">
          <h2 className="relative z-10 text-[3vw] font-bold font-[sun-mediu]">
            Makers Studio HOI
          </h2>
          <div className="flex flex-col justify-end items-end -gap-0.5">
            <h3 className="text-[1.2vw] font-[sun-roman] font-semibold">
              Nike
            </h3>
            <p className="text-[#BFBBB6] font-[sun-roman]">Environment</p>
          </div>
        </div>
      </div>
      <div
        onMouseEnter={() => setHoverImage("/4.webp")}
        data-image="/4.webp"
        className="main-list relative py-8 h-[9vw] overflow-hidden w-screen border-b-2 border-[#BFBBB6]  flex items-center px-[2vw]"
      >
        <div className="elem h-full w-full  top-[-100%] absolute bg-amber-500 left-0 "></div>
        <div className="flex justify-between items-center w-full  ">
          <h2 className="relative z-10 text-[3vw] font-bold font-[sun-mediu]">
            SOHO 2023
          </h2>
          <div className="flex flex-col justify-end items-end -gap-0.5">
            <h3 className="text-[1.2vw] font-[sun-roman] font-semibold">
              CONVERSE
            </h3>
            <p className="text-[#BFBBB6] font-[sun-roman]">Environment</p>
          </div>
        </div>
      </div>
      <div
        onMouseEnter={() => setHoverImage("/5.webp")}
        data-image="/5.webp"
        className="main-list relative py-8 h-[9vw] overflow-hidden w-screen border-b-2 border-[#BFBBB6]  flex items-center px-[2vw]"
      >
        <div className="elem h-full w-full  top-[-100%] absolute bg-amber-500 left-0 "></div>
        <div className="flex justify-between items-center w-full  ">
          <h2 className="relative z-10 text-[3vw] font-extrabold font-[sun-mediu]">
            NYFW Popup
          </h2>
          <div className="flex flex-col justify-end items-end -gap-0.5">
            <h3 className="text-[1.2vw] font-[sun-roman] font-semibold">
              AFTERPAY
            </h3>
            <p className="text-[#BFBBB6] font-[sun-roman]">Environment</p>
          </div>
        </div>
      </div>
      <div
        onMouseEnter={() => setHoverImage("/6.webp")}
        data-image="/6.webp"
        className="main-list relative py-8 h-[9vw] overflow-hidden w-screen border-b-2 border-[#BFBBB6]  flex items-center px-[2vw]"
      >
        <div className="elem h-full w-full  top-[-100%] absolute bg-amber-500 left-0 "></div>
        <div className="flex justify-between items-center w-full  ">
          <h2 className="relative z-10 text-[3vw] font-bold font-[sun-mediu]">
            AIRFORCE 12021
          </h2>
          <div className="flex flex-col justify-end items-end -gap-0.5">

            <p className="text-[#BFBBB6] font-[sun-roman]">Environment</p>
          </div>
        </div>
      </div>
      <div
        onMouseEnter={() => setHoverImage("/7.webp")}
        data-image="/7.webp"
        className="main-list relative py-8 h-[9vw] overflow-hidden w-screen border-b-2 border-[#BFBBB6]  flex items-center px-[2vw]"
      >
        <div className="elem h-full w-full  top-[-100%] absolute bg-amber-500 left-0 "></div>
        <div className="flex justify-between items-center w-full  ">
          <h2 className="relative z-10 text-[3vw] font-extrabold font-[sun-mediu]">
            50TH Anniversary
          </h2>
          <div className="flex flex-col justify-end items-end -gap-0.5">
            <h3 className="text-[1.2vw] font-[sun-roman] font-semibold">
              Nike
            </h3>
            <p className="text-[#BFBBB6] font-[sun-roman]">Environment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeList;
