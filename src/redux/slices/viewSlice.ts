import { createSlice } from "@reduxjs/toolkit";
import userData from "../../mockData/data";
// import type { RootState } from "../store";

const initialState = {
  list: userData,
};
export const userList = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.users.list;

export default userList.reducer;
