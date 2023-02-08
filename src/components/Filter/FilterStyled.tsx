import styled from "styled-components";

const FilterStyled = styled.div`
  .filter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__button {
      display: flex;
      background-color: #eb7d00;
      width: 80px;
      border-radius: 15px;
      gap: 35px;
      justify-content: center;
    }
  }

  .card_container {
    display: flex;
    width: 312px;
    justify-content: space-around;
  }
`;

export default FilterStyled;
