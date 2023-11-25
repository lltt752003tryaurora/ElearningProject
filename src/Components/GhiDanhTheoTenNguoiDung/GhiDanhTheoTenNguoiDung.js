import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { useParams } from "react-router-dom";
import { quanLyNguoiDungServ } from "../../services/quanLyNguoiDungServ";
import { quanLyKhoaHocServ } from "../../services/quanLyKhoaHocServ";
import { message } from "antd";
import TableGhiDanhTheoKhoaHoc from "../TableGhiDanhTheoKhoaHoc/TableGhiDanhTheoKhoaHoc";
import TableHocVienDaThamGiaGhiDanhTheoKhoaHoc from "../TableHocVienDaThamGiaGhiDanhTheoKhoaHoc/TableHocVienDaThamGiaGhiDanhTheoKhoaHoc";
import "./ghiDanhTheoTenNguoiDung.css";
const GhiDanhTheoTenNguoiDung = () => {
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const [tenNguoiDung, setTenNguoiDung] = useState([]);
  const [valueSelected, setValueSelected] = useState("");
  const [selectOptions, setSelectOptions] = useState([]);
  const [data, setData] = useState([]);
  const params = useParams();
  //todo : lấy danh sách người dùng chưa ghi danh
  useEffect(() => {
    quanLyNguoiDungServ
      .layDanhXachNguoiDungChuaGhiDanh({
        maKhoaHoc: params.id,
      })
      .then((result) => {
        // console.log(result);
        setTenNguoiDung(result.data);
        setFilteredOptions(result.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);
  useEffect(() => {
    setSelectOptions(
      filteredOptions.map((item, index) => {
        return {
          label: item.hoTen,
          value: item.taiKhoan,
        };
      })
    );
  }, [filteredOptions]);
  useEffect(() => {
    quanLyNguoiDungServ
      .layDanhSachHocVienKhoaHoc({
        maKhoaHoc: params.id,
      })
      .then((result) => {
        console.log(result);
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleChange = (value) => {
    // console.log(`selected ${value}`);
    setValueSelected(value);
  };
  class GhiDanhKhoaHoc {
    maKhoaHoc = "";
    taiKhoan = "";
  }
  const handleGhiDanhKhoaHocTheoTen = () => {
    const ghiDanhKhoaHoc = new GhiDanhKhoaHoc();
    ghiDanhKhoaHoc.maKhoaHoc = params.id;
    ghiDanhKhoaHoc.taiKhoan = valueSelected;
    quanLyKhoaHocServ
      .ghiDanhKhoaHoc(ghiDanhKhoaHoc)
      .then((result) => {
        // console.log(result);
        messageApi.success(result.data);
        quanLyNguoiDungServ
          .layDanhSachHocVienKhoaHoc({
            maKhoaHoc: params.id,
          })
          .then((result) => {
            setData(result.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        // console.log(error);
        messageApi.error(error.response.data);
      });
  };
  const handleSearch = (inputValue) => {
    setFilteredOptions(
      tenNguoiDung.filter((option) =>
        option.hoTen.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  };
  return (
    <>
      {contextHolder}
      <div className="bg-white p-10 space-y-3">
        <h1 className="text-red-500 text-2xl">Ghi danh khoá học theo tên</h1>
        <div>
          <div className="grid grid-cols-3 items-center uppercase textGhiDanhTenRes">
            <h3 className="text-center font-semibold text-xl">
              Chọn tên người dùng
            </h3>
            <div className="w-full ">
              <Select
                style={{ width: "100%" }}
                placeholder="Chọn tên người dùng"
                showSearch
                filterOption={false}
                options={selectOptions}
                onSearch={handleSearch}
                onChange={handleChange}
              />
            </div>
            <div className="text-center w-full">
              <button
                onClick={() => {
                  handleGhiDanhKhoaHocTheoTen();
                }}
                className="bg-green-500 rounded text-white font-bold w-1/2 py-2 hover:bg-green-600 duration-500"
              >
                GHI DANH
              </button>
            </div>
          </div>
        </div>
        <hr />
        <TableGhiDanhTheoKhoaHoc params={params} />
        <hr />
        <TableHocVienDaThamGiaGhiDanhTheoKhoaHoc
          params={params}
          data={data}
          setData={setData}
        />
      </div>
    </>
  );
};

export default GhiDanhTheoTenNguoiDung;
