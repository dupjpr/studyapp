import { useAtom } from "jotai";
import { EpisodeIdAtom } from "../../../state/Atoms";
import EpisodeContent from "./EpisodeContent";
import { Suspense } from "react";
import Loading from "../../uiLibrary/Loading/Loading";

import "./episodeInfo.style.scss";

const EpisodeInfo = () => {
  const [idEpisode] = useAtom(EpisodeIdAtom);

  return (
    <div className="episodeInfo-container" data-testid="testEpisodesInfo">
      {idEpisode ? (
        <Suspense fallback={<Loading />}>
          <EpisodeContent />
        </Suspense>
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
