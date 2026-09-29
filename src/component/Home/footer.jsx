import React from "react";

const Footer = () => {
  return (
    <div className="h-screen w-screen bg-black cursor-pointer select-none">
      <div className="relative h-full w-full flex justify-between  items-center">
        <div className="absolute z-9 -left-16 -top-[55vw] blur-[50px] footer-shape1 h-[90vw] w-[50vw] bg-[#fe330a] "></div>
        <div className="absolute z-9 right-0 -top-[55vw] blur-[50px] footer-shape2 h-[90vw]  w-[50vw] bg-[#fe330a] "></div>
        <div className="absolute z-10 top-3 w-full text-white flex justify-between p-[5vw]">
          <div className="text-[2.1vw] font-[sun-mediu] leading-13">
            <h2>Work</h2>
            <h2>Studio</h2>
            <h2>Contact</h2>
          </div>
          <div className="font-[sun-roman] w-[24%]">
            <div className="border-b-2 flex flex-col gap-8 border-background">
              <p className="text-[25px] leading-7">
                Get industry insights and creative inspiration straight to your
                inbox.
              </p>
              <h6 className="text-[1.2vw]">Email</h6>
            </div>
          </div>
        </div>

        <div className="mt-[12vw] mx-[2vw] z-20 flex flex-col justify-center w-full ">
          <img
            className="z-30 border-b border-[#504A45] pb-10 "
            src="/footerlogo.svg"
            alt=""
          />
          <div className="flex justify-center gap-[20vw] text-2xl text-white mt-10">
            <h5>Copyright © Sundown Studio</h5>
            <h5>Brooklyn, NY</h5>
            <h5>Instagram</h5>
            <h5>LinkedIn</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
