import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { name: "juan", list: null };

export const fetchPosts = createAsyncThunk("get/usersData", async () => {
  const response = await fetch(`https://rickandmortyapi.com/api/character`);
  const data = await response.json();
  return data;
});

export const usersList = createSlice({
  name: "users",
  initialState,
  reducers: {
    // addUser: (state, action) => {
    //   state.list = [...state.list, action.payload];
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        console.log("loading");
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.list = action.payload;
      });
  },
});

// export const { addUser } = userList.actions;

export default usersList.reducer;
