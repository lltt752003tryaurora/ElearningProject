import { createSlice } from "@reduxjs/toolkit";

const initialState = { tabActive: "1" };

const tabAntdSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    chuyenTab: (state, action) => {
      state.tabActive = "2";
    },
    quayLaiTab: (state, action) => {
      // console.log(action);
      state.tabActive = action.payload;
    },
  },
});

export const { chuyenTab, quayLaiTab } = tabAntdSlice.actions;

export default tabAntdSlice.reducer;
