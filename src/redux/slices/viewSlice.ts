import { createSlice } from "@reduxjs/toolkit";
import userData from "../../mockData/data";

const initialState = userData;

export const userList = createSlice({
  name: "viewList",
  initialState,
  reducers: {},
});

export default userList.reducer;
