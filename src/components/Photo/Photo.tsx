import PhotoStyled from "./PhotoStyled";
import { PhotoStructure } from "../../data/types";

interface PhotoProps extends PhotoStructure {}

const Photo = ({ url, alt, photographer, tags }: PhotoProps): JSX.Element => {
  return (
    <PhotoStyled className="photo">
      <img className="photo__img" src={url} alt={alt} />
      <div className="photo__description">
        <h2 className="photographer">{photographer}</h2>
        <ul className="tags">
          <li>{tags[0]}</li> <li>{tags[1]}</li> <li>{tags[2]}</li>
        </ul>
      </div>
    </PhotoStyled>
  );
};

export default Photo;
