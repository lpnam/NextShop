import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./user";

interface UserState {
  value: boolean;
}

const initialState: UserState = {
  value: false,
};

export const userSlice = createSlice({
  name: "userState",
  initialState,
  reducers: {
    signInSuccess: (state) => {
      state.value = true;
    },
    signOutSuccess: (state) => {
      state.value = false;
    },
  },
});

export const currentUserState = (state: RootState) => state.userState.value;

// Action creators are generated for each case reducer function
export const { signInSuccess, signOutSuccess } = userSlice.actions;

export default userSlice.reducer;
