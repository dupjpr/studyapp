import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { loading: true, list: null };

const randomPage = () => {
  return Math.floor(Math.random() * 20) + 1;
};

export const fetchPosts = createAsyncThunk("get/usersData", async () => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${randomPage()}`
  );
  const data = await response.json();
  return data.results;
});

export const usersList = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, () => {})
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = !state.loading;
      });
  },
});

// export const { addUser } = userList.actions;

export default usersList.reducer;
