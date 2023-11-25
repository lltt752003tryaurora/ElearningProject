import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { quanLyNguoiDungServ } from "../../services/quanLyNguoiDungServ";
const dataUserLocal = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: dataUserLocal,
  danhSachNguoiDung: [],
  thongTinTaiKhoan: {},
};

const quanLyNguoiDungSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setDataUser: (state, action) => {
      // console.log(action);
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(layDanhSachNguoiDungApi.fulfilled, (state, action) => {
      state.danhSachNguoiDung = action.payload;
    });
    builder.addCase(thongTinTaiKhoanApi.fulfilled, (state, action) => {
      const taiKhoan = action.meta.arg;
      const foundUser = action.payload.find(
        (user) => user.taiKhoan === taiKhoan
      );
      // console.log(foundUser);
      state.thongTinTaiKhoan = foundUser;
    });
  },
});

export const { setDataUser } = quanLyNguoiDungSlice.actions;

export default quanLyNguoiDungSlice.reducer;

//thunk
//todo : lấy danh sách toàn bộ người dùng
export const layDanhSachNguoiDungApi = createAsyncThunk(
  "user/layDanhSachNguoiDungApi",
  async () => {
    const result = await quanLyNguoiDungServ.layDanhSachNguoiDung();
    return result.data;
  }
);
//todo : tìm kiếm người dùng để lấy ra thông tin người dùng
export const thongTinTaiKhoanApi = createAsyncThunk(
  "user/thongTinTaiKhoanApi",
  async (taiKhoan) => {
    const result = await quanLyNguoiDungServ.thongTinTaiKhoan(taiKhoan);
    return result.data;
  }
);
