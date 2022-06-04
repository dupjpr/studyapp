import { NavLink } from "react-router-dom";

import "./navBar.style.scss";

const NavBar: React.FC = () => {
  return (
    <nav className="navBar-container">
      <NavLink to="/">Characters</NavLink>
      <NavLink to="/episodes">Episodes</NavLink>
    </nav>
  );
};

export default NavBar;
