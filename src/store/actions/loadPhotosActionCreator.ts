import { Photos } from "../../data/types";
import { LoadPhotosAction } from "./types";

export const loadPhotosActionCreator = (photos: Photos): LoadPhotosAction => ({
  type: "loadPhotos",
  payload: photos,
});
