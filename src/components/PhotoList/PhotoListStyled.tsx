import styled from "styled-components";

const PhotoListStyled = styled.ul`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    gap: 72px;
  }
`;

export default PhotoListStyled;
