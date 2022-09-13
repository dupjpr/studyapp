import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { fetchEpisodesCharacters } from "../../../redux/slices/episodesSlice";

import "./episodeContent.style.scss";

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
  return <div className="content-container">this is the each info</div>;
};

export default EpisodeContent;
