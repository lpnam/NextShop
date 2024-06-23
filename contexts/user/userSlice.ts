import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./user";
import { UserData } from "@/lib/define";

interface UserState {
  first_name: string;
  last_name: string;
  email: string;
  image: string;
  online: boolean;
  curr_url: string;
}

const initialState: UserState = {
  first_name: "",
  last_name: "",
  email: "",
  image: "",
  online: false,
  curr_url: "",
};

export const userSlice = createSlice({
  name: "userState",
  initialState,
  reducers: {
    userSignIn: (state, action: PayloadAction<UserData>) => {
      state.online = true;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.email = action.payload.email;
      state.image = action.payload.image;
    },
    userSignOut: (state) => {
      state.online = false;
      state.first_name = "";
      state.last_name = "";
      state.image = "";
      state.email = "";
    },
    userCurrPos: (state, action: PayloadAction<string>) => {
      state.curr_url = action.payload;
    },
  },
});

export const currentUserState = (state: RootState) => state.userState;

// Action creators are generated for each case reducer function
export const { userSignIn, userSignOut, userCurrPos } = userSlice.actions;

export default userSlice.reducer;
