import styled from "styled-components";

const PhotoStyled = styled.article`
  display: flex;
  flex-direction: column;
  height: 355px;
  width: 312px;
  border: 1px solid #fff;
  border-radius: 10% 10% 10% 10%;

  .photo__tag {
    display: flex;
    flex-direction: column;
    justify-items: center;
    gap: 10px;
    padding: 10px 0;
  }

  .photo__img {
    border-radius: 10% 10% 0% 0%;
    max-height: 72%;
    max-width: 100%;
    justify-items: center;
    object-fit: cover;
    justify-items: flex-start;
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
