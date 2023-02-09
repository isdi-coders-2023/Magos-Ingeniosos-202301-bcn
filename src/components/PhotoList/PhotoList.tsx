import { useContext } from "react";
import PhotosContext from "../../store/contexts/PhotosContext";
import Photo from "../Photo/Photo";
import PhotoListStyled from "./PhotoListStyled";

const PhotoList = (): JSX.Element => {
  const { photos } = useContext(PhotosContext);

  return (
    <PhotoListStyled className="photo__list list">
      {photos.map((photo) => (
        <li key={photo.id}>
          <Photo
            id={photo.id}
            alt={photo.alt}
            url={photo.url}
            tags={photo.tags}
            photographer={photo.photographer}
          />
        </li>
      ))}
    </PhotoListStyled>
  );
};

export default PhotoList;
