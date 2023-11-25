import React from "react";
import "./sukien.css";

const SuKien = () => {
  return (
    <>
      <div className="bannerEvent">
        <div className="timeEvent">
          <div className="flex">
            <div className="events">
              <p className="text-center leading-[30px] text-6xl font-semibold text-[#ffbe0b]">
                00
              </p>
              <p className="text-center text-white font-normal mt-5">
                <small className="text-xl">Ngày</small>
              </p>
            </div>
            <div className="events">
              <p className="text-center leading-[30px] text-6xl font-semibold text-[#fb5607]">
                00
              </p>
              <p className="text-center text-white font-normal mt-5">
                <small className="text-xl">Giờ</small>
              </p>
            </div>
            <div className="events">
              <p className="text-center leading-[30px] text-6xl font-semibold text-[#ff006e]">
                00
              </p>
              <p className="text-center text-white font-normal mt-5">
                <small className="text-xl">Phút</small>
              </p>
            </div>
            <div className="events">
              <p className="text-center leading-[30px] text-6xl font-semibold text-[#8338ec]">
                00
              </p>
              <p className="text-center text-white font-normal mt-5">
                <small className="text-xl">Giây</small>
              </p>
            </div>
          </div>
          <h4 className="text-white text-[40px] py-[10px] font-semibold">
            Sự kiện công nghệ lớn nhất 2023
          </h4>
          <h6 className="text-white py-[10px] text-lg font-semibold w-1/2">
            20 - 25 tháng 10, 2023, Việt Nam
          </h6>
        </div>
      </div>
      <div className="bg-[#F0EDE5]">
        <div className="container mx-auto py-20">
          <div className="grid grid-cols-2 suKienResponsive">
            <div className="relative ">
              <div class="animationEvent">
                <div class="moon">
                  <div class="crater crater1"></div>
                  <div class="crater crater2"></div>
                  <div class="crater crater3"></div>
                  <div class="crater crater4"></div>
                  <div class="crater crater5"></div>
                  <div class="shadow"></div>
                  <div class="eye eye-l"></div>
                  <div class="eye eye-r"></div>
                  <div class="mouth"></div>
                  <div class="blush blush1"></div>
                  <div class="blush blush2"></div>
                </div>
                <div class="orbit">
                  <div class="rocket">
                    <div class="window"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <h5 className="uppercase pb-[10px] text-[#9f1f56] text-3xl font-semibold">
                Sự kiện công nghệ dành cho startup
              </h5>
              <h6 className="font-medium text-[#252525]">
                Nơi gặp gỡ của những tư tưởng lớn
              </h6>
              <p className="py-5 text-[#8c8c8c]">
                Innovatube Frontier Summit (IFS) là sự kiện đầu tiên tại Việt
                Nam tập trung vào cả bốn mảng tiêu biểu của công nghệ tiên
                phong, bao gồm Artificial Intelligence (trí tuệ nhân tạo),
                Internet of Things (Internet vạn vật), Blockchain (Chuỗi khối)
                và Augmented reality/Virtual Reality (Thực tế tăng cường/Thực tế
                ảo)
              </p>
              <div className="flex space-x-6 btnAll items-center">
                <button class="btnSpace" type="button">
                  <strong>Tham gia</strong>
                  <div id="container-stars">
                    <div id="stars"></div>
                  </div>
                  <div id="glow">
                    <div class="circle"></div>
                    <div class="circle"></div>
                  </div>
                </button>
                <button className="btnRocket">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                    ></path>
                  </svg>
                  <span>Tìm hiểu thêm</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="artist">
        <h6 className="text-center p-5 text-3xl font-semibold text-[#f6ba35]">
          Các nhà đồng sáng tạo
        </h6>
        <div className="grid grid-cols-4 justify-center items-center z-10 relative gap-4 artistGrid">
          <div className="flex flex-col min-w-[280px] uppercase text-white mb-[15px]">
            <img
              src="https://demo2.cybersoft.edu.vn/static/media/instrutor5.2e4bd1e6.jpg"
              alt="https://demo2.cybersoft.edu.vn/static/media/instrutor5.2e4bd1e6.jpg"
            />
            <h6 className="py-[5px] font-semibold text-[15px]">Nguyễn Nhật</h6>
            <p>Ceo TechViet Production</p>
          </div>
          <div className="flex flex-col min-w-[280px] uppercase text-white mb-[15px]">
            <img
              src="https://demo2.cybersoft.edu.vn/static/media/instrutor6.64041dca.jpg"
              alt="https://demo2.cybersoft.edu.vn/static/media/instrutor6.64041dca.jpg"
            />
            <h6 className="py-[5px] font-semibold text-[15px]">
              NGUYỄN NHẬT NAM
            </h6>
            <p>CEO TECHVIET PRODUCTION</p>
          </div>
          <div className="flex flex-col min-w-[280px] uppercase text-white mb-[15px]">
            <img
              src="https://demo2.cybersoft.edu.vn/static/media/instrutor7.edd00a03.jpg"
              alt="https://demo2.cybersoft.edu.vn/static/media/instrutor7.edd00a03.jpg"
            />
            <h6 className="py-[5px] font-semibold text-[15px]">NGUYỄN NAM</h6>
            <p>CEO TECHVIET PRODUCTION</p>
          </div>
          <div className="flex flex-col min-w-[280px] uppercase text-white mb-[15px]">
            <img
              src="https://demo2.cybersoft.edu.vn/static/media/instrutor8.aec2f526.jpg"
              alt="https://demo2.cybersoft.edu.vn/static/media/instrutor8.aec2f526.jpg"
            />
            <h6 className="py-[5px] font-semibold text-[15px]">Jonny ĐẶNG</h6>
            <p>CEO TECHVIET PRODUCTION</p>
          </div>
          <div className="flex flex-col min-w-[280px] uppercase text-white mb-[15px]">
            <img
              src="https://demo2.cybersoft.edu.vn/static/media/instrutor9.504ea6c5.jpg"
              alt="https://demo2.cybersoft.edu.vn/static/media/instrutor9.504ea6c5.jpg"
            />
            <h6 className="py-[5px] font-semibold text-[15px]">NGÔ HENRY</h6>
            <p>CEO TECHVIET PRODUCTION</p>
          </div>
          <div className="flex flex-col min-w-[280px] uppercase text-white mb-[15px]">
            <img
              src="https://demo2.cybersoft.edu.vn/static/media/instrutor10.89946c43.jpg"
              alt="https://demo2.cybersoft.edu.vn/static/media/instrutor10.89946c43.jpg"
            />
            <h6 className="py-[5px] font-semibold text-[15px]">
              VƯƠNG PHẠM VN
            </h6>
            <p>CEO TECHVIET PRODUCTION</p>
          </div>
          <div className="flex flex-col min-w-[280px] uppercase text-white mb-[15px]">
            <img
              src="https://demo2.cybersoft.edu.vn/static/media/instrutor11.0387fe65.jpg"
              alt="https://demo2.cybersoft.edu.vn/static/media/instrutor11.0387fe65.jpg"
            />
            <h6 className="py-[5px] font-semibold text-[15px]">ROBER IMACU</h6>
            <p>CEO TECHVIET PRODUCTION</p>
          </div>
          <div className="flex flex-col min-w-[280px] uppercase text-white mb-[15px]">
            <img
              src="https://demo2.cybersoft.edu.vn/static/media/instrutor12.90a80820.jpg"
              alt="https://demo2.cybersoft.edu.vn/static/media/instrutor12.90a80820.jpg"
            />
            <h6 className="py-[5px] font-semibold text-[15px]">khoa pug</h6>
            <p>CEO TECHVIET PRODUCTION</p>
          </div>
        </div>
      </div>
      <div className="brand container mx-auto py-10">
        <h3 className="text-center text-3xl text-[#f6ba35] font-semibold uppercase">
          Nhà tài trợ chương trình
        </h3>
        <div className="grid grid-cols-4 gap-4 brandResponsive">
          <div className="itemBrand text-center uppercase mt-4">
            <img
              className="h-56 object-cover w-full min-h-[224px] rounded"
              src="https://demo2.cybersoft.edu.vn/static/media/meta.10fa2fa1.jpg"
              alt="https://demo2.cybersoft.edu.vn/static/media/meta.10fa2fa1.jpg"
            />
            <p className="font-bold mt-2">Facebook</p>
          </div>
          <div className="itemBrand text-center uppercase mt-4 ">
            <img
              className="h-56 object-cover w-full min-h-[224px] rounded"
              src="https://demo2.cybersoft.edu.vn/static/media/microsoft.318b3280.jpg"
              alt="https://demo2.cybersoft.edu.vn/static/media/microsoft.318b3280.jpg"
            />
            <p className="font-bold mt-2">MICROSOFT</p>
          </div>
          <div className="itemBrand text-center uppercase mt-4">
            <img
              className="h-56 object-cover w-full min-h-[224px] rounded"
              src="https://demo2.cybersoft.edu.vn/static/media/Google-logo.f11902b5.jpg"
              alt="https://demo2.cybersoft.edu.vn/static/media/Google-logo.f11902b5.jpg"
            />
            <p className="font-bold mt-2">google</p>
          </div>
          <div className="itemBrand text-center uppercase mt-4">
            <img
              className="h-56 object-cover w-full min-h-[224px] rounded"
              src="https://demo2.cybersoft.edu.vn/static/media/amazon.996890c4.jpg"
              alt="https://demo2.cybersoft.edu.vn/static/media/amazon.996890c4.jpg"
            />
            <p className="font-bold mt-2">amazone</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuKien;
