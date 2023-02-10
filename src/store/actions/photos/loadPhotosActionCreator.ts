import { PhotosStructure } from "../../../data/types";
import { LoadPhotosAction, PhotoActionType } from "./types";

export const loadPhotosActionCreator = (
  photos: PhotosStructure
): LoadPhotosAction => ({
  type: PhotoActionType.loadPhotos,
  payload: photos,
});
