import React from "react";
import { quanLyKhoaHocServ } from "../../services/quanLyKhoaHocServ";
import { message } from "antd";
import { quanLyNguoiDungServ } from "../../services/quanLyNguoiDungServ";

const KhoaHocDaGhiDanh = ({ daXetDuyet, setDaXetDuyet, params }) => {
  const [messageApi, contextHolder] = message.useMessage();
  //todo : huỷ ghi danh
  class HuyGhiDanh {
    taiKhoan = "";
    maKhoaHoc = "";
  }
  //todo : render khoá học đã ghi danh từ api lấy danh sách khoá học đã xét duyệt
  const renderDaGhiDanh = () => {
    return daXetDuyet?.map((item, index) => {
      return (
        <tr key={index}>
          <td class="px-3 text-2xl font-medium text-gray-600">{index + 1}</td>
          <td class="px-3 py-2">
            <p>{item.tenKhoaHoc}</p>
          </td>
          <td class="px-3 py-2">
            <button
              onClick={() => {
                const huyGhiDanh = new HuyGhiDanh();
                huyGhiDanh.taiKhoan = params.id;
                huyGhiDanh.maKhoaHoc = item.maKhoaHoc;
                quanLyKhoaHocServ
                  .huyGhiDanh(huyGhiDanh)
                  .then((result) => {
                    console.log(result);
                    messageApi.success(result.data);
                    quanLyNguoiDungServ
                      .layDanhSachKhoaHocDaXetDuyet({ taiKhoan: params.id })
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
      <div>
        <h2 className="font-semibold text-red-500 text-xl">
          Khoá học đã ghi danh
        </h2>
        <div class="container p-2 mx-auto sm:p-4 text-gray-800">
          <div class="overflow-x-auto">
            <table class="w-full p-6 text-xs text-left whitespace-nowrap">
              <thead>
                <tr class="bg-gray-300">
                  <th class="p-3">STT</th>
                  <th class="p-3">Tên khoá học</th>
                  <th class="p-3">Chờ Xác nhận</th>
                </tr>
              </thead>
              <tbody class="border-b bg-gray-50 border-gray-300">
                {renderDaGhiDanh()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default KhoaHocDaGhiDanh;
