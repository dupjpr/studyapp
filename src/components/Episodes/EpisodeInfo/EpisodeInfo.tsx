import { useAppSelector } from "../../../redux/hooks";
import EpisodeContent from "./EpisodeContent";

const EpisodeInfo = () => {
  const data: { [key: string]: any } = useAppSelector(
    (state) => state.rootReducer.episodes
  );

  const { episodesList, idEpisode } = data;

  const infoEpisode = episodesList.filter((item: any) => item.id === idEpisode);

  return (
    <div>
      {idEpisode ? (
        <EpisodeContent episodeInformation={infoEpisode} />
      ) : (
        <div>pick a episode</div>
      )}
    </div>
  );
};

export default EpisodeInfo;
