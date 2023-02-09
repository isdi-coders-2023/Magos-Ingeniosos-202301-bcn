import { Outlet } from "react-router-dom";
import GlobalStyles from "../../GlobalStyles";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled>
      <header className="main-header">
        <span className="main-title">Wiztagram</span>
      </header>
      <main>
        <GlobalStyles />
        <Outlet />
      </main>
    </LayoutStyled>
  );
};

export default Layout;
