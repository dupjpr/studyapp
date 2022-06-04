import { combineReducers } from "@reduxjs/toolkit";
import dataEpisodes from "./slices/episodesSlice";
import charactersList from "./slices/charactersSlice";

const rootReducer = combineReducers({
  characters: charactersList,
  episodes: dataEpisodes,
});

export default rootReducer;
