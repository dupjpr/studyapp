import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface initalTypes {
  loading: boolean;
  episodesList: null | Array<{}>;
  idEpisode: null | number;
  charactersEpisode: Array<{}>;
}
const initialState: initalTypes = {
  loading: true,
  episodesList: null,
  idEpisode: null,
  charactersEpisode: [],
};

export const fetchEpisodes = createAsyncThunk("get/episodes", async () => {
  const response = await fetch("https://rickandmortyapi.com/api/episode");
  const data = await response.json();
  return data.results;
});

export const fetchEpisodesCharacters = createAsyncThunk(
  "get/episodesCharacters",
  async (charactersLink: Array<string>) => {
    const getInformation = async () => {
      const charactersPromises = charactersLink.map((link: string) =>
        fetch(link).then((response) => response.json())
      );
      const charactersInformation = await Promise.all(charactersPromises);
      return charactersInformation;
    };

    return await getInformation().then((data) => data);
  }
);

export const dataEpisodes = createSlice({
  name: "episodes",
  initialState,
  reducers: {
    idEpisode: (state, action) => {
      state.idEpisode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEpisodes.pending, () => {})
      .addCase(fetchEpisodes.fulfilled, (state, action) => {
        state.episodesList = action.payload;
        state.loading = !state.loading;
      });
    builder
      .addCase(fetchEpisodesCharacters.pending, () => {})
      .addCase(fetchEpisodesCharacters.fulfilled, (state, action) => {
        state.charactersEpisode = action.payload;
        // state.loading = !state.loading;
      });
  },
});

// Other code such as selectors can use the imported `RootState` type
export const { idEpisode } = dataEpisodes.actions;
export default dataEpisodes.reducer;
