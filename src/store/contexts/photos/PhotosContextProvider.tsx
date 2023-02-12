import { useMemo, useReducer } from "react";
import { PhotoStructure } from "../../../data/types";
import photoReducer from "../../reducers/photos/photoReducer";
import photosReducer from "../../reducers/photos/photosReducer";
import PhotosContext from "./PhotosContext";

interface PhotosContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const PhotosContextProvider = ({
  children,
}: PhotosContextProviderProps): JSX.Element => {
  const [photos, dispatch] = useReducer(photosReducer, [
    {
      id: "",
      url: "",
      username: "",
      tags: [],
      photographer: "",
      alt: "",
      description: "",
    },
  ]);

  const [photo, dispatchDetail] = useReducer(photoReducer, {
    id: "",
    url: "",
    username: "",
    tags: [],
    photographer: "",
    alt: "",
    description: "",
  } as PhotoStructure);

  const photosValue = useMemo(
    () => ({ photos, dispatch, photo, dispatchDetail }),
    [photos, photo]
  );

  return (
    <PhotosContext.Provider value={photosValue}>
      {children}
    </PhotosContext.Provider>
  );
};

export default PhotosContextProvider;
