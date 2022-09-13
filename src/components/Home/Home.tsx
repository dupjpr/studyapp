import { useAtom } from "jotai";
import Loading from "../uiLibrary/Loading/Loading";
import CharactersList from "./Characters/Characters";
import { DataAtom } from "../../state/Atoms";

import "./home.style.scss";

const Users = () => {
  return (
    <div className="home-container" data-testid="testHome">
      <CharactersList />
    </div>
  );
};

export default Users;
