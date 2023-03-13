import { useAtom } from "jotai";
import { HomeDataAtom } from "../../../state/Atoms";
import Filter from "../../Filter/Filter";

import "./characters.style.scss";

const CharactersList = () => {
  const [data] = useAtom(HomeDataAtom);

  return (
    <div>
      <Filter />
      <div className="characters-container" data-testid="testCharacters">
        {data?.map((item: { [key: string]: string }) => (
          <div key={item.id} className="grid-item" data-testid={`testCard`}>
            <div className="character-card">
              <div className="character-card-img">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="character-card-info">
                <h2>{item.name}</h2>
                <div>
                  <p>Species:</p>
                  <p>{item.species}</p>
                </div>
                <div>
                  <p>Gender:</p>
                  <p>{item.gender}</p>
                </div>
                <div>
                  <p>Status:</p>
                  <p>{item.status}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharactersList;
