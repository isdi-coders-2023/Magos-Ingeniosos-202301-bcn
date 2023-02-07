import styled from "styled-components";

const PhotoStyled = styled.article`
  .photo {
    display: flex;
    flex-direction: column;
  }
  .photo_img {
    border-radius: 10% 10% 0% 0%;
    height: 312px;
    width: 255px;
    justify-items: center;
  }
`;

export default PhotoStyled;
