import { useContext, useEffect } from "react";
import useApi from "../../hooks/useApi";
import PhotosContext from "../../store/contexts/PhotosContext";
import DetailsPageStyled from "./DetailsPageStyled";

const DetailsPage = (): JSX.Element => {
  const { getPhotos } = useApi();

  useEffect(() => {
    getPhotos();
  }, [getPhotos]);

  const { photos } = useContext(PhotosContext);

  return (
    <>
      {photos.length && (
        <DetailsPageStyled className="details__styled">
          <div className="details__container">
            <img
              className="details__image"
              src={photos[0].url}
              alt={photos[0].alt}
              width="312"
              height="224"
            />
            <h2 className="details__photographer">{photos[0].photographer}</h2>
            <span className="details__tags">{photos[0].tags}</span>
            <p className="details__description">
              "Where there's smoke, there's probably a cool background. At
              least, that's what some of Unsplash's professional community of
              photographers thought. Now, you can choose from a huge collection
              of free smoke backgrounds. Your welcome!",
            </p>
            <span>
              Username:
              <span className="details__username">{photos[0].username}</span>
            </span>
          </div>
          <button className="details__button">Back to list</button>
        </DetailsPageStyled>
      )}
    </>
  );
};

export default DetailsPage;
