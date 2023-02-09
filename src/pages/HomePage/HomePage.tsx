import "@fortawesome/fontawesome-free/css/all.min.css";
import Filter from "../../components/Filter/Filter";
import PhotoList from "../../components/PhotoList/PhotoList";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  return (
    <HomePageStyled>
      <div className="title">
        <h1>All Photos</h1>
      </div>
      <Filter />
      <PhotoList />
      <div>
        <button aria-label="Previous page">
          <i className="fa-solid fa-circle-arrow-left"></i>
        </button>
        <span>Page 1 of 10</span>
        <button aria-label="Next page">
          <i className="fa-solid fa-circle-arrow-right"></i>
        </button>
      </div>
    </HomePageStyled>
  );
};

export default HomePage;
