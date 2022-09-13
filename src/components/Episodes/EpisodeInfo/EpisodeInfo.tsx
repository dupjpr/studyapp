import { useAtom } from "jotai";
import { EpisodeIdAtom } from "../../../state/Atoms";
import EpisodeContent from "./EpisodeContent";

import "./episodeInfo.style.scss";

const EpisodeInfo = () => {
  const [idEpisode] = useAtom(EpisodeIdAtom);
  console.log({ idEpisode });

  return (
    <div className="episodeInfo-container" data-testid="testEpisodesInfo">
      {idEpisode ? (
        <EpisodeContent />
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
