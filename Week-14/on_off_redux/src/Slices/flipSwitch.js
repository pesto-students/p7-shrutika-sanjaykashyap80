import { createSlice } from "@reduxjs/toolkit";

export const flipSlice = createSlice({
  name: "flip",
  initialState: {
    isLightOn: false
  },
  reducers: {
    switchRoom: (state) => {
      state.isLightOn = !state.isLightOn;
    }
  }
});

// Action creators are generated for each case reducer function
export const { switchRoom } = flipSlice.actions;

export default flipSlice.reducer;
