import https from "./config";
const maNhom = "GP01";

export const quanLyNguoiDungServ = {
  dangNhap: async (data) => {
    return await https.post(`/api/QuanLyNguoiDung/DangNhap`, data);
  },
  //todo : lấy danh sách toàn bộ người dùng
  layDanhSachNguoiDung: async () => {
    return await https.get(
      `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${maNhom}`
    );
  },
  //todo : xoá người dùng
  xoaNguoiDung: async (taiKhoan) => {
    return await https.delete(
      `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
    );
  },
  //todo : thông tin tài khoản
  thongTinTaiKhoan: async (taiKhoan) => {
    return await https.get(
      `/api/QuanLyNguoiDung/TimKiemNguoiDung?tuKhoa=${taiKhoan}`
    );
  },
  //todo : cập nhật thông tin người dùng
  capNhatThongTinNguoiDung: async (data) => {
    return await https.put(
      `/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      data
    );
  },
  //todo : thêm người dùng
  themNguoiDung: async (data) => {
    return await https.post(`/api/QuanLyNguoiDung/ThemNguoiDung`, data);
  },
  //todo : lấy danh sách loại người dùng
  layDanhSachLoaiNguoiDung: async () => {
    return await https.get("/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung");
  },
  //todo : lấy danh sách khoá học chưa ghi danh
  layDanhSachKhoaHocChuaGhiDanh: async (taiKhoan) => {
    return await https.post(
      `/api/QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh?TaiKhoan=${taiKhoan}`
    );
  },
  //todo : lấy danh sách khoá học mà người dùng chờ xét duyệt
  layDanhSachKhoaHocChoXetDuyet: async (taiKhoan) => {
    return await https.post(
      `/api/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet`,
      taiKhoan
    );
  },
  //todo : lấy danh sách khoá học đã xét duyệt
  layDanhSachKhoaHocDaXetDuyet: async (taiKhoan) => {
    return await https.post(
      `/api/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet`,
      taiKhoan
    );
  },
  //todo : lấy danh sách người dùng chưa ghi danh vào khoá học
  layDanhXachNguoiDungChuaGhiDanh: async (maKhoaHoc) => {
    return await https.post(
      "/api/QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh",
      maKhoaHoc
    );
  },
  //todo : lấy danh sách học viên chờ xét duyệt
  layDanhSachHocVienChoXetDuyet: async (maKhoaHoc) => {
    return await https.post(
      `/api/QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet`,
      maKhoaHoc
    );
  },
  //todo : lấy danh sách người dùng đã ghi danh vào khoá học đó
  layDanhSachHocVienKhoaHoc: async (maKhoaHoc) => {
    return await https.post(
      `/api/QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc`,
      maKhoaHoc
    );
  },
  //todo : lấy ra thông tin tài khoản đang được lưu dưới local
  thongTinTaiKhoanLocal: async (taiKhoan) => {
    return await https.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`, taiKhoan);
  },
  //todo : đăng ký tài khoản cho người dùng
  dangKy: async (taiKhoan) => {
    return await https.post(`/api/QuanLyNguoiDung/DangKy`, taiKhoan);
  },
  //todo : lấy danh sách toàn bộ loại người dùng của các nhóm
};
