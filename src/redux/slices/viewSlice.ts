import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import userData from "../../mockData/data";
// import type { RootState } from "../store";

const initialState = {
  list: userData,
};
export const userList = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<any>) => {
      state.list = [...state.list, action.payload];
    },
  },
});

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.users.list;
export const { addUser } = userList.actions;

export default userList.reducer;
