import { Photos } from "../../data/types";

export interface LoadPhotosAction {
  type: "loadPhotos";
  payload: Photos;
}
