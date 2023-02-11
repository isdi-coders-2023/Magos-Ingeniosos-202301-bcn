import styled from "styled-components";

const FilterStyled = styled.div`
  .filter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    &__button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--accentColor);
      padding: 15px 30px;
      border-radius: 15px;

      cursor: pointer;

      &--show-all {
        width: 310px;
      }
    }
  }

  .card_container {
    display: flex;
    width: 312px;
    justify-content: space-between;
  }
`;

export default FilterStyled;
