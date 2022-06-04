import { useAppSelector } from "../../redux/hooks";
import EpisodesList from "./EpisodesList/EpisodesList";
import Loading from "../uiLibrary/Loading/Loading";
import EpisodeInfo from "./EpisodeInfo/EpisodeInfo";

import "./episodes.style.scss";

const Episodes: React.FC = () => {
  const data = useAppSelector((state) => state.rootReducer.episodes);

  const { loading } = data;

  return (
    <div>
      {loading ? <Loading /> : <EpisodesList />}
      <EpisodeInfo />
    </div>
  );
};

export default Episodes;
