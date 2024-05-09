import { createSlice } from "@reduxjs/toolkit";

export const powerSlice = createSlice({
  name: "power",
  initialState: {
    value: true,
    volume: "50",
    clicked: " ",
  },
  reducers: {
    setPower: (state, action) => {
      state.value = action.payload;
    },
    setVolume: (state, action) => {
      state.volume = action.payload;
    },
    setClicked: (state, action) => {
      state.clicked = action.payload;
    },
  },
});

export const { setPower, setVolume, setClicked } = powerSlice.actions;

export default powerSlice.reducer;
