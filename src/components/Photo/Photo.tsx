import PhotoStyled from "./PhotoStyled";
import { PhotoStructure } from "../../data/types";

interface PhotoProps extends PhotoStructure {}

const Photo = ({ url, alt, photographer, tags }: PhotoProps): JSX.Element => {
  return (
    <PhotoStyled className="photo">
      <img
        className="photo__img"
        src={url}
        alt={alt}
        width="312"
        height="255"
      />
      <div className="photo__description">
        <h2 className="photographer">{photographer}</h2>
        <ul className="tags">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </PhotoStyled>
  );
};

export default Photo;
