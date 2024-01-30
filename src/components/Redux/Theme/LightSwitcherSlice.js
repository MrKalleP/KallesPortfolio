import { createSlice } from "@reduxjs/toolkit";

export const lightSwitcherSlice = createSlice({
  name: "lightSwitcher",
  initialState: {
    isOn: false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.isOn = !state.isOn;
    },
  },
});

export const { toggleTheme } = lightSwitcherSlice.actions;

export const selectIsOn = (state) => state.lightSwitcher.isOn;

export default lightSwitcherSlice.reducer;

/*i use lightSwitcher for the slice name and isOn for the state property and access the state with selectIsOn*/
