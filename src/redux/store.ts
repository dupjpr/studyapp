import { configureStore } from "@reduxjs/toolkit";
import userInputData from "./slices/inputSlice";
import userList from "./slices/viewSlice";

const store = configureStore({
  reducer: { users: userList, userInput: userInputData },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
