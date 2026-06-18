import { NavLink } from "react-router";
import "./header.css";
const Header = () => {
  return (
    <div className="">
      <h3>This is header</h3>
      <nav className="deco">
        <NavLink to="/mobiles">Mobile</NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/app">App</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to={"/users2"}>Users2</NavLink>
      </nav>
    </div>
  );
};

export default Header;
