import { useAppSelector } from "../../../redux/hooks";
import EpisodeContent from "./EpisodeContent";

import "./episodeInfo.style.scss";

const EpisodeInfo = () => {
  const data: { [key: string]: any } = useAppSelector(
    (state) => state.rootReducer.episodes
  );

  const { episodesList, idEpisode } = data;

  const infoEpisode = episodesList?.filter(
    (item: any) => item.id === idEpisode
  );

  return (
    <div className="episodeInfo-container" data-testid="testEpisodesInfo">
      {idEpisode ? (
        <EpisodeContent episodeInformation={infoEpisode} />
      ) : (
        <div
          className="episodeInfo-container-msn"
          data-testid="testEpisodesInfo-msn"
        >
          Pick a Episode!
        </div>
      )}
    </div>
  );
};

export default EpisodeInfo;
