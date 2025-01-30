import { createSlice } from "@reduxjs/toolkit";

import { getList } from "./listOperation";

const initialState = {
  list: [],
  loader: false,
};

const listSlice = createSlice({
  name: "list",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getList.pending, (state) => {
        state.loader = true;
      })
      .addCase(getList.fulfilled, (state, { payload }) => {
        const { data } = payload;
        state.list = [...data];
        state.loader = false;
      })
      .addCase(getList.rejected, (state) => {
        state.loader = false;
      });
  },
});

export const listReduser = listSlice.reducer;
