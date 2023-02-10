import { useMemo, useReducer } from "react";
import photosReducer from "../reducers/photoReducer/photosReducer";
import PhotosContext from "./PhotosContext";

interface PhotosContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const PhotosContextProvider = ({
  children,
}: PhotosContextProviderProps): JSX.Element => {
  const [photos, dispatch] = useReducer(photosReducer, []);
  const photosValue = useMemo(() => ({ photos, dispatch }), [photos]);
  return (
    <PhotosContext.Provider value={photosValue}>
      {children}
    </PhotosContext.Provider>
  );
};

export default PhotosContextProvider;
