import styled from "styled-components";

const LoadingStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  .loading {
    &__text {
      font-size: 3rem;
    }

    &__icon {
      padding-left: 20px;
      color: var(--accentColor);
      animation: castingWand 3s linear infinite;
    }
  }

  @keyframes castingWand {
    from {
      transform: rotate(0deg) translateX(15px) rotate(0deg);
    }
    to {
      transform: rotate(360deg) translateX(15px) rotate(-360deg);
    }
  }
`;

export default LoadingStyled;
