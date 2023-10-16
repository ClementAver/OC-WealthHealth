import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state /*, action*/) => {
      state.value++;
    },
    decrement: (state /*, action*/) => {
      state.value--;
    },
  },
});

export default counter.reducer;

export const { increment, decrement } = counter.actions;
