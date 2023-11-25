import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  layDanhSachNguoiDungApi,
  thongTinTaiKhoanApi,
} from "../../redux/slice/quanLyNguoiDungSlice";
import { quanLyNguoiDungServ } from "../../services/quanLyNguoiDungServ";
import { message } from "antd";
import "./editUser.css";
import { setLoadingStarted } from "../../redux/slice/loadingSlice";

const EditUser = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(thongTinTaiKhoanApi(params.id));
  }, []);
  const { thongTinTaiKhoan } = useSelector(
    (state) => state.quanLyNguoiDungSlice
  );
  // console.log(thongTinTaiKhoan);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: params?.id,
      matKhau: thongTinTaiKhoan?.matKhau,
      email: thongTinTaiKhoan?.email,
      soDt: thongTinTaiKhoan?.soDt,
      maNhom: "GP01",
      maLoaiNguoiDung: thongTinTaiKhoan?.maLoaiNguoiDung,
      hoTen: thongTinTaiKhoan?.hoTen,
    },
    onSubmit: (values) => {
      console.log(values);
      quanLyNguoiDungServ
        .capNhatThongTinNguoiDung(values)
        .then((result) => {
          console.log(result);
          dispatch(layDanhSachNguoiDungApi());
          messageApi.success("Cập nhật người dùng thành công");
          navigate("/admin/quan-ly-nguoi-dung");
        })
        .catch((error) => {
          console.log(error);
          messageApi.error(error.response.data);
        });
    },
  });
  const { handleSubmit, handleBlur, handleChange, values } = formik;

  return (
    <>
      {contextHolder}
      <div className="bg-white p-10 space-y-3">
        <h1 className="text-red-500 text-2xl">Chỉnh sửa người dùng</h1>
        <form
          className="grid grid-cols-2 gap-2 text-black editRes"
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
              readOnly="true"
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
              name="soDt"
              id="soDt"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.soDt}
            />
            <label
              htmlFor="soDt"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Số điện thoại
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="maLoaiNguoiDung"
              id="maLoaiNguoiDung"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.maLoaiNguoiDung}
            />
            <label
              htmlFor="maLoaiNguoiDung"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Mã loại người dùng
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

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Cập nhật
          </button>
        </form>
      </div>
    </>
  );
};

export default EditUser;
