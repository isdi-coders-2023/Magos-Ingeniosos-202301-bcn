import { PhotosStructure } from "../../../data/types";
import { LoadPhotosAction, PhotoActionType } from "./types";

const loadPhotosActionCreator = (
  photos: PhotosStructure
): LoadPhotosAction => ({
  type: PhotoActionType.loadPhotos,
  payload: photos,
});

export default loadPhotosActionCreator;
