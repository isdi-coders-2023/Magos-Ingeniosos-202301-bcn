import { useContext, useEffect } from "react";
import useApi from "../../hooks/useApi";
import PhotosContext from "../../store/contexts/PhotosContext";
import Photo from "../Photo/Photo";
import PhotoListStyled from "./PhotoListStyled";

const PhotoList = (): JSX.Element => {
  const { getPhotos } = useApi();

  useEffect(() => {
    getPhotos();
  }, [getPhotos]);

  const { photos } = useContext(PhotosContext);

  return (
    <PhotoListStyled className="photo__list list">
      {photos.map((photo) => (
        <li key={photo.key}>
          <Photo
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
