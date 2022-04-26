import { createSlice } from "@reduxjs/toolkit";
// import type { RootState } from "../store";
// export interface inputUserTypes {
//   formInput: {
//     name: string;
//     age: number;
//     company: string;
//     img: string;
//     id: any;
//   };
// }

// const initialState: any = {
//   formInput: { name: "", age: 0, company: "", img: "", id: null },
// };

const initialState = "hola estado";

export const formInputData = createSlice({
  name: "userInput",
  initialState,
  reducers: {
    // addInfo: (state, action) => {
    //   state.formInput = { ...state.formInput, ...action.payload };
    // },
  },
});

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.users.list;
// export const { addInfo } = formInputData.actions;
export default formInputData.reducer;
