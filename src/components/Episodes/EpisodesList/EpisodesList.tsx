import { MouseEvent } from "react";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { idEpisode } from "../../../redux/slices/episodesSlice";

import "./episodesList.style.scss";

const EpisodesList = () => {
  const data = useAppSelector((state: any) => state.rootReducer.episodes);
  const dispatch = useAppDispatch();

  const { episodesList } = data;

  const handleClick = (e: MouseEvent, id: number) => {
    dispatch(idEpisode(id));
  };

  return (
    <div className="episodeList-container">
      {data &&
        episodesList.map((item: any) => (
          <button
            className="episodeList-container-button"
            key={item.id}
            onClick={(e, id = item.id) => handleClick(e, id)}
          >
            <div className="episodeList-container-season">
              {item.episode.slice(0, 3) + "   " + item.episode.slice(3)}
            </div>
            <div className="episodeList-container-titleEpisode">
              {item.name}
            </div>
          </button>
        ))}
    </div>
  );
};
export default EpisodesList;
