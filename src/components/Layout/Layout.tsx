import { useContext } from "react";
import { Outlet } from "react-router-dom";
import GlobalStyles from "../../GlobalStyles";
import UiContext from "../../store/contexts/ui/UiContext";
import Loading from "../Loading/Loading";
import MainNavigation from "../MainNavigation/MainNavigation";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  const { isLoading } = useContext(UiContext);
  return (
    <LayoutStyled>
      <header className="main-header">
        <span className="main-title">Wiztagram</span>
        <MainNavigation />
      </header>
      <main>
        {isLoading && <Loading />}
        <GlobalStyles />
        <Outlet />
      </main>
    </LayoutStyled>
  );
};

export default Layout;
