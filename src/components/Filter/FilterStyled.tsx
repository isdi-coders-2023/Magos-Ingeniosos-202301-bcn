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
      height: 35px;
      align-items: center;
    }
  }

  .card_container {
    display: flex;
    width: 312px;
    justify-content: space-between;
  }
`;

export default FilterStyled;
