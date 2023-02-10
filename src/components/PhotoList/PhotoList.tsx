import { useContext } from "react";
import PhotosContext from "../../store/contexts/PhotosContext";
import Photo from "../Photo/Photo";
import PhotoListStyled from "./PhotoListStyled";

const PhotoList = (): JSX.Element => {
  const { photos } = useContext(PhotosContext);
  const defaultAlt = "magic themed photography from unsplash";

  return (
    <PhotoListStyled className="photo__list list">
      {photos.map((photo) => (
        <li key={photo.id}>
          <Photo
            id={photo.id}
            description={photo.description}
            alt={photo.alt ? photo.alt : defaultAlt}
            url={photo.url}
            tags={photo.tags}
            photographer={photo.photographer}
            username={photo.username}
          />
        </li>
      ))}
    </PhotoListStyled>
  );
};

export default PhotoList;
