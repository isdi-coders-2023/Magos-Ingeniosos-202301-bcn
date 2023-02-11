import FilterStyled from "./FilterStyled";
import "@fortawesome/fontawesome-free/css/all.min.css";

interface FilterFunctions {
  filterCastlePhotos: () => {};
  filterDragonPhotos: () => {};
  filterSpellsPhotos: () => {};
  deactivateFilter: () => {};
}

interface FilterProps {
  filterFunctions: FilterFunctions;
}

const Filter = ({ filterFunctions }: FilterProps): JSX.Element => {
  return (
    <FilterStyled>
      <div className="filter">
        <span>Filter by</span>
        <ul className="card_container">
          <li>
            <button
              className="filter__button"
              aria-label="Castle"
              onClick={() => {
                filterFunctions.filterCastlePhotos();
              }}
            >
              <i className="fa-brands fa-fort-awesome"></i>
            </button>
          </li>
          <li>
            <button
              className="filter__button"
              aria-label="Dragon"
              onClick={() => {
                filterFunctions.filterDragonPhotos();
              }}
            >
              <i className="fa-solid fa-dragon"></i>
            </button>
          </li>
          <li>
            <button
              className="filter__button"
              aria-label="Spells"
              onClick={() => {
                filterFunctions.filterSpellsPhotos();
              }}
            >
              <i className="fa-solid fa-hat-wizard"></i>
            </button>
          </li>
        </ul>
        <button
          className="filter__button filter__button--show-all"
          onClick={() => {
            filterFunctions.deactivateFilter();
          }}
        >
          Show all
        </button>
      </div>
    </FilterStyled>
  );
};

export default Filter;
