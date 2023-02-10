import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect } from "react";
import Filter from "../../components/Filter/Filter";
import PhotoList from "../../components/PhotoList/PhotoList";
import useApi from "../../hooks/useApi";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  const { getPhotos } = useApi();

  useEffect(() => {
    getPhotos();
  }, [getPhotos]);

  return (
    <HomePageStyled>
      <h1 className="title">All Photos</h1>
      <Filter />
      <PhotoList />
    </HomePageStyled>
  );
};

export default HomePage;
