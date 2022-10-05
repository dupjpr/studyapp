import { atom } from "jotai";

export const DataAtom = atom(async () => {
  const page = Math.floor(Math.random() * 20) + 1;
  const URL: string = `https://rickandmortyapi.com/api/character/?page=${page}`;
  const res = await fetch(URL);
  const resJson = await res.json();
  return resJson.results;
});

export const HomeDataAtom = atom((get) => {
  const dataHome = get(DataAtom).slice(0, 12);
  return dataHome;
});

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
