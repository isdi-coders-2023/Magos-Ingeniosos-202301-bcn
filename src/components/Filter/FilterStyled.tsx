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
      background-color: #b8bcc9;
      padding: 15px 30px;
      border-radius: 15px;
      cursor: pointer;

      &:focus {
        box-shadow: 0 0 25px 2px #ffba6a;
        background-color: var(--accentColor);

        i {
          color: #000;
        }
      }

      i {
        color: #2f2f2f;
      }

      &--show-all {
        width: 310px;

        &:focus {
          box-shadow: 0 0 25px 2px #ffba6a;
          background-color: var(--accentColor);
        }
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
