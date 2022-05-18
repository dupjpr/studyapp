import { NavLink } from "react-router-dom";

import "./navBar.style.scss";

const NavBar: React.FC = () => {
  return (
    <nav className="navBar-container">
      <NavLink to="/">Users</NavLink>
      <NavLink to="/form">New User</NavLink>
    </nav>
  );
};

export default NavBar;
