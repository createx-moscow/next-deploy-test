"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open: (state) => {
      state.value = true;
    },
    close: (state) => {
      state.value = false;
    },
  },
});

console.log(modalSlice.actions);
console.log("mdslice.open");
// Action creators are generated for each case reducer function

export const { open, close } = modalSlice.actions;
export default modalSlice.reducer;
