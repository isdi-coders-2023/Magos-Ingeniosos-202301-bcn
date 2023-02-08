import Photo from "../Photo/Photo";
import PhotoListStyled from "./PhotoListStyled";

const PhotoList = (): JSX.Element => {
  return (
    <PhotoListStyled className="photo__list list">
      <li>
        <Photo />
      </li>
      <li>
        <Photo />
      </li>
      <li>
        <Photo />
      </li>
      <li>
        <Photo />
      </li>
      <li>
        <Photo />
      </li>
      <li>
        <Photo />
      </li>
      <li>
        <Photo />
      </li>
      <li>
        <Photo />
      </li>
      <li>
        <Photo />
      </li>
    </PhotoListStyled>
  );
};

export default PhotoList;
