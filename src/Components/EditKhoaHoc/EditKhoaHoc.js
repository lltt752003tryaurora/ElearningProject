import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { layThongTinKhoaHocApi } from "../../redux/slice/quanLyKhoaHocSlice";
import { quanLyKhoaHocServ } from "../../services/quanLyKhoaHocServ";
import { message } from "antd";
import "./editKhoaHoc.css";

const EditKhoaHoc = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layThongTinKhoaHocApi(params.id));
  }, []);
  const { detailKhoaHoc } = useSelector((state) => state.quanLyKhoaHocSlice);
  const { danhMucKhoaHoc, nguoiTao } = detailKhoaHoc;

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maKhoaHoc: params.id,
      biDanh: detailKhoaHoc?.biDanh,
      tenKhoaHoc: detailKhoaHoc?.tenKhoaHoc,
      moTa: detailKhoaHoc?.moTa,
      luotXem: detailKhoaHoc?.luotXem,
      danhGia: "0",
      hinhAnh: null,
      maNhom: detailKhoaHoc?.maNhom,
      ngayTao: detailKhoaHoc?.ngayTao,
      maDanhMucKhoaHoc: danhMucKhoaHoc?.maDanhMucKhoahoc,
      taiKhoanNguoiTao: nguoiTao?.taiKhoan,
    },
    onSubmit: (values) => {
      // console.log(values);
      const data = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          data.append(key, values[key]);
        } else if (key !== null) {
          data.append("File", values.hinhAnh);
        } else {
          data.append("File", values[key]);
        }
      }
      quanLyKhoaHocServ
        .capNhatKhoaHocUpload(data)
        .then((result) => {
          console.log(result);
          navigate(`/admin/quan-ly-khoa-hoc`);
          messageApi.success("Cập nhật khoá học thành công");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });
  const { handleSubmit, handleChange, handleBlur, values, setFieldValue } =
    formik;
  return (
    <>
      {contextHolder}
      <div className="bg-white p-10 space-y-3">
        <h1 className="text-red-500 text-2xl">Chỉnh sửa khoá học</h1>
        <form
          className="grid grid-cols-2 gap-2 text-black editKhoaHocRes"
          onSubmit={handleSubmit}
        >
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="maKhoaHoc"
              id="maKhoaHoc"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.maKhoaHoc}
              readOnly="true"
            />
            <label
              htmlFor="maKhoaHoc"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Mã khoá học
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="biDanh"
              id="biDanh"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.biDanh}
            />
            <label
              htmlFor="biDanh"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Bí danh
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="tenKhoaHoc"
              id="tenKhoaHoc"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.tenKhoaHoc}
            />
            <label
              htmlFor="tenKhoaHoc"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Tên khoá học
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="moTa"
              id="moTa"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.moTa}
            />
            <label
              htmlFor="moTa"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Mô tả
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="luotXem"
              id="luotXem"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.luotXem}
            />
            <label
              htmlFor="luotXem"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Lượt xem
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="danhGia"
              id="danhGia"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.danhGia}
            />
            <label
              htmlFor="danhGia"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Đánh giá
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="file"
              name="hinhAnh"
              id="hinhAnh"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onBlur={handleBlur}
              onChange={(event) => {
                setFieldValue("hinhAnh", event.target.files[0]);
              }}
            />
            <label
              htmlFor="hinhAnh"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Hình ảnh
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
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="ngayTao"
              id="ngayTao"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.ngayTao}
            />
            <label
              htmlFor="ngayTao"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Ngày tạo
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="maDanhMucKhoaHoc"
              id="maDanhMucKhoaHoc"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.maDanhMucKhoaHoc}
            />
            <label
              htmlFor="maDanhMucKhoaHoc"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Mã danh mục khoá học
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="taiKhoanNguoiTao"
              id="taiKhoanNguoiTao"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.taiKhoanNguoiTao}
              readOnly="true"
            />
            <label
              htmlFor="taiKhoanNguoiTao"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Tài khoản người tạo
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

export default EditKhoaHoc;
