import { Outlet } from "react-router-dom";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled>
      <header className="main-header">
        <span className="main-title">Wiztagram</span>
      </header>
      <main>
        <Outlet />
      </main>
    </LayoutStyled>
  );
};

export default Layout;
