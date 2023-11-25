import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./taiKhoan.css";
import { quanLyNguoiDungServ } from "../../../services/quanLyNguoiDungServ";
import { saveLocalStore } from "../../../utils/localStore";

const TaiKhoan = () => {
  const [data, setData] = useState({});
  //todo : lấy thông tin tài khoản dưới local
  const localUser = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    quanLyNguoiDungServ
      .thongTinTaiKhoanLocal(localUser?.taiKhoan)
      .then((result) => {
        console.log(result);
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //   console.log(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: data?.taiKhoan,
      matKhau: data?.matKhau,
      hoTen: data?.hoTen,
      soDT: data?.soDT,
      maLoaiNguoiDung: data?.maLoaiNguoiDung,
      maNhom: "GP01",
      email: data?.email,
    },
    onSubmit: (values) => {
      console.log(values);
      quanLyNguoiDungServ
        .capNhatThongTinNguoiDung(values)
        .then((result) => {
          console.log(result);
          saveLocalStore("user", values);
          setIsModalOpen(false);
          quanLyNguoiDungServ
            .thongTinTaiKhoanLocal(values?.taiKhoan)
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
        });
    },
    validationSchema: Yup.object().shape({
      hoTen: Yup.string().required("Vui lòng không bỏ trống"),
      matKhau: Yup.string().required("Vui lòng không bỏ trống"),
      email: Yup.string().required("Vui lòng không bỏ trống"),
      soDT: Yup.string().required("Vui lòng không bỏ trống"),
    }),
  });
  const { taiKhoan, hoTen, soDT, email, maNhom, maLoaiNguoiDung } = data;
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    formik;
  return (
    <>
      <div>
        <Modal
          title="Chỉnh sửa thông tin cá nhân"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={false}
        >
          <div className="modalBackGround">
            <hr className="my-5" />
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label htmlFor="hoTen" className="text-white font-bold">
                  Họ và tên
                </label>
                <input
                  type="text"
                  name="hoTen"
                  id="hoTen"
                  className="rounded px-2 py-1 outline-none placeholder:italic "
                  placeholder="Họ và tên"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.hoTen}
                />
                {touched.hoTen && errors.hoTen && (
                  <span className="text-red-500">{errors.hoTen}</span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="matKhau" className="text-white font-bold">
                  Mật khẩu
                </label>
                <input
                  type="text"
                  name="matKhau"
                  id="matKhau"
                  className="rounded px-2 py-1 outline-none placeholder:italic "
                  placeholder="Mật khẩu"
                  onChange={handleChange}
                  value={values.matKhau}
                  onBlur={handleBlur}
                />
                {touched.matKhau && errors.matKhau && (
                  <span className="text-red-500">{errors.matKhau}</span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="matKhau" className="text-white font-bold">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="rounded px-2 py-1 outline-none placeholder:italic "
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {touched.email && errors.email && (
                  <span className="text-red-500">{errors.email}</span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="matKhau" className="text-white font-bold">
                  Số điện thoại
                </label>
                <input
                  type="text"
                  name="soDT"
                  id="soDT"
                  className="rounded px-2 py-1 outline-none placeholder:italic "
                  placeholder="Số điện thoại"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.soDT}
                />
                {touched.soDT && errors.soDT && (
                  <span className="text-red-500">{errors.soDT}</span>
                )}
              </div>
              <div className="text-right">
                <button
                  onClick={() => {
                    // handleOk();
                  }}
                  type="submit"
                  className="text-white bg-[#41b294] p-2 hover:bg-green-600 duration-500"
                >
                  Hoàn thành
                </button>
                <button
                  onClick={() => {
                    handleCancel();
                  }}
                  type="button"
                  className="text-white bg-red-500 p-2 hover:bg-red-600 duration-500 ml-5"
                >
                  Đóng
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
      <div className="grid grid-cols-12">
        <div className="infoLeft col-span-7 space-y-5">
          <p className="font-medium text-[#252525] text-lg">
            Email : <span className="text-base text-gray-500">{email}</span>
          </p>
          <p className="font-medium text-[#252525] text-lg">
            Họ và tên : <span className="text-base text-gray-500">{hoTen}</span>
          </p>
          <p className="font-medium text-[#252525] text-lg">
            Số điện thoại :{" "}
            <span className="text-base text-gray-500">{soDT}</span>
          </p>
        </div>
        <div className="infoRight col-span-5 space-y-5">
          <p className="font-medium text-[#252525] text-lg">
            Tài khoản :{" "}
            <span className="text-base text-gray-500">{taiKhoan}</span>
          </p>
          <p className="font-medium text-[#252525] text-lg">
            Nhóm : <span className="text-base text-gray-500">{maNhom}</span>
          </p>
          <p className="font-medium text-[#252525] text-lg">
            Đối tượng :{" "}
            <span className="text-base text-gray-500">{maLoaiNguoiDung}</span>
          </p>
          <button
            onClick={() => {
              showModal();
            }}
            className="py-2 px-4 bg-[#f6ba35] text-white"
          >
            Cập nhật
          </button>
        </div>
      </div>
      <h4 className="uppercase text-[#252525] text-2xl my-5 font-bold">
        Kỹ năng của tôi
      </h4>
      <div className="grid grid-cols-12 gap-5 taiKhoanSkill">
        <div className="col-span-8 animationSkill">
          <div className="flex py-[10px] items-center">
            <button className="w-[60px] h-[45px] text-white rounded-lg border-none mr-[5px] bg-[#f9ca9a]">
              HTML
            </button>
            <div className="relative w-full rounded">
              <div className="relative w-full mb-[10px] bg-gray-200 rounded">
                <div
                  style={{ width: "100%" }}
                  className="absolute top-0 h-[18px] rounded shim-html text-white text-center"
                >
                  100%
                </div>
              </div>
            </div>
          </div>
          <div className="flex py-[10px] items-center">
            <button className="w-[60px] h-[45px] text-white rounded-lg border-none mr-[5px] bg-[#f8bebb]">
              CSS
            </button>
            <div className="relative w-full rounded">
              <div className="relative w-full mb-[10px] bg-gray-500 rounded">
                <div
                  style={{ width: "80%" }}
                  className="absolute top-0 h-[18px] rounded shim-css text-white text-center"
                >
                  80%
                </div>
              </div>
            </div>
          </div>
          <div className="flex py-[10px] items-center">
            <button className="w-[60px] h-[45px] text-white rounded-lg border-none mr-[5px] bg-[#f0cc6b]">
              JS
            </button>
            <div className="relative w-full rounded">
              <div className="relative w-full mb-[10px] bg-gray-500 rounded">
                <div
                  style={{ width: "50%" }}
                  className="absolute top-0 h-[18px] rounded shim-js text-white text-center"
                >
                  50%
                </div>
              </div>
            </div>
          </div>
          <div className="flex py-[10px] items-center">
            <button className="w-[60px] h-[45px] text-white rounded-lg border-none mr-[5px] bg-[#113d3c]">
              REACT
            </button>
            <div className="relative w-full rounded">
              <div className="relative w-full mb-[10px] bg-gray-500 rounded">
                <div
                  style={{ width: "80%" }}
                  className="absolute top-0 h-[18px] rounded shim-react text-white text-center"
                >
                  80%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 animationInfo">
          <div className="grid grid-cols-2 gap-4">
            <div className="itemStudy">
              <i className="fas fa-user-clock mr-2"></i>
              <div>
                <h6>Giờ học</h6>
                <p>80</p>
              </div>
            </div>
            <div className="itemStudy">
              <i className="fas fa-layer-group mr-2"></i>
              <div>
                <h6>Điểm tổng</h6>
                <p>80</p>
              </div>
            </div>
            <div className="itemStudy">
              <i className="fas fa-swatchbook mr-2"></i>
              <div>
                <h6>Buổi học</h6>
                <p>40</p>
              </div>
            </div>
            <div className="itemStudy">
              <i className="fas fa-signal mr-2"></i>
              <div>
                <h6>Cấp độ</h6>
                <p>Trung cấp</p>
              </div>
            </div>
            <div className="itemStudy">
              <i className="fas fa-graduation-cap mr-2"></i>
              <div>
                <h6>Học lực</h6>
                <p>Khá</p>
              </div>
            </div>
            <div className="itemStudy">
              <i className="fas fa-book mr-2"></i>
              <div>
                <h6>Bài tập</h6>
                <p>100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaiKhoan;
