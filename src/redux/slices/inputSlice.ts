import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../store";
export interface inputUserTypes {
  formInput: {
    name: string;
    age: number;
    company: string;
    img: string;
    id: any;
  };
}

const initialState: inputUserTypes = {
  formInput: { name: "", age: 0, company: "", img: "", id: null },
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
