import { Suspense } from "react";
import EpisodesList from "./EpisodesList/EpisodesList";
import Loading from "../uiLibrary/Loading/Loading";
import EpisodeInfo from "./EpisodeInfo/EpisodeInfo";

import "./episodes.style.scss";

const Episodes: React.FC = () => {
  return (
    <div className="episode-main-container" data-testid="testEpisodes">
      <Suspense fallback={<Loading />}>
        <EpisodesList />
        <EpisodeInfo />
      </Suspense>
    </div>
  );
};

export default Episodes;
