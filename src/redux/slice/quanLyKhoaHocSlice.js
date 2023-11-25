import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { quanLyKhoaHocServ } from "../../services/quanLyKhoaHocServ";

const initialState = {
  listKhoaHoc: [],
  detailKhoaHoc: {},
};

const quanLyKhoaHocSlice = createSlice({
  name: "khoaHoc",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(layDanhSachKhoaHocApi.fulfilled, (state, action) => {
      //   console.log(action);
      state.listKhoaHoc = action.payload;
    });
    builder.addCase(layThongTinKhoaHocApi.fulfilled, (state, action) => {
      state.detailKhoaHoc = action.payload;
    });
    builder.addCase(dangKyKhoaHocApi.fulfilled, (state, action) => {
      console.log(action);
    });
  },
});

export const {} = quanLyKhoaHocSlice.actions;

export default quanLyKhoaHocSlice.reducer;

//Thunk
//todo : lấy danh sách toàn bộ các khoá học
export const layDanhSachKhoaHocApi = createAsyncThunk(
  "khoaHoc/layDanhSachKhoaHocApi",
  async () => {
    const result = await quanLyKhoaHocServ.layDanhSachKhoaHoc();
    return result.data;
  }
);

//todo : lấy thông tin khoá học để làm trang detail
export const layThongTinKhoaHocApi = createAsyncThunk(
  "khoaHoc/layThongTinKhoaHocApi",
  async (maKhoaHoc) => {
    const result = await quanLyKhoaHocServ.layThongTinKhoaHoc(maKhoaHoc);
    return result.data;
  }
);

//todo : đăng ký khoá học
export const dangKyKhoaHocApi = createAsyncThunk(
  "khoaHoc/dangKyKhoaHocApi",
  async (thongTinDangKy) => {
    const result = await quanLyKhoaHocServ.dangKyKhoaHoc(thongTinDangKy);
    return result.data;
  }
);
