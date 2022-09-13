import { atom } from "jotai";

export const DataAtom = atom(async () => {
  const URL: string = "https://rickandmortyapi.com/api/character";
  const res = await fetch(URL);
  const resJson = await res.json();
  return resJson;
});

export const HomeDataAtom = atom((get) => {
  const dataHome = get(DataAtom).results.slice(0, 12);
  return dataHome;
});
