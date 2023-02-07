import { Photos } from "../../data/types";
import { LoadPhotosAction, PhotoActionType } from "./types";

export const loadPhotosActionCreator = (photos: Photos): LoadPhotosAction => ({
  type: PhotoActionType.loadPhotos,
  payload: photos,
});
