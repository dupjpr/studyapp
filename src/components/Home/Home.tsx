import { useAppSelector } from "../../redux/hooks";
import Loading from "../uiLibrary/Loading/Loading";
import CharactersList from "./Characters/Characters";

import "./home.style.scss";

const Users = () => {
  const data = useAppSelector((state) => state.rootReducer.characters);

  const { loading } = data;

  return (
    <div className="home-container">
      {loading ? <Loading /> : <CharactersList />}
    </div>
  );
};

export default Users;
