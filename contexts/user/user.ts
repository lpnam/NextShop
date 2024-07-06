import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import userClickAvatarSlice from "./userClickAvatarSlice";

const store = configureStore({
  reducer: {
    userState: userReducer,
    userClickAvatarState: userClickAvatarSlice,
  },
});

export default store;

// export { store };

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
