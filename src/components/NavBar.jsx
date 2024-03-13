import { NavLink } from "react-router-dom";


const isActiveMenu = ({ isActive }) => (isActive ? "active-menu-link" : "");

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className={isActiveMenu} to="/">Главная</NavLink>
        </li>
        <li>
          <NavLink className={isActiveMenu} to="/about">О нас</NavLink>
        </li>
        <li>
          <NavLink className={isActiveMenu} to="/posts">Посты</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
