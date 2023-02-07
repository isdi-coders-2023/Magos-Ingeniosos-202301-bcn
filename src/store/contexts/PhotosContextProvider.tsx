import { useReducer } from "react";
import photosReducer from "../reducers/photosReducer";
import PhotosContext from "./PhotosContext";

interface PhotosContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const PhotosContextProvider = ({
  children,
}: PhotosContextProviderProps): JSX.Element => {
  const [photos, dispatch] = useReducer(photosReducer, []);

  return (
    <PhotosContext.Provider value={{ photos, dispatch }}>
      {children}
    </PhotosContext.Provider>
  );
};

export default PhotosContextProvider;
