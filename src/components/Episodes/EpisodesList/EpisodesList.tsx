import { useAtom } from "jotai";
import { MouseEvent } from "react";
import { EpisodesDataAtom, EpisodeIdAtom } from "../../../state/Atoms";
import "./episodesList.style.scss";

const EpisodesList = () => {
  const [dataEpisodes] = useAtom(EpisodesDataAtom);
  const [, setIdEpisode] = useAtom(EpisodeIdAtom);
  const handleClick = (e: MouseEvent, id: number) => {
    setIdEpisode(id);
  };

  return (
    <div className="episodeList-container">
      {dataEpisodes.map((item: any) => (
        <button
          className="episodeList-container-button"
          key={item.id}
          onClick={(e, id = item.id) => handleClick(e, id)}
        >
          <div className="episodeList-container-season">
            {item.episode.slice(0, 3) + "   " + item.episode.slice(3)}
          </div>
          <div className="episodeList-container-titleEpisode">{item.name}</div>
        </button>
      ))}
    </div>
  );
};
export default EpisodesList;
