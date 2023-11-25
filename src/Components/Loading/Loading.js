import React from "react";
import Lottie from "react-lottie";
import loading from "./../../assets/animation/loading.json";

const Loading = () => {
  const defaultOptions = {
    //todo : lặp lại vô tận
    loop: true,
    // todo : tự động chạy
    autoplay: true,
    // todo : animation muốn chạy
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      className="fixed h-screen top-0 left-0 w-full bg-slate-100 bg-opacity-30"
      style={{ zIndex: "99999" }}
    >
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        // isStopped={this.state.isStopped}
        // isPaused={this.state.isPaused}
      />
    </div>
  );
};

export default Loading;
