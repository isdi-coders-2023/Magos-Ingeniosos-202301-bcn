import { createContext } from "vm";
import { PhotosStructure } from "../../data/types";
import { LoadPhotosAction } from "../actions/types";

interface PhotosContextStructure {
  photos: PhotosStructure;
  dispatch: React.Dispatch<LoadPhotosAction>;
}

const PhotosContext = createContext({} as PhotosContextStructure);

export default PhotosContext;
