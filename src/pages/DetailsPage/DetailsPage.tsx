import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import PhotosContext from "../../store/contexts/photos/PhotosContext";
import DetailsPageStyled from "./DetailsPageStyled";

const DetailsPage = (): JSX.Element => {
  const { getPhoto } = useApi("");
  let { id } = useParams();

  useEffect(() => {
    getPhoto(id!);
  }, [getPhoto, id]);

  const { photo } = useContext(PhotosContext);

  return (
    <DetailsPageStyled className="details__styled">
      <div className="details__container">
        <img
          className="details__image"
          src={photo.url}
          alt={photo.alt}
          width="312"
          height="224"
        />
        <h2 className="details__photographer">{photo.photographer}</h2>
        <span className="details__tags">{photo.tags.join(" ")}</span>
        <p className="details__description">{photo.description}</p>
        <span>
          Username:
          <span className="details__username">{photo.username}</span>
        </span>
      </div>
      <Link to={"/"}>
        <button className="details__button">Back to list</button>
      </Link>
    </DetailsPageStyled>
  );
};

export default DetailsPage;
