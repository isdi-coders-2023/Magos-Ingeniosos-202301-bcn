import { createContext } from "vm";
import { Photos } from "../../data/types";
import { LoadPhotosAction } from "../actions/types";

interface PhotosContextStructure {
  photos: Photos;
  dispatch: React.Dispatch<LoadPhotosAction>;
}

const PhotosContext = createContext({} as PhotosContextStructure);

export default PhotosContext;
