import { createContext } from "react";
import { PhotosStructure } from "../../data/types";
import { PhotosAction } from "../actions/types";

interface PhotosContextStructure {
  photos: PhotosStructure;
  dispatch: React.Dispatch<PhotosAction>;
}

const PhotosContext = createContext({} as PhotosContextStructure);

export default PhotosContext;
