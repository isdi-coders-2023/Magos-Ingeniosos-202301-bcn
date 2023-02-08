import styled from "styled-components";

const PhotoStyled = styled.article`
  .photo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
  }
  .photo_img {
    border-radius: 10% 10% 0% 0%;
    height: 312px;
    width: 255px;
    justify-items: center;
  }
  .photograf {
    font-size: 24px;
  }
  .tags {
    font-size: 18px;
  }
`;

export default PhotoStyled;
