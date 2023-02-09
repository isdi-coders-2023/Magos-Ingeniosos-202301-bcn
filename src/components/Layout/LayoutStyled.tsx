import styled from "styled-components";

const LayoutStyled = styled.div`
  .main-header {
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: inherit;
    border-bottom: 3px solid #eb7d00;
  }

  .main-title {
    font-size: 2.5rem;
    font-family: "Cinzel Decorative";
  }

  @media (min-width: 768px) {
    .main-header {
      height: 95px;
      justify-content: space-between;
    }

    .main-title {
      padding-left: 50px;
    }
  }
`;

export default LayoutStyled;
