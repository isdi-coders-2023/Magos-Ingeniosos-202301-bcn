import styled from "styled-components";

const LayoutStyled = styled.div`
  .main-header {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: inherit;
    border-bottom: 3px solid var(--accentColor);
    flex-direction: column;
    padding: 25px 50px;
    gap: 25px;
  }

  .main-title {
    font-size: 2.5rem;
    font-family: var(--displayFont);
  }

  @media (min-width: 768px) {
    .main-header {
      justify-content: space-between;
      flex-direction: row;
    }
  }
`;

export default LayoutStyled;
