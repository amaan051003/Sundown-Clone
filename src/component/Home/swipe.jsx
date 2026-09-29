import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const details = [
  {
    index: 1,
    logo: "/Nike.svg",
    para: "Retained Production support across retail and events in NY, CHI, LA. Creative Design, Design Management, Production/Project Management, and execution of work from concept to installation across the Country.",
  },
  {
    index: 2,
    logo: "/Converse.svg",
    para: "Creative Concepting, Design, Design Management, Project Management, and execution of work from concept to installation across the Country. Cross functional communication and management of third party partners.",
  },
  {
    index: 3,
    logo: "/Arc’teryx.svg",
    para: "Production and design along with install oversight and execution support for the SoHo store opening on Broadway St, New York. Also working on creative and production work for a new store opening in Glendale, California.",
  },
  {
    index: 4,
    logo: "/Hunter.svg",
    para: "Design and Production partner for Hunter Holiday 2022 Pop-in at Nordstrom 57th St, New York, including activations in Women’s, Men’s and Kid’s zones. Thirty-five (35) additional smaller take-downs in Nordstrom stores across the US. Concept design for Holiday boot customization events in stores across winter 2022.",
  },
  {
    index: 5,
    logo: "/AfterPay.svg",
    para: "Creative, Design, and Production Partner for 2023 CES. Scope Included creation of Branding Identity, Assets, and Digital Content, Design, Production design, Production oversight and Installation of client activations for IBM, Delta, Instacart, and more.",
  },
  {
    index: 6,
    logo: "/MediaLink.svg",
    para: "Creative, Design, and Production Partner for 2022 NY Fashion Week Pop-Up space. In Partnership with B-Reel scope including creation of Final Design, Design Assets, 3D Renders, Production design, Production/Partner oversight and creation of a two (2) story pop-up for Afterpay’s clients such as Crocs, JD Sports, Container Store, & Revolve.",
  },
];

const Swipe = () => {
  return (
    <div className="h-full w-screen cursor-grab flex items-center select-none">
      <Swiper
        // modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={60}
        navigation
      >
        {details.map((det) => (
          <SwiperSlide key={det.index}>
            <div className="h-[16vw] px-[1.2vw] border-l border-[#a39e9783]">
              <img className="object-cover w-[50%] " src={det.logo} alt="" />
              <p className="text-[20px] w-[90%] mt-[2vw]">{det.para}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swipe;
