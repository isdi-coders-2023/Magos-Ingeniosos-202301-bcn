import { useEffect } from "react";
import { PhotoStructure } from "../../data/types";
import useApi from "../../hooks/useApi";

interface DetailsPageProps extends PhotoStructure {}

const DetailsPage = ({
  alt,
  photographer,
  username,
  tags,
  url,
}: DetailsPageProps): JSX.Element => {
  const { getPhotos } = useApi();

  useEffect(() => {
    getPhotos();
  }, [getPhotos]);

  return (
    <div>
      <div>
        <div className="Image">
          <img src={url} alt={alt} />
        </div>
        <h2>{photographer}</h2>
        <span>{tags}</span>
        <p></p>
        <span>{username}</span>
      </div>
      <div>
        <ul className="button_styled">
          <li>
            <button>Add to my photos</button>
          </li>
          <li>
            <button>Remove from list</button>
          </li>
          <li>
            <button>Modify</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailsPage;
