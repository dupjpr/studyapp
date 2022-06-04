import { MouseEvent } from "react";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { idEpisode } from "../../../redux/slices/episodesSlice";

const EpisodesList = () => {
  const data = useAppSelector((state: any) => state.rootReducer.episodes);
  const dispatch = useAppDispatch();

  const { episodesList } = data;

  const handleClick = (e: MouseEvent, id: number) => {
    dispatch(idEpisode(id));
  };

  return (
    <div>
      {data &&
        episodesList.map((item: any) => (
          <div key={item.id} onClick={(e, id = item.id) => handleClick(e, id)}>
            <div>
              {item.episode.slice(0, 3) + "   " + item.episode.slice(3)}
            </div>
            <div>{item.name}</div>
          </div>
        ))}
    </div>
  );
};
export default EpisodesList;
