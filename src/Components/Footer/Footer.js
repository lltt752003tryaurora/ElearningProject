import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="p-[10px] bg-[#f0f8ff]">
      <div className="py-[10px] px-10">
        <div className="grid grid-cols-12 footerGrid">
          <div className="col-span-4">
            <div className="p-2">
              <a className="mr-12 textLogo ">
                <span className="textE">V</span>
                learning
                <i className="far fa-keyboard iconLogo"></i>
              </a>
              <ul className="menuFooter">
                <li>
                  <i className="fas fa-phone-alt iconFooter text-[12px]"></i>
                  <span>1800-123-4567</span>
                </li>
                <li>
                  <i className="fas fa-envelope-open-text iconFooter text-[12px]"></i>
                  <span>devit@gmail.com</span>
                </li>
                <li>
                  <i className="fas fa-map-marker-alt iconFooter text-[12px]"></i>
                  <span>Đà Nẵng</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-2">
            <div className="p-2">
              <h3 className="font-bold text-[25px]">Liên kết</h3>
              <ul className="menuFooter">
                <li>
                  <i className="fas fa-chevron-right text-[12px]"></i>
                  <span className="ml-1">Trang chủ</span>
                </li>
                <li>
                  <i className="fas fa-chevron-right text-[12px]"></i>
                  <span className="ml-1">Dịch vụ</span>
                </li>
                <li>
                  <i className="fas fa-chevron-right text-[12px]"></i>
                  <span className="ml-1">Nhóm</span>
                </li>
                <li>
                  <i className="fas fa-chevron-right text-[12px]"></i>
                  <span className="ml-1">Blog</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-2">
            <div className="p-2">
              <h3 className="font-bold text-[25px]">Khoá học</h3>
              <ul className="menuFooter">
                <li>
                  <i className="fas fa-chevron-right text-[12px]"></i>
                  <span className="ml-1">Front end</span>
                </li>
                <li>
                  <i className="fas fa-chevron-right text-[12px]"></i>
                  <span className="ml-1">Back end</span>
                </li>
                <li>
                  <i className="fas fa-chevron-right text-[12px]"></i>
                  <span className="ml-1">FullStack</span>
                </li>
                <li>
                  <i className="fas fa-chevron-right text-[12px]"></i>
                  <span className="ml-1">NodeJS</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-4">
            <div className="p-2">
              <h3 className="text-[25px] font-bold">Đăng ký tư vấn</h3>
              <form action="">
                <input
                  type="text"
                  className="formFooter"
                  placeholder="Họ và tên"
                />
                <input type="text" className="formFooter" placeholder="Email" />
                <input
                  type="text"
                  className="formFooter"
                  placeholder="Số điện thoại"
                />
              </form>
              <button className="mt-3 uppercase bg-[#f6ba35] text-white py-2 px-4">
                đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="extraFooter">
        <div className="extraFooterText">
          <p>Copyright © 2023. All rights reserved.</p>
        </div>
        <div className="p-0">
          <i className="fab fa-instagram iconFooter iconSize"></i>
          <i className="fab fa-facebook-f iconFooter iconSize"></i>
          <i className="fab fa-twitter iconFooter iconSize"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
