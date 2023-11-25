import { Route, Routes } from "react-router-dom";
import Blog from "./Components/Blog/Blog";
import ChiTietKhoaHoc from "./Components/ChiTietKhoaHoc/ChiTietKhoaHoc";
import Error404 from "./Components/Error404/Error404";
import KhoaHocTheoTen from "./Components/KhoaHocTheoTen/KhoaHocTheoTen";
import KhoaHocTongHop from "./Components/KhoaHocTongHop/KhoaHocTongHop";
import SuKien from "./Components/SuKien/SuKien";
import ThongTin from "./Components/ThongTin/ThongTin";
import TimKiemKhoaHoc from "./Components/TimKiemKhoaHoc/TimKiemKhoaHoc";
import FormDangNhap from "./pages/FormDangNhap/FormDangNhap";
import Home from "./pages/Home/Home";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import ThongTinCaNhan from "./pages/ThongTinCaNhan/ThongTinCaNhan";
import UserAdmin from "./pages/UserAdmin/UserAdmin";
import EditUser from "./Components/EditUser/EditUser";
import ThemNguoiDung from "./Components/ThemNguoiDung/ThemNguoiDung";
import GhiDanhKhoaHoc from "./Components/GhiDanhKhoaHoc/GhiDanhKhoaHoc";
import KhoaHocAdmin from "./pages/KhoaHocAdmin/KhoaHocAdmin";
import EditKhoaHoc from "./Components/EditKhoaHoc/EditKhoaHoc";
import GhiDanhTheoTenNguoiDung from "./Components/GhiDanhTheoTenNguoiDung/GhiDanhTheoTenNguoiDung";
import ThemKhoaHoc from "./Components/ThemKhoaHoc/ThemKhoaHoc";
import FormDangKy from "./pages/FormDangKy/FormDangKy";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeTemplate />}>
          <Route index element={<Home />} />
          <Route path="khoa-hoc" element={<KhoaHocTongHop />} />
          <Route path="chi-tiet">
            <Route path=":id" element={<ChiTietKhoaHoc />} />
          </Route>
          <Route path="danh-muc-khoa-hoc">
            <Route path=":id" element={<KhoaHocTheoTen />} />
          </Route>
          <Route path="tim-kiem-khoa-hoc">
            <Route path=":id" element={<TimKiemKhoaHoc />} />
          </Route>
          <Route path="thong-tin" element={<ThongTin />} />
          <Route path="su-kien" element={<SuKien />} />
          <Route path="blog" element={<Blog />} />
          <Route path="thong-tin-ca-nhan" element={<ThongTinCaNhan />} />
        </Route>
        <Route path="dang-nhap" element={<FormDangNhap />} />
        <Route path="dang-ky" element={<FormDangKy />} />
        <Route path="*" element={<Error404 />} />
        <Route path="admin" element={<AdminTemplate />}>
          <Route path="quan-ly-nguoi-dung" element={<UserAdmin />} />
          <Route path="chinh-sua-user">
            <Route path=":id" element={<EditUser />} />
          </Route>
          <Route path="chinh-sua-khoa-hoc">
            <Route path=":id" element={<EditKhoaHoc />} />
          </Route>
          <Route path="them-nguoi-dung" element={<ThemNguoiDung />} />
          <Route path="ghi-danh-khoa-hoc">
            <Route path=":id" element={<GhiDanhKhoaHoc />} />
          </Route>
          <Route path="quan-ly-khoa-hoc" element={<KhoaHocAdmin />} />
          <Route path="ghi-danh-khoa-hoc-theo-ten">
            <Route path=":id" element={<GhiDanhTheoTenNguoiDung />} />
          </Route>
          <Route path="them-khoa-hoc" element={<ThemKhoaHoc />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
