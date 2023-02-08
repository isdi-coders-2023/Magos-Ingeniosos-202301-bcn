import "@fortawesome/fontawesome-free/css/all.min.css";
import Filter from "../Filter/Filter";
import Photo from "../Photo/Photo";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  return (
    <HomePageStyled>
      <div className="title">
        <h1>All Photos</h1>
      </div>

      <Filter />
      <ul>
        <li>
          <Photo />
        </li>
        <li>
          <Photo />
        </li>
        <li>
          <Photo />
        </li>
      </ul>
      <div>
        <button>
          <i className="fa-solid fa-circle-arrow-left"></i>
        </button>
        <span>Page 1 of 10</span>
        <button>
          <i className="fa-solid fa-circle-arrow-right"></i>
        </button>
      </div>
    </HomePageStyled>
  );
};

export default HomePage;
