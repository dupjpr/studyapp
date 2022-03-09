import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../store";
interface inputUserTypes {
  formInput: { name: string; age: number; company: string; img: string };
}

const initialState: inputUserTypes = {
  formInput: { name: "", age: 0, company: "", img: "" },
};

export const userInputData = createSlice({
  name: "userInput",
  initialState,
  reducers: {
    addInfo: (state, action: PayloadAction<any>) => {
      state.formInput = { ...state.formInput, ...action.payload };
    },
  },
});

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.users.list;
export const { addInfo } = userInputData.actions;
export default userInputData.reducer;
