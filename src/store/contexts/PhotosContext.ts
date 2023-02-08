import { createContext } from "react";
import { Photos } from "../../data/types";
import { PhotosAction } from "../actions/types";

interface PhotosContextStructure {
  photos: Photos;
  dispatch: React.Dispatch<PhotosAction>;
}

const PhotosContext = createContext({} as PhotosContextStructure);

export default PhotosContext;
