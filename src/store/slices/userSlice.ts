import { User } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState extends User {}

const userSlice = createSlice({
  name: "user",
  initialState: {} as UserState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      return { ...state, ...action.payload };
    },
    unSetUser: (state) => {
      return {} as UserState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, unSetUser } = userSlice.actions;

export default userSlice.reducer;
