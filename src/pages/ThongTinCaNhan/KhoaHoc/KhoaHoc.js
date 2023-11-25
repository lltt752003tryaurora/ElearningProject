import React, { useEffect, useState } from "react";
import { quanLyNguoiDungServ } from "../../../services/quanLyNguoiDungServ";
import Search from "antd/es/input/Search";
import { quanLyKhoaHocServ } from "../../../services/quanLyKhoaHocServ";
import { message } from "antd";
const KhoaHoc = () => {
  const [messageApi, contextHolder] = message.useMessage();
  //todo : tạo state lưu trữ các khoá học đã ghi danh
  const [data, setData] = useState([]);
  const localUser = JSON.parse(localStorage.getItem("user"));
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    quanLyNguoiDungServ
      .thongTinTaiKhoanLocal(localUser?.taiKhoan)
      .then((result) => {
        setData(result.data?.chiTietKhoaHocGhiDanh);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setData]);
  const onSearch = (value) => {
    const filteredCourses = data.filter((course) =>
      course.tenKhoaHoc.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filteredCourses);
  };
  //todo : huỷ ghi danh
  class HuyGhiDanh {
    maKhoaHoc = "";
    taiKhoan = "";
  }
  //todo : render ra các khoá học đã ghi danh
  const renderData = () => {
    const courses = filteredData.length > 0 ? filteredData : data;
    return courses?.map((item, index) => {
      const { hinhAnh, tenKhoaHoc } = item;
      return (
        <>
          <div className="col-span-3 imgKhoaHocRes">
            <img
              className="object-cover w-full h-[200px] min-h-[200px]"
              src={hinhAnh}
              alt={hinhAnh}
            />
          </div>
          <div className="col-span-7 infoKhoaHocRes">
            <h6 className="text-xl font-medium">{tenKhoaHoc}</h6>
            <p className="text-[#8c8c8c] mb-[5px]">
              ES6 là một chuẩn Javascript mới được đưa ra vào năm 2015 với nhiều
              quy tắc và cách sử dụng khác nhau...
            </p>
            <div className="mb-[5px] text-base">
              <span className="pr-[15px]">
                <i className="far fa-clock iconOclock text-[#f5c002] pr-1"></i>8
                giờ
              </span>
              <span className="pr-[15px]">
                <i className="far fa-calendar iconCalendar text-[#f06f68] pr-1"></i>
                23 giờ
              </span>
              <span className="pr-[15px]">
                <i className="fas fa-signal iconLevel  text-[#65c9ff] pr-1"></i>
                All level
              </span>
            </div>
            <div className="mb-[5px] text-[#f6ba35]">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-[50%] object-cover"
                src="https://demo2.cybersoft.edu.vn/static/media/instrutor10.89946c43.jpg"
                alt="https://demo2.cybersoft.edu.vn/static/media/instrutor10.89946c43.jpg"
              />
              <span className="ml-2 text-[#252525] font-normal">
                Nguyễn Nam
              </span>
            </div>
          </div>
          <div className="col-span-2 flex  items-end justify-center btnKhoaHocRes">
            <button
              onClick={() => {
                const huyGhiDanh = new HuyGhiDanh();
                huyGhiDanh.taiKhoan = localUser?.taiKhoan;
                huyGhiDanh.maKhoaHoc = item?.maKhoaHoc;
                quanLyKhoaHocServ
                  .huyGhiDanh(huyGhiDanh)
                  .then((result) => {
                    console.log(result);
                    messageApi.success(result.data);
                  })
                  .catch((error) => {
                    console.log(error);
                    messageApi.error("Huỷ không thành công");
                  });
              }}
              className="uppercase px-[5px] py-[10px] text-white bg-yellow-500 hover:bg-yellow-600 duration-500"
            >
              Huỷ khoá học
            </button>
          </div>
        </>
      );
    });
  };
  return (
    <>
      {contextHolder}
      <div className="space-y-5">
        <div className="flex justify-between">
          <h2 className="text-[17px] uppercase font-normal">
            Khoá học của tôi
          </h2>
          <Search
            placeholder="Nhập tên khoá học"
            onSearch={onSearch}
            style={{
              width: 200,
              outline: "none",
            }}
            onChange={(e) => {
              if (e.target.value === "") {
                setFilteredData([]);
              }
            }}
          />
        </div>
        <div className="grid grid-cols-12 gap-5">{renderData()}</div>
      </div>
    </>
  );
};

export default KhoaHoc;
