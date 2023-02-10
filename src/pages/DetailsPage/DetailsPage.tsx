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
          <div>
            <div className="details__container">
              <div>
                <img
                  className="details__image"
                  src={photos[0].url}
                  alt={photos[0].alt}
                  width="312"
                  height="224"
                />
              </div>
              <h2>{photos[0].photographer}</h2>
              <span>{photos[0].tags}</span>
              <p></p>
              <span>{photos[0].username}</span>
            </div>
            <div className="details__li">
              <li>
                <button>Back to list</button>
              </li>
            </div>
          </div>
        </DetailsPageStyled>
      )}
    </>
  );
};

export default DetailsPage;
