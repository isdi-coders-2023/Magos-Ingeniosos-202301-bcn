import styled from "styled-components";

const MainNavigationStyled = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    gap: 100px;
  }

  .active {
    color: var(--accentColor);
  }

  @media (min-width: 768px) {
    ul {
      gap: 50px;
    }

    .active {
      color: inherit;
      border-bottom: 2px solid var(--accentColor);
    }
  }
`;

export default MainNavigationStyled;
