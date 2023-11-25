import React from "react";
import { Carousel } from "antd";
import "./giangVien.scss";

const GiangVien = () => {
  return (
    <div className="container mx-auto py-20">
      <h2 className="text-center font-bold text-3xl mb-10 text-orange-500">
        Danh sách giảng viên
      </h2>
      <Carousel
        slidesToShow={5}
        slidesToScroll={1}
        // autoplay={true}
        // speed={2000}
        // autoplaySpeed={2000}
        // cssEase={"linear"}
        dots={true}
        responsive={[
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
        ]}
      >
        <div className="flex flex-col">
          <div className="instrutorContent">
            <img
              className="h-[80px] w-[80px] object-cover rounded-[50%]"
              src="https://demo2.cybersoft.edu.vn/static/media/instrutor6.64041dca.jpg"
              alt="https://demo2.cybersoft.edu.vn/static/media/instrutor6.64041dca.jpg"
            />
            <h6 className="pb-[5px]">IcarDi MenBor</h6>
            <div className="py-1">
              <p>Chuyên gia ngôn ngữ</p>
              <span>Vue Js</span>
            </div>
            <p>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <span className="text-yellow-500">4.9</span>
            </p>
            <p className="text-[13px] text-gray-300"></p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="instrutorContent">
            <img
              className="h-[80px] w-[80px] object-cover rounded-[50%]"
              src="https://demo2.cybersoft.edu.vn/static/media/instrutor7.edd00a03.jpg"
              alt="https://demo2.cybersoft.edu.vn/static/media/instrutor7.edd00a03.jpg"
            />
            <h6 className="pb-[5px]">Bladin Slaham</h6>
            <div className="py-1">
              <p>
                Chuyên gia hệ thống
                <p>máy tính</p>
              </p>
            </div>
            <p>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <span className="text-yellow-500">4.9</span>
            </p>
            <p className="text-[13px] text-gray-300"></p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="instrutorContent">
            <img
              className="h-[80px] w-[80px] object-cover rounded-[50%]"
              src="https://demo2.cybersoft.edu.vn/static/media/instrutor8.aec2f526.jpg"
              alt="https://demo2.cybersoft.edu.vn/static/media/instrutor8.aec2f526.jpg"
            />
            <h6 className="pb-[5px]">Chris Andersan</h6>
            <div className="py-1">
              <p>Chuyên gia lĩnh vực </p>
              <span>Full Skill</span>
            </div>
            <p>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <span className="text-yellow-500">4.9</span>
            </p>
            <p className="text-[13px] text-gray-300"></p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="instrutorContent">
            <img
              className="h-[80px] w-[80px] object-cover rounded-[50%]"
              src="https://demo2.cybersoft.edu.vn/static/media/instrutor9.504ea6c5.jpg"
              alt="https://demo2.cybersoft.edu.vn/static/media/instrutor9.504ea6c5.jpg"
            />
            <h6 className="pb-[5px]">VueLo Gadi</h6>
            <div className="py-1">
              <p>Chuyên gia lĩnh vực</p>
              <p>phân tích</p>
            </div>
            <p>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <span className="text-yellow-500">4.9</span>
            </p>
            <p className="text-[13px] text-gray-300"></p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="instrutorContent">
            <img
              className="h-[80px] w-[80px] object-cover rounded-[50%]"
              src="https://demo2.cybersoft.edu.vn/static/media/instrutor10.89946c43.jpg"
              alt="https://demo2.cybersoft.edu.vn/static/media/instrutor10.89946c43.jpg"
            />
            <h6 className="pb-[5px]">VueLo Gadi</h6>
            <div className="py-1">
              <p>Chuyên gia lĩnh vực</p>
              <p>PHP</p>
            </div>
            <p>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <span className="text-yellow-500">4.9</span>
            </p>
            <p className="text-[13px] text-gray-300"></p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="instrutorContent">
            <img
              className="h-[80px] w-[80px] object-cover rounded-[50%]"
              src="https://demo2.cybersoft.edu.vn/static/media/instrutor11.0387fe65.jpg"
              alt="https://demo2.cybersoft.edu.vn/static/media/instrutor11.0387fe65.jpg"
            />
            <h6 className="pb-[5px]">VueLo Gadi</h6>
            <div className="py-1">
              <p>Chuyên gia lĩnh vực</p>
              <p>FRONT END</p>
            </div>
            <p>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <span className="text-yellow-500">4.9</span>
            </p>
            <p className="text-[13px] text-gray-300"></p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="instrutorContent">
            <img
              className="h-[80px] w-[80px] object-cover rounded-[50%]"
              src="https://demo2.cybersoft.edu.vn/static/media/instrutor5.2e4bd1e6.jpg"
              alt="https://demo2.cybersoft.edu.vn/static/media/instrutor5.2e4bd1e6.jpg"
            />
            <h6 className="pb-[5px]">Big DadMoon</h6>
            <div className="py-1">
              <p>Chuyên gia lĩnh vực</p>
              <p>lập trình</p>
            </div>
            <p>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <span className="text-yellow-500">4.9</span>
            </p>
            <p className="text-[13px] text-gray-300"></p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default GiangVien;
