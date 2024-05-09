import { configureStore } from "@reduxjs/toolkit";
import powerReducer from "./features/power/powerSlicer";

export default configureStore({
  reducer: {
    power: powerReducer,
  },
});
