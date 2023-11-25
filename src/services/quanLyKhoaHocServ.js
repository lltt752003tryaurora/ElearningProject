import https from "./config";
const maNhom = "GP01";

export const quanLyKhoaHocServ = {
  //todo : Lấy danh mục khoá học
  layDanhMucKhoaHoc: async () => {
    return await https.get("/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc");
  },
  //todo : lấy danh sách toàn bộ các khoá học
  layDanhSachKhoaHoc: async () => {
    return await https.get(
      `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${maNhom}`
    );
  },
  //todo : lấy thông tin khoá học để làm trang detail
  layThongTinKhoaHoc: async (maKhoaHoc) => {
    return await https.get(
      `/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`
    );
  },
  //todo : đăng ký khoá học
  dangKyKhoaHoc: async (thongTinDangKy) => {
    return await https.post(`/api/QuanLyKhoaHoc/DangKyKhoaHoc`, thongTinDangKy);
  },
  //todo : lấy khoá học theo từng mã danh mục liên quan
  layKhoaHocTheoMaDanhMuc: async (maDanhMuc) => {
    return await https.get(
      `/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=${maNhom}`
    );
  },
  //todo : lấy danh sách khoá học phân trang
  layDanhSachKhoaHocPhanTrang: async (page) => {
    return await https.get(
      `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${page}&pageSize=10&MaNhom=${maNhom}`
    );
  },
  //todo : ghi danh khoá học
  ghiDanhKhoaHoc: async (ghiDanh) => {
    return await https.post(`/api/QuanLyKhoaHoc/GhiDanhKhoaHoc`, ghiDanh);
  },
  //todo : xoá khoá học ở trang admin
  xoaKhoaHoc: async (maKhoaHoc) => {
    return await https.delete(
      `/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`
    );
  },
  //todo : cập nhật khoá học
  capNhatKhoaHocUpload: async (formData) => {
    return await https.post(
      `/api/QuanLyKhoaHoc/CapNhatKhoaHocUpload`,
      formData
    );
  },
  //todo : huỷ ghi danh khoá học
  huyGhiDanh: async (ghiDanh) => {
    return await https.post(`/api/QuanLyKhoaHoc/HuyGhiDanh`, ghiDanh);
  },
  //todo : thêm khoá học upload hình
  themKhoaHocUploadHinh: async (formData) => {
    return await https.post(
      `/api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh`,
      formData
    );
  },
};
