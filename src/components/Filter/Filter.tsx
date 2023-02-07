import FilterStyled from "./FilterStyled";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Filter = (): JSX.Element => {
  return (
    <FilterStyled>
      <div className="filter">
        <span>Filter by</span>
        <ul className="card_container">
          <li>
            <button>
              <i className="fa-brands fa-fort-awesome"></i>
            </button>
          </li>
          <li>
            <button>
              <i className="fa-solid fa-dragon"></i>
            </button>
          </li>
          <li>
            <button>
              <i className="fa-solid fa-hat-wizard"></i>
            </button>
          </li>
        </ul>
      </div>
    </FilterStyled>
  );
};

export default Filter;
