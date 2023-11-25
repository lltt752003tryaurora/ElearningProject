import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { quanLyNguoiDungServ } from "../../services/quanLyNguoiDungServ";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachNguoiDungApi } from "../../redux/slice/quanLyNguoiDungSlice";
import { Select, message } from "antd";
import { useNavigate } from "react-router-dom";
import "./themNguoiDung.css";

const ThemNguoiDung = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [loaiNguoiDung, setLoaiNguoiDung] = useState([]);
  const dispatch = useDispatch();
  const { danhSachNguoiDung } = useSelector(
    (state) => state.quanLyNguoiDungSlice
  );
  //   console.log(danhSachNguoiDung);
  useEffect(() => {
    dispatch(layDanhSachNguoiDungApi());
  }, []);
  //todo :lấy ra danh sách loại người dùng
  useEffect(() => {
    quanLyNguoiDungServ
      .layDanhSachLoaiNguoiDung()
      .then((result) => {
        console.log(result);
        setLoaiNguoiDung(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maLoaiNguoiDung: "",
      maNhom: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
      //todo : kiểm tra trùng tài khoản
      const trungTaiKhoan = danhSachNguoiDung.some((nguoiDung) => {
        return nguoiDung.taiKhoan === values.taiKhoan;
      });
      if (trungTaiKhoan) {
        messageApi.warning("Tài khoản bị trùng vui lòng tạo tài khoản khác");
      } else {
        quanLyNguoiDungServ
          .themNguoiDung(values)
          .then((result) => {
            console.log(result);
            messageApi.success("Thêm tài khoản thành công");
            dispatch(layDanhSachNguoiDungApi());
            navigate("/admin/quan-ly-nguoi-dung");
            resetForm();
          })
          .catch((error) => {
            console.log(error);
            messageApi.error(error.response.data);
          });
      }
    },
  });
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    setFieldValue,
    resetForm,
  } = formik;
  return (
    <>
      {contextHolder}
      <div className="bg-white p-10 space-y-10">
        <h2 className="font-medium text-3xl text-red-500">Thêm người dùng</h2>
        <form
          className="grid grid-cols-2 gap-2 text-black themNguoiDungRes"
          onSubmit={handleSubmit}
        >
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="taiKhoan"
              id="taiKhoan"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.taiKhoan}
            />
            <label
              htmlFor="taiKhoan"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Tài khoản
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="matKhau"
              id="matKhau"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.matKhau}
            />
            <label
              htmlFor="matKhau"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Mật khẩu
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="soDT"
              id="soDT"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.soDT}
            />
            <label
              htmlFor="soDT"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Số điện thoại
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="hoTen"
              id="hoTen"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.hoTen}
            />
            <label
              htmlFor="hoTen"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Họ và tên
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="maNhom"
              id="maNhom"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.maNhom}
            />
            <label
              htmlFor="maNhom"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Mã nhóm
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group flex flex-col">
            <Select
              style={{ width: "100%", marginTop: "20px" }}
              options={loaiNguoiDung?.map((item, index) => {
                return {
                  label: item.tenLoaiNguoiDung,
                  value: item.maLoaiNguoiDung,
                };
              })}
              onChange={(value) => {
                setFieldValue("maLoaiNguoiDung", value);
              }}
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Loại người dùng
            </label>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Thêm người dùng
          </button>
        </form>
      </div>
    </>
  );
};

export default ThemNguoiDung;
