import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import userData from "../../mockData/data";
// import type { RootState } from "../store";

export const getInformation = createAsyncThunk(
  "information/getInformation",
  async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const formatResponse = await response.json();
    return formatResponse;
  }
);

const initialState = {
  list: userData,
  newList: "",
};

export const userList = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<any>) => {
      state.list = [...state.list, action.payload];
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getInformation.fulfilled, (state, action) => {
      // Add user to the state array
      state.newList = action.payload;
    });
  },
});

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.users.list;
export const { addUser } = userList.actions;

export default userList.reducer;
