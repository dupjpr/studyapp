import { useAtom } from "jotai";
import { EpisodeInfoAtom } from "../../../state/Atoms";
import "./episodeContent.style.scss";

const EpisodeContent: React.FC = () => {
  const [episode] = useAtom(EpisodeInfoAtom);

  const { name, images } = episode;

  return (
    <div className="content-container">
      <h2>{name}</h2>
      <h2>Characters episode:</h2>
      {images.map((item: any) => (
        <img
          className="content-container-img"
          key={item.id}
          src={item.image}
          alt="characters episode"
        />
      ))}
    </div>
  );
};

export default EpisodeContent;
