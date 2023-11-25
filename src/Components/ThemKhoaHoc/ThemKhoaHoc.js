import React, { Fragment, useEffect, useState } from "react";
import { DatePicker, Form, Input, Radio, Rate, Select, message } from "antd";
import { quanLyKhoaHocServ } from "../../services/quanLyKhoaHocServ";
import { quanLyNguoiDungServ } from "../../services/quanLyNguoiDungServ";
import { useFormik } from "formik";
import TextArea from "antd/es/input/TextArea";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./themKhoaHoc.css";

const ThemKhoaHoc = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [imgChange, setImgChange] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
  );
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  //todo : useState : lấy ra danh mục khoá học
  const [danhMucKhoaHoc, setDanhMucKhoaHoc] = useState([]);
  //todo : danh sách loại người dùng
  const [nguoiDung, setNguoiDung] = useState([]);
  //todo : lấy ra danh mục khoá học
  useEffect(() => {
    quanLyKhoaHocServ
      .layDanhMucKhoaHoc()
      .then((result) => {
        console.log(result);
        setDanhMucKhoaHoc(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //todo : lấy ra danh sách người dùng
  useEffect(() => {
    quanLyNguoiDungServ
      .layDanhSachNguoiDung()
      .then((result) => {
        console.log(result);
        setNguoiDung(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //todo : lấy ra người dùng giáo vụ
  const locNguoiDungTheoMaLoai = (nguoiDung) => {
    const nguoiDungGV = nguoiDung.filter(
      (nguoiDung) => nguoiDung.maLoaiNguoiDung === "GV"
    );
    return nguoiDungGV;
  };
  const nguoiDungGV = locNguoiDungTheoMaLoai(nguoiDung);
  //todo : mã nhóm
  const maNhom = [
    {
      label: "GP01",
      value: "GP01",
    },
    {
      label: "GP02",
      value: "GP02",
    },
    {
      label: "GP03",
      value: "GP03",
    },
    {
      label: "GP04",
      value: "GP04",
    },
    {
      label: "GP05",
      value: "GP05",
    },
    {
      label: "GP06",
      value: "GP06",
    },
    {
      label: "GP07",
      value: "GP07",
    },
    {
      label: "GP08",
      value: "GP08",
    },
    {
      label: "GP09",
      value: "GP09",
    },
    {
      label: "GP10",
      value: "GP10",
    },
    {
      label: "GP11",
      value: "GP11",
    },
    {
      label: "GP12",
      value: "GP12",
    },
    {
      label: "GP13",
      value: "GP13",
    },
    {
      label: "GP14",
      value: "GP14",
    },
    {
      label: "GP15",
      value: "GP15",
    },
  ];
  const formik = useFormik({
    initialValues: {
      maKhoaHoc: "",
      tenKhoaHoc: "",
      moTa: "",
      luotXem: 0,
      danhGia: 0,
      hinhAnh: "",
      maNhom: "",
      ngayTao: "",
      maDanhMucKhoaHoc: "",
      taiKhoanNguoiTao: "",
    },
    onSubmit: (values) => {
      console.log(values);
      const data = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          data.append(key, values[key]);
        } else {
          data.append("File", values[key]);
        }
      }
      quanLyKhoaHocServ
        .themKhoaHocUploadHinh(data)
        .then((result) => {
          console.log(result);
          messageApi.success("Thêm khoá học thành công");
          navigate("/admin/quan-ly-khoa-hoc");
        })
        .catch((error) => {
          console.log(error);
          messageApi.error("Thêm khoá học thất bại");
        });
    },
    validationSchema: Yup.object().shape({
      maKhoaHoc: Yup.string().required("Vui lòng không bỏ trống"),
      tenKhoaHoc: Yup.string().required("Vui lòng không bỏ trống"),
      maDanhMucKhoaHoc: Yup.string().required("Vui lòng không bỏ trống"),
      ngayTao: Yup.string().required("Vui lòng chọn ngày"),
      danhGia: Yup.string().required("Vui lòng đánh giá"),
      luotXem: Yup.string().required("Vui lòng cho lượt xem"),
      taiKhoanNguoiTao: Yup.string().required("Vui lòng không bỏ trống"),
      maNhom: Yup.string().required("Vui lòng không bỏ trống"),
      moTa: Yup.string().required("Vui lòng không bỏ trống"),
    }),
  });
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    setFieldValue,
    errors,
    touched,
  } = formik;
  return (
    <>
      {contextHolder}
      <div>
        <div className="text-left my-5">
          <h3 className="text-red-500 uppercase text-2xl font-bold">
            Thêm khoá học
          </h3>
        </div>
        <Form
          onFinish={handleSubmit}
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          size={componentSize}
          initialValues={{
            size: componentSize,
          }}
          onValuesChange={onFormLayoutChange}
        >
          <Form.Item label="Form Size" name="size">
            <Radio.Group>
              <Radio.Button value="small">Small</Radio.Button>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="large">Large</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Tên khoá học">
            <Input
              name="tenKhoaHoc"
              value={values.tenKhoaHoc}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.tenKhoaHoc && touched.tenKhoaHoc && (
              <span className="text-red-500">{errors.tenKhoaHoc}</span>
            )}
          </Form.Item>
          <Form.Item label="Mã khoá học">
            <Input
              name="maKhoaHoc"
              value={values.maKhoaHoc}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.maKhoaHoc && touched.maKhoaHoc && (
              <span className="text-red-500">{errors.maKhoaHoc}</span>
            )}
          </Form.Item>
          <Form.Item label="Danh mục khoá học">
            <Select
              showSearch
              placeholder="Danh mục khoá học"
              optionFilterProp="children"
              options={danhMucKhoaHoc?.map((item, index) => {
                return {
                  label: item.tenDanhMuc,
                  value: item.maDanhMuc,
                };
              })}
              onChange={(value) => {
                setFieldValue("maDanhMucKhoaHoc", value);
              }}
            />
            {touched.maDanhMucKhoaHoc && errors.maDanhMucKhoaHoc && (
              <span className="text-red-500">{errors.maDanhMucKhoaHoc}</span>
            )}
          </Form.Item>
          <Form.Item label="Ngày tạo">
            <DatePicker
              name="ngayTao"
              format={"DD/MM/YYYY"}
              onChange={(day, dayString) => {
                setFieldValue("ngayTao", dayString);
              }}
            />
            {touched.ngayTao && errors.ngayTao && (
              <span className="text-red-500 ml-1">{errors.ngayTao}</span>
            )}
          </Form.Item>
          <Form.Item label="Đánh giá">
            <Rate
              onChange={(value) => {
                setFieldValue("danhGia", value);
              }}
            />
            {touched.danhGia && errors.danhGia && (
              <span className="text-red-500">{errors.danhGia}</span>
            )}
          </Form.Item>
          <Form.Item label="Lượt xem">
            <Input
              name="luotXem"
              value={values.luotXem}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.luotXem && errors.luotXem && (
              <span className="text-red-500">{errors.luotXem}</span>
            )}
          </Form.Item>
          <Form.Item label="Người tạo">
            <Select
              showSearch
              placeholder="Chọn người tạo"
              optionFilterProp="children"
              options={nguoiDungGV.slice(0, 15)?.map((item, index) => {
                return {
                  label: item.taiKhoan,
                  value: item.taiKhoan,
                };
              })}
              onChange={(value) => {
                setFieldValue("taiKhoanNguoiTao", value);
              }}
            />
            {touched.taiKhoanNguoiTao && errors.taiKhoanNguoiTao && (
              <span className="text-red-500">{errors.taiKhoanNguoiTao}</span>
            )}
          </Form.Item>
          <Form.Item label="Mã nhóm">
            <Select
              showSearch
              placeholder="Chọn mã nhóm"
              optionFilterProp="children"
              options={maNhom?.map((item, index) => {
                return {
                  label: item.label,
                  value: item.value,
                };
              })}
              onChange={(value) => {
                setFieldValue("maNhom", value);
              }}
            />
            {touched.maNhom && errors.maNhom && (
              <span className="text-red-500">{errors.maNhom}</span>
            )}
          </Form.Item>
          <Form.Item label="Mô tả">
            <TextArea
              name="moTa"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.moTa}
            />
            {touched.moTa && errors.moTa && (
              <span className="text-red-500">{errors.moTa}</span>
            )}
          </Form.Item>
          <Form.Item label="Hình ảnh">
            <input
              accept="image/png,image/jpg,image/jpeg"
              type="file"
              name="hinhAnh"
              onChange={(event) => {
                let file = event.target.files[0];
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = (e) => {
                  setImgChange(e.target.result);
                };
                setFieldValue("hinhAnh", file);
              }}
            />
            <div className="mt-3">
              <img src={imgChange} className="h-32 w-32" alt={imgChange} />
            </div>
          </Form.Item>

          <Form.Item>
            <button
              type="submit"
              className="bg-[#6ab5f8] px-3 py-2 rounded text-white hover:bg-blue-500 duration-500"
            >
              Thêm khoá học
            </button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default ThemKhoaHoc;
