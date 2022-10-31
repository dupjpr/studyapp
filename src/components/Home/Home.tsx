import CharactersList from "./Characters/Characters";

import "./home.style.scss";

const Users = () => {
  return (
    <div className="home-container" data-testid="testHome">
      <CharactersList />
    </div>
  );
};

export default Users;
