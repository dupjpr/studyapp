import { atom } from "jotai";

// infromacion completa que viene del api

export const DataAtom = atom([]);

// información procesada que solo 12 elementos

export const ChunkDataAtom = atom((get) => {
  const speciesFilter = get(DataAtom).slice(0, 12);
  return speciesFilter;
});

export const FilterSpeciesValueAtom = atom("All species");
export const FilterGenderValueAtom = atom("All genders");

// este atom renderiza los elementos en el home

export const HomeDataAtom = atom((get) => {
  if (
    get(FilterGenderValueAtom) !== "All genders" &&
    get(FilterSpeciesValueAtom) !== "All species"
  ) {
    const dataFilter = get(ChunkDataAtom)
      .filter(
        (item: { [key: string]: string }) =>
          item.species === get(FilterSpeciesValueAtom)
      )
      .filter(
        (item: { [key: string]: string }) =>
          item.gender === get(FilterGenderValueAtom)
      );
    return dataFilter;
  } else if (get(FilterSpeciesValueAtom) !== "All species") {
    const dataFilter = get(ChunkDataAtom).filter(
      (item: { [key: string]: string }) =>
        item.species === get(FilterSpeciesValueAtom)
    );
    return dataFilter;
  } else if (
    get(FilterGenderValueAtom) !== "All genders" &&
    get(FilterSpeciesValueAtom) === "All species"
  ) {
    const dataFilter = get(ChunkDataAtom).filter(
      (item: { [key: string]: string }) =>
        item.gender === get(FilterGenderValueAtom)
    );
    return dataFilter;
  } else {
    return get(ChunkDataAtom);
  }
});

export const LabelsGenderAtom = atom([]);

export const DataEpisodesAtom = atom(async () => {
  const URL: string = "https://rickandmortyapi.com/api/episode";
  const res = await fetch(URL);
  const resJson = await res.json();
  return resJson.results;
});

export const EpisodeIdAtom = atom(0);

export const EpisodesDataAtom = atom((get) => {
  const dataEpisodes = get(DataEpisodesAtom).slice(0, 15);
  return dataEpisodes;
});

export const EpisodeInfoAtom = atom(async (get) => {
  const episodeInfo = get(EpisodesDataAtom).filter(
    (item: any) => item.id === get(EpisodeIdAtom)
  );

  const links = episodeInfo[0].characters;

  const charactersPromises = links.map(async (link: any) => {
    const res = await fetch(link);
    const resJson = await res.json();
    return resJson;
  });

  const charactersInformation = await Promise.all(charactersPromises);

  const episodeDetail = {
    name: episodeInfo[0].name,
    images: charactersInformation,
  };
  return episodeDetail;
});
