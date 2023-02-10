import styled from "styled-components";

const DetailsPageStyled = styled.div`
  display: flex;
  gap: 35px;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 50px;

  h2 {
    font-size: 36px;
  }

  .details {
    &__container {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      gap: 35px;
    }

    &__image {
      border-radius: 15px;
      border: 1px solid #fff;
    }

    &__li {
      list-style: none;
      display: flex;
      gap: 25px;
      flex-direction: column;
    }
  }

  button {
    display: flex;
    background-color: var(--accentColor);
    width: 312px;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export default DetailsPageStyled;
