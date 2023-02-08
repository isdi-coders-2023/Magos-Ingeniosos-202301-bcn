import { PhotosStructure } from "../../data/types";
import {
  LoadPhotosAction,
  PhotoActionType,
  PhotosAction,
} from "../actions/types";

const photosReducer = (
  currentPhotos: PhotosStructure,
  action: PhotosAction
) => {
  let newPhotos;

  switch (action.type) {
    case PhotoActionType.loadPhotos:
      newPhotos = [...(action as LoadPhotosAction).payload];
      break;
    default:
      newPhotos = currentPhotos;
  }
  return newPhotos;
};

export default photosReducer;
