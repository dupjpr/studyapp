import { useAppSelector } from "../../../redux/hooks";
import "./characters.style.scss";

const CharactersList = () => {
  const dataList = useAppSelector((state: any) => state.rootReducer.users.list);

  const list = dataList.slice(0, 12);

  return (
    <div className="characters-container">
      {list.map((item: { [key: string]: string }) => (
        <div key={item.id} className="grid-item">
          <div className="character-card">
            <div className="character-card-img">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="character-card-info">
              <h2>{item.name}</h2>
              <p>
                <strong>Species:</strong> {item.species}
              </p>
              <p>
                <strong>Gender:</strong> {item.gender}
              </p>
              <p>
                <strong>Status:</strong> {item.status}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharactersList;