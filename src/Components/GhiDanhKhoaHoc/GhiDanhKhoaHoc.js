import React, { useEffect, useState } from "react";
import { quanLyKhoaHocServ } from "../../services/quanLyKhoaHocServ";
import "./ghiDanhKhoaHoc.css";
import { useParams } from "react-router-dom";
import { Select, message } from "antd";
import KhoaHocDaGhiDanh from "../KhoaHocDaGhiDanh/KhoaHocDaGhiDanh";
import { quanLyNguoiDungServ } from "../../services/quanLyNguoiDungServ";
import KhoaHocChoXacThucNguoiDung from "../KhoaHocChoXacThucGhiDanh/KhoaHocChoXacThucNguoiDung";

const GhiDanhKhoaHoc = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [valueSelected, setValueSelected] = useState("");
  const params = useParams();
  const [data, setData] = useState([]);
  const [daXetDuyet, setDaXetDuyet] = useState([]);
  //todo : lấy danh sách khoá học
  useEffect(() => {
    quanLyNguoiDungServ
      .layDanhSachKhoaHocChuaGhiDanh(params.id)
      .then((result) => {
        // console.log(result);
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //todo : lấy khoá học đã ghi danh
  useEffect(() => {
    quanLyNguoiDungServ
      .layDanhSachKhoaHocDaXetDuyet({
        taiKhoan: params.id,
      })
      .then((result) => {
        console.log(result);
        setDaXetDuyet(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //todo : hàm xử lý lấy value của khoá học
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setValueSelected(value);
  };
  //todo : tạo lớp đối tượng lưu trữ lại tài khoản và mã khoá học
  class GhiDanh {
    taiKhoan = "";
    maKhoaHoc = "";
  }
  //todo : handle ghi danh khoá học
  const handleGhiDanhKhoaHoc = () => {
    const ghiDanh = new GhiDanh();
    ghiDanh.taiKhoan = params.id;
    ghiDanh.maKhoaHoc = valueSelected;
    // console.log(ghiDanh.taiKhoan);
    // console.log(ghiDanh.maKhoaHoc);
    quanLyKhoaHocServ
      .ghiDanhKhoaHoc(ghiDanh)
      .then((result) => {
        console.log(result);
        messageApi.success(result.data);
        quanLyNguoiDungServ
          .layDanhSachKhoaHocDaXetDuyet({
            taiKhoan: params.id,
          })
          .then((result) => {
            console.log(result);
            setDaXetDuyet(result.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
        messageApi.error(error.response);
      });
  };
  return (
    <>
      {contextHolder}
      <div className="bg-white p-10 space-y-3">
        <h1 className="text-red-500 text-2xl">Ghi danh khoá học</h1>
        <div>
          <div className="grid grid-cols-3 items-center uppercase giDanhRes">
            <h3 className="text-center font-semibold text-xl">Chọn khoá học</h3>
            <div className="w-full ">
              <Select
                style={{ width: "100%" }}
                onChange={handleChange}
                options={data?.map((item, index) => {
                  // console.log(item);
                  return {
                    label: item.tenKhoaHoc,
                    value: item.maKhoaHoc,
                  };
                })}
                placeholder="Chọn khoá học"
              />
            </div>
            <div className="text-center w-full">
              <button
                onClick={() => {
                  handleGhiDanhKhoaHoc();
                }}
                className="bg-green-500 rounded text-white font-bold w-1/2 py-2 hover:bg-green-600 duration-500 text-center"
              >
                GHI DANH KHOÁ HỌC
              </button>
            </div>
          </div>
        </div>
        <hr />
        <KhoaHocChoXacThucNguoiDung />
        <hr />
        <KhoaHocDaGhiDanh
          daXetDuyet={daXetDuyet}
          setDaXetDuyet={setDaXetDuyet}
          params={params}
        />
      </div>
    </>
  );
};

export default GhiDanhKhoaHoc;
