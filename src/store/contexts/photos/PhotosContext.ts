import { createContext } from "react";
import { PhotosStructure, PhotoStructure } from "../../../data/types";
import { PhotosAction } from "../../actions/photos/types";

interface PhotosContextStructure {
  photos: PhotosStructure;
  dispatch: React.Dispatch<PhotosAction>;
  photo: PhotoStructure;
  dispatchDetail: React.Dispatch<PhotosAction>;
}

const PhotosContext = createContext({} as PhotosContextStructure);

export default PhotosContext;
