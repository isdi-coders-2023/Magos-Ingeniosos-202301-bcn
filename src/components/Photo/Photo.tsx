import PhotoStyled from "./PhotoStyled";
import { PhotoStructure } from "../../data/types";
import { Link } from "react-router-dom";

interface PhotoProps extends PhotoStructure {}

const Photo = ({
  id,
  url,
  alt,
  photographer,
  tags,
}: PhotoProps): JSX.Element => {
  return (
    <PhotoStyled className="photo">
      <Link to={`/details/${id}`}>
        <img
          className="photo__img"
          src={url}
          alt={alt}
          width="312"
          height="255"
        />
        <div className="photo__description">
          <h2 className="photo__photographer">{photographer}</h2>
          <ul className="photo__tags">
            {tags.map((tag) => (
              <li key={tag + Math.floor(Math.random() * 9999)}>{tag}</li>
            ))}
          </ul>
        </div>
      </Link>
    </PhotoStyled>
  );
};

export default Photo;
