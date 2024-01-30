import { configureStore } from "@reduxjs/toolkit";
import lightSwitcher from "../Theme/LightSwitcherSlice";
//global store that holds theme
export default configureStore({
  reducer: {
    lightSwitcher,
  },
});
