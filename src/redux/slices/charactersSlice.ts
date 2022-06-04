import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { loading: true, list: null };

const randomPage = () => {
  return Math.floor(Math.random() * 20) + 1;
};

export const fetchCharacters = createAsyncThunk("get/characters", async () => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${randomPage()}`
  );
  const data = await response.json();
  return data.results;
});

export const charactersList = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, () => {})
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = !state.loading;
      });
  },
});

// export const { addUser } = charactersList.actions;

export default charactersList.reducer;
