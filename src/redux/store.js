import { configureStore, createSlice } from "@reduxjs/toolkit";

// Slice для управління станом опцій
const choiceSlice = createSlice({
  name: "choice",
  initialState: { selectedChoice: "" },
  reducers: {
    setChoice: (state, action) => {
      state.selectedChoice = action.payload;
    },
  },
});

export const { setChoice } = choiceSlice.actions;

const store = configureStore({
  reducer: {
    choice: choiceSlice.reducer,
  },
});

export default store;
