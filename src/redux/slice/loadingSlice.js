import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: "loadingSlice",
  initialState,
  reducers: {
    setLoadingStarted: (state, action) => {
      state.isLoading = true;
    },
    setLoadingEnd: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { setLoadingStarted, setLoadingEnd } = loadingSlice.actions;

export default loadingSlice.reducer;
