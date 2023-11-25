import React from "react";
import PaginationPage from "../PaginationPage/PaginationPage";
import "./khoaHocTongHop.css";

const KhoaHocTongHop = () => {
  return (
    <>
      <div className="p-[50px] uppercase bg-[#ffd60a] text-white">
        <h3 className="text-3xl font-bold">Khoá học</h3>
        <p className="text-[13px]">Bắt đầu hành trình nào !!!</p>
      </div>
      <div className="p-[50px]">
        <div className="grid grid-cols-6 khoaHocResponsive">
          <div className="bg-[#264653] flex flex-col items-center justify-center text-white uppercase h-full py-[30px] px-[20px] text-center">
            <h6>chương trình học</h6>
            <i className="fas fa-laptop text-3xl pb-[10px]"></i>
            <p className="text-xl">300</p>
          </div>
          <div className="bg-[#2a9d8f] flex flex-col items-center justify-center text-white uppercase h-full py-[30px] px-[20px] text-center">
            <h6>nhà sáng tạo</h6>
            <i className="fas fa-camera text-3xl pb-[10px]"></i>
            <p className="text-xl">10000</p>
          </div>
          <div className="bg-[#e9c46a] flex flex-col items-center justify-center text-white uppercase h-full py-[30px] px-[20px] text-center">
            <h6>nhà thiết kế</h6>
            <i className="fas fa-briefcase text-3xl pb-[10px]"></i>
            <p className="text-xl">400</p>
          </div>
          <div className="bg-[#f4a261] flex flex-col items-center justify-center text-white uppercase h-full py-[30px] px-[20px] text-center">
            <h6>Bài giảng</h6>
            <i className="fas fa-book text-3xl pb-[10px]"></i>
            <p className="text-xl">3000</p>
          </div>
          <div className="bg-[#ee8959] flex flex-col items-center justify-center text-white uppercase h-full py-[30px] px-[20px] text-center">
            <h6>video</h6>
            <i className="fas fa-play-circle text-3xl pb-[10px]"></i>
            <p className="text-xl">40000</p>
          </div>
          <div className="bg-[#e76f51] flex flex-col items-center justify-center text-white uppercase h-full py-[30px] px-[20px] text-center">
            <h6>lĩnh vực</h6>
            <i className="fas fa-dice-d20 text-3xl pb-[10px]"></i>
            <p className="text-xl">200</p>
          </div>
        </div>
      </div>
      <PaginationPage />
    </>
  );
};

export default KhoaHocTongHop;
