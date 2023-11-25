import { configureStore } from "@reduxjs/toolkit";
import quanLyKhoaHocSlice from "./slice/quanLyKhoaHocSlice";
import quanLyNguoiDungSlice from "./slice/quanLyNguoiDungSlice";
import tabAntdSlice from "./slice/tabAntdSlice";
import loadingSlice from "./slice/loadingSlice";

export const store = configureStore({
  reducer: {
    quanLyKhoaHocSlice,
    quanLyNguoiDungSlice,
    tabAntdSlice,
    loadingSlice,
  },
});
