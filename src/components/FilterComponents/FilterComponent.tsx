import FilterStyled from "./FilterStyled";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Filter = (): JSX.Element => {
  return (
    <>
      <div>
        <span>Filter by</span>
        <FilterStyled>
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
        </FilterStyled>
      </div>
    </>
  );
};

export default Filter;
