import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav>
      <Link to="/">Users</Link>
      <Link to="/form">New User</Link>
    </nav>
  );
};

export default NavBar;
