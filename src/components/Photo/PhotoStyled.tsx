import styled from "styled-components";

const PhotoStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  height: 355px;
  width: 312px;
  border: 1px solid #fff;
  border-radius: 10% 10% 10% 10%;

  .photo__img {
    border-radius: 10% 10% 0% 0%;
    max-height: 72%;
    max-width: 100%;
    justify-items: center;
    object-fit: cover;
  }

  .photograf {
    font-size: 24px;
    padding-left: 12px;
  }

  .tags {
    font-size: 18px;
    padding-left: 12px;
  }
`;

export default PhotoStyled;
