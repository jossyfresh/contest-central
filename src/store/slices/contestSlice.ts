import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contest } from "@/types";

interface ContestsState extends Contest {}
const contestSlice = createSlice({
  name: "contests",
  initialState: [] as ContestsState[],
  reducers: {
    setContests: (state, action: PayloadAction<Contest[]>) => {
      return action.payload;
    },
  },
});

export const { setContests } = contestSlice.actions;
export default contestSlice.reducer;
