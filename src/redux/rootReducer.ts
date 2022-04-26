import { combineReducers } from "@reduxjs/toolkit";
import formInputData from "./slices/formSlice";
import usersList from "./slices/usersListSlice";

const rootReducer = combineReducers({
  users: usersList,
  userInput: formInputData,
});

export default rootReducer;
