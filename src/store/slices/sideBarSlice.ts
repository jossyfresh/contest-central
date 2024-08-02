import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface sideBarState {
  open: boolean;
}

const initialState: sideBarState = {
  open: true,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    open: (state: sideBarState) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.open = true;
    },
    close: (state: sideBarState) => {
      state.open = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { open, close } = sidebarSlice.actions;

export default sidebarSlice.reducer;
