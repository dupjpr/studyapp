import NavBar from "../NavBar/NavBar";
import "./header.style.scss";

const Header: React.FC = () => {
  return (
    <header className="headerContainer">
      <h1 className="headerLogo">Study App</h1>
      <NavBar />
    </header>
  );
};

export default Header;
