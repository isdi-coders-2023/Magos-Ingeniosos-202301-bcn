import { NavLink } from "react-router-dom";
import MainNavigationStyled from "./MainNavigationStyled";

const MainNavigation = () => {
  return (
    <MainNavigationStyled>
      <nav className="main-navigation">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="">My Photos</NavLink>
          </li>
        </ul>
      </nav>
    </MainNavigationStyled>
  );
};

export default MainNavigation;
