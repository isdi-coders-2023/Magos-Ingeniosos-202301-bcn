import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  gap: 50px;
  padding: 50px;
  text-align: center;

  .not-found {
    &__code {
      font-size: 5rem;
      letter-spacing: 1rem;
      color: var(--accentColor);

      i {
        font-size: 4rem;
      }
    }

    &__title {
      color: var(--accentColor);
      font-family: var(--displayFont);
      font-size: 3rem;
    }

    &__button {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #000;
      font-size: 1.2rem;
      padding: 20px 40px;
      font-weight: bold;
      background-color: var(--accentColor);
      border-radius: 15px;
    }
  }
`;

export default NotFoundPageStyled;
