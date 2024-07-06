import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./user";

const initialState = {
  value: false,
};
export const userClickAvatarSlice = createSlice({
  name: "userClickAvatarState",
  initialState,
  reducers: {
    userClickAvatarUpdateStatus: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
    // userSignOut: (state) => {
    //   state.online = false;
    //   state.first_name = "";
    //   state.last_name = "";
    //   state.image = "";
    //   state.email = "";
    // },
    // userCurrPos: (state, action: PayloadAction<string>) => {
    //   state.curr_url = action.payload;
    // },
  },
});

export const currentUserClickAvatarState = (state: RootState) =>
  state.userClickAvatarState;

// Action creators are generated for each case reducer function
export const { userClickAvatarUpdateStatus } = userClickAvatarSlice.actions;

export default userClickAvatarSlice.reducer;
