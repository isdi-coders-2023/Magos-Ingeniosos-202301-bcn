import styled from "styled-components";

const PhotoStyled = styled.article`
  display: flex;
  flex-direction: column;
  min-height: 355px;
  width: 312px;
  border: 1px solid #fff;
  border-radius: 15px;

  .photo__description {
    display: flex;
    flex-direction: column;
    justify-items: center;
    gap: 10px;
    padding: 10px 0;
  }

  .photo__img {
    border-radius: 15px 15px 0 0;
    height: 255px;
    max-width: 100%;
    justify-items: center;
    object-fit: cover;
  }

  .photographer {
    font-size: 24px;
    padding-left: 12px;
    padding-left: 12px;
  }

  .tags {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    font-size: 18px;
    padding-left: 12px;
    padding-left: 12px;
  }
`;

export default PhotoStyled;
