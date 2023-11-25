import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { quanLyNguoiDungServ } from "../../services/quanLyNguoiDungServ";
import { quanLyKhoaHocServ } from "../../services/quanLyKhoaHocServ";
import { message } from "antd";
import "./tableGhiDanhTheoKhoaHoc.css";
const TableGhiDanhTheoKhoaHoc = ({ params }) => {
  const [messageApi, contextHolder] = message.useMessage();
  //todo : data danh sách người dùng chờ xét duyệt
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    quanLyNguoiDungServ
      .layDanhSachHocVienChoXetDuyet({
        maKhoaHoc: params.id,
      })
      .then((result) => {
        // console.log(result.data);
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //todo : handle xác thực ghi danh khoá học
  class GhiDanh {
    maKhoaHoc = "";
    taiKhoan = "";
  }
  //todo : hàm render ra table học viên chờ xác thực
  const renderTableHocVienChoXacThuc = () => {
    const filteredData = data.filter((item) =>
      item.hoTen.toLowerCase().includes(searchValue.toLowerCase())
    );
    return filteredData?.map((item, index) => {
      return (
        <tr key={index}>
          <td class="px-3 text-2xl font-medium text-gray-600">{index + 1}</td>
          <td class="px-3 py-2">
            <p>{item.taiKhoan}</p>
          </td>
          <td class="px-3 py-2">
            <p>{item.hoTen}</p>
          </td>
          <td class="px-3 py-2 space-x-2">
            <button
              onClick={() => {
                const ghiDanh = new GhiDanh();
                ghiDanh.maKhoaHoc = params.id;
                ghiDanh.taiKhoan = item.taiKhoan;
                quanLyKhoaHocServ
                  .ghiDanhKhoaHoc(ghiDanh)
                  .then((result) => {
                    console.log(result);
                    messageApi.success(result.data);
                    quanLyNguoiDungServ
                      .layDanhSachHocVienChoXetDuyet({
                        maKhoaHoc: params.id,
                      })
                      .then((result) => {
                        console.log(result);
                        setData(result.data);
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  })
                  .catch((error) => {
                    console.log(error);
                    messageApi.error(error.response.data);
                  });
              }}
              className="bg-green-500 text-white rounded px-4 py-2 cursor-pointer hover:bg-green-600 duration-500"
            >
              Xác thực
            </button>
            <button
              onClick={() => {
                const ghiDanh = new GhiDanh();
                ghiDanh.maKhoaHoc = params.id;
                ghiDanh.taiKhoan = item.taiKhoan;
                quanLyKhoaHocServ
                  .huyGhiDanh(ghiDanh)
                  .then((result) => {
                    console.log(result);
                    messageApi.success(result.data);
                    quanLyNguoiDungServ
                      .layDanhSachHocVienChoXetDuyet({
                        maKhoaHoc: params.id,
                      })
                      .then((result) => {
                        console.log(result);
                        setData(result.data);
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  })
                  .catch((error) => {
                    console.log(error);
                    messageApi.error(error.response.data);
                  });
              }}
              className="bg-red-500 text-white rounded px-4 py-2 cursor-pointer hover:bg-red-600 duration-500"
            >
              Huỷ
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      {contextHolder}
      <div className="flex justify-evenly tableGhiDanhKhoaHocRes">
        <h1 className="text-xl font-bold">Học viên chờ xác thực</h1>
        <div className="w-1/3 inputGhiDanhRes">
          <Input
            placeholder="Nhập tên học viên"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
      <div class="container p-2 mx-auto sm:p-4 text-gray-800">
        <div class="overflow-x-auto">
          <table class="w-full p-6 text-xs text-left whitespace-nowrap">
            <thead>
              <tr class="bg-gray-300">
                <th class="p-3">STT</th>
                <th class="p-3">Tài khoản</th>
                <th className="p-3">Họ tên</th>
                <th class="p-3">Chờ Xác nhận</th>
              </tr>
            </thead>
            <tbody class="border-b bg-gray-50 border-gray-300">
              {renderTableHocVienChoXacThuc()}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TableGhiDanhTheoKhoaHoc;
