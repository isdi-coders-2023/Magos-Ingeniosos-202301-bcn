import { PhotosStructure } from "../../../data/types";
import {
  LoadPhotosAction,
  PhotoActionType,
  PhotosAction,
} from "../../actions/photos/types";

const photosReducer = (
  currentPhotos: PhotosStructure,
  action: PhotosAction
) => {
  let newPhotos;

  if (action.type === PhotoActionType.loadPhotos) {
    newPhotos = [...(action as LoadPhotosAction).payload];
  } else {
    newPhotos = currentPhotos;
  }

  return newPhotos;
};

export default photosReducer;
