import React from "react";
import "./dangky.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { quanLyNguoiDungServ } from "../../services/quanLyNguoiDungServ";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const DangKy = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maNhom: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
      quanLyNguoiDungServ
        .dangKy(values)
        .then((result) => {
          console.log(result);
          messageApi.success("Đăng ký tài khoản thành công");
          navigate("/");
          handleReset();
        })
        .catch((error) => {
          console.log(error);
          messageApi.error("Đăng ký tài khoản thất bại");
        });
    },
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string().required("Vui lòng không bỏ trống"),
      matKhau: Yup.string().required("Vui lòng không bỏ trống"),
      hoTen: Yup.string().required("Vui lòng không bỏ trống"),
      soDT: Yup.string().required("Vui lòng không bỏ trống"),
      maNhom: Yup.string().required("Vui lòng không bỏ trống"),
      email: Yup.string().required("Vui lòng không bỏ trống"),
    }),
  });
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    handleReset,
  } = formik;
  return (
    <>
      {contextHolder}
      <div>
        <div
          className="min-h-screen py-40"
          style={{
            backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)",
          }}
        >
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
              <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-regrister">
                <h1 className="text-white text-3xl mb-3">Welcome</h1>
                <div>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean suspendisse aliquam varius rutrum purus maecenas a
                    <span className="text-purple-500 font-semibold ml-1">
                      Learn more
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 py-16 px-12">
                <h2 className="text-3xl mb-4">Đăng ký</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mt-5">
                    <input
                      type="text"
                      placeholder="Tài khoản"
                      className="border border-gray-400 py-1 px-2 w-full"
                      name="taiKhoan"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.taiKhoan}
                    />
                    {touched.taiKhoan && errors.taiKhoan && (
                      <span className="text-red-500">{errors.taiKhoan}</span>
                    )}
                  </div>
                  <div className="mt-5">
                    <input
                      type="text"
                      placeholder="Mật khẩu"
                      className="border border-gray-400 py-1 px-2 w-full"
                      name="matKhau"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.matKhau}
                    />
                    {touched.matKhau && errors.matKhau && (
                      <span className="text-red-500">{errors.matKhau}</span>
                    )}
                  </div>
                  <div className="mt-5">
                    <input
                      type="text"
                      placeholder="Email"
                      className="border border-gray-400 py-1 px-2 w-full"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {touched.email && errors.email && (
                      <span className="text-red-500">{errors.email}</span>
                    )}
                  </div>
                  <div className="mt-5">
                    <input
                      type="text"
                      placeholder="Họ và tên"
                      className="border border-gray-400 py-1 px-2 w-full"
                      name="hoTen"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.hoTen}
                    />
                    {touched.hoTen && errors.hoTen && (
                      <span className="text-red-500">{errors.hoTen}</span>
                    )}
                  </div>
                  <div className="mt-5">
                    <input
                      type="text"
                      placeholder="Số điện thoại"
                      className="border border-gray-400 py-1 px-2 w-full"
                      name="soDT"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.soDT}
                    />
                    {touched.soDT && errors.soDT && (
                      <span className="text-red-500">{errors.soDT}</span>
                    )}
                  </div>
                  <div className="mt-5">
                    <input
                      type="text"
                      placeholder="Mã nhóm"
                      className="border border-gray-400 py-1 px-2 w-full"
                      name="maNhom"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.maNhom}
                    />
                    {touched.maNhom && errors.maNhom && (
                      <span className="text-red-500">{errors.maNhom}</span>
                    )}
                  </div>
                  <div className="mt-5">
                    <div className="btn-conteiner">
                      <button className="btn-content" href="#" type="submit">
                        <span className="btn-title">Đăng ký</span>
                        <span className="icon-arrow">
                          <svg
                            width="66px"
                            height="43px"
                            viewBox="0 0 66 43"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <g
                              id="arrow"
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <path
                                id="arrow-icon-one"
                                d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                                fill="#FFFFFF"
                              />
                              <path
                                id="arrow-icon-two"
                                d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                                fill="#FFFFFF"
                              />
                              <path
                                id="arrow-icon-three"
                                d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                                fill="#FFFFFF"
                              />
                            </g>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DangKy;
