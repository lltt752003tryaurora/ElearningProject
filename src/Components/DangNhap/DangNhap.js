import React from "react";
import "./dangNhap.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { quanLyNguoiDungServ } from "../../services/quanLyNguoiDungServ";
import { saveLocalStore } from "../../utils/localStore";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const DangNhap = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      console.log(values);
      quanLyNguoiDungServ
        .dangNhap(values)
        .then((result) => {
          console.log(result);
          saveLocalStore("user", result.data);
          messageApi.success("Đăng nhập thành công");
          setTimeout(() => {
            navigate("/");
          }, 1000);
          resetForm();
        })
        .catch((error) => {
          console.log(error);
          messageApi.error(error.response.data);
        });
    },
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string().required("Vui lòng nhập tài khoản"),
      matKhau: Yup.string().required("Vui lòng nhập mật khẩu"),
    }),
  });
  const { handleBlur, handleChange, handleSubmit, values, resetForm } = formik;
  return (
    <>
      {contextHolder}
      <div className="body-form">
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h1>Đăng nhập</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Tài khoản"
                name="taiKhoan"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.taiKhoan}
              />
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Mật khẩu"
                name="matKhau"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.matKhau}
              />
              <i className="fa-solid fa-lock"></i>
            </div>
            <div className="remember-forgot">
              <label htmlFor="">
                <input type="checkbox" name="" id="" />
                Remember me
              </label>
              <a href="">Quên mật khẩu?</a>
            </div>
            <button type="submit" className="btn">
              Đăng nhập
            </button>
            <div className="regrister-link">
              <p
                onClick={() => {
                  navigate("/dang-ky");
                }}
              >
                Don't have account? <a href="">Đăng ký</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DangNhap;
