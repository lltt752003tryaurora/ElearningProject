import React from "react";
import BannerCarouselRight from "./BannerCaroselRight/BannerCarouselRight";
import "./bannerCarousel.scss";
import { TypeAnimation } from "react-type-animation";

const BannerCarousel = () => {
  return (
    <div className="grid grid-cols-2 bannerCarousel">
      {/* carouselBanner left */}
      <div className="carouselLeft flex flex-col items-center justify-center space-y-3">
        <h1 className="text-2xl font-bold text-[#6BB5F8] ">
          CHÀO MỪNG <p className=" my-2 text-[#B86BF8]">ĐẾN VỚI MÔI TRƯỜNG</p>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              "Vlearn",
              1000,
              "Vlearni",
              1000,
              "Vlearnin",
              1000,
              "Vlearning",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
        </h1>
        <button className="buttonBanner">Bắt đầu nào</button>
      </div>
      {/* carouselBanner right */}
      <div className="carouselRight">
        <BannerCarouselRight />
      </div>
    </div>
  );
};

export default BannerCarousel;
