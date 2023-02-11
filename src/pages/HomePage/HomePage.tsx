import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect } from "react";
import Filter from "../../components/Filter/Filter";
import PhotoList from "../../components/PhotoList/PhotoList";
import useApi from "../../hooks/useApi";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  const keywords = ["magic+dragon", "wizard+castle", "magic+spells"];
  const { getPhotos } = useApi(keywords.join("+"));

  const keywordsCastle = keywords.filter(
    (keyword) => keyword === "wizard+castle"
  );

  const keywordsDragon = keywords.filter(
    (keyword) => keyword === "magic+dragon"
  );

  const keywordsSpells = keywords.filter(
    (keyword) => keyword === "magic+spells"
  );

  const filterFunctions = {
    filterCastlePhotos: useApi(keywordsCastle.join("")).getPhotos,
    filterDragonPhotos: useApi(keywordsDragon.join("")).getPhotos,
    filterSpellsPhotos: useApi(keywordsSpells.join("")).getPhotos,
    deactivateFilter: useApi(keywords.join("+")).getPhotos,
  };

  useEffect(() => {
    getPhotos();
  }, [getPhotos]);

  return (
    <HomePageStyled>
      <h1 className="title">All Photos</h1>
      <Filter filterFunctions={filterFunctions} />
      <PhotoList />
    </HomePageStyled>
  );
};

export default HomePage;
