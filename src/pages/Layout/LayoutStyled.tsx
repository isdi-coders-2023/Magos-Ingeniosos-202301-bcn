import styled from "styled-components";

const LayoutStyled = styled.div`
  .main-header {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main-title {
    font-size: 2.5rem;
    font-family: "Cinzel Decorative";
    padding-top: 25px;
  }

  @media (min-width: 768px) {
    .main-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .main-title {
      font-size: 2.5rem;
      font-family: "Cinzel Decorative";
      padding-top: 40px;
      padding-left: 50px;
    }
  }
`;

export default LayoutStyled;
