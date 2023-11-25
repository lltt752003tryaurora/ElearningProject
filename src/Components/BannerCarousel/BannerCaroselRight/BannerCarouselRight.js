import React from "react";
import Lottie from "react-lottie";
import stydyAnimation from "./../../../assets/animation/studyAnimation.json";
const BannerCarouselRight = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: stydyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie
        options={defaultOptions}
        style={{ height: "400px", maxWidth: "500px", margin: "0 auto" }}
      />
    </div>
  );
};

export default BannerCarouselRight;
