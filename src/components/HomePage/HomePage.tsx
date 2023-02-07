import "@fortawesome/fontawesome-free/css/all.min.css";
import Filter from "../Filter/Filter";
import Photo from "../Photo/Photo";

const HomePage = (): JSX.Element => {
  return (
    <>
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
    </>
  );
};

export default HomePage;
