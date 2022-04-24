import "./header.style.scss";
import Photo from "./img/title.png";

const Header: React.FC = () => {
  return (
    <header className="headerContainer">
      <h1 className="headerLogo">Study App</h1>
      <div className="headerImageContainer">
        <img src={Photo} alt="title rick and mortys" />
      </div>
    </header>
  );
};

export default Header;
