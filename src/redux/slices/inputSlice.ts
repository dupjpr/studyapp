import { createSlice } from "@reduxjs/toolkit";
// import type { RootState } from "../store";

interface inputUserTypes {
  name: string;
  age: number;
  company: string;
  img: string;
}

const initialState: inputUserTypes = {
  name: "",
  age: 0,
  company: "",
  img: "",
};

export const userInputData = createSlice({
  name: "userInput",
  initialState,
  reducers: {},
});

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.users.list;

export default userInputData.reducer;
