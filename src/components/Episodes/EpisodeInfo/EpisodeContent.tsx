import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { fetchEpisodesCharacters } from "../../../redux/slices/episodesSlice";

type objectInformation = {
  air_date: string;
  characters: Array<string>;
  created: string;
  episode: string;
  id: number;
  name: string;
  url: string;
};

interface episodeInfoProps {
  episodeInformation: Array<objectInformation>;
}

const EpisodeContent: React.FC<episodeInfoProps> = ({ episodeInformation }) => {
  const storeData = useAppSelector((state: any) => state.rootReducer.episodes);
  const dispatch = useAppDispatch();

  const { idEpisode, charactersEpisode } = storeData;
  const { name, characters } = episodeInformation[0];

  useEffect(() => {
    dispatch(fetchEpisodesCharacters(characters));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idEpisode]);

  return (
    <div>
      <h2>{name}</h2>
      {charactersEpisode.map((item: any) => (
        <img key={item.id} src={item.image} alt="characters episode" />
      ))}
    </div>
  );
};

export default EpisodeContent;
