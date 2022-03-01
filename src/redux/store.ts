import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userList from "./slices/viewSlice";

const store = configureStore({
  reducer: { userList },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch();
// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}

export default store;
