import { Photos } from "../../data/types";

export enum PhotoActionType {
  loadPhotos,
  default,
}
export interface LoadPhotosAction {
  type: PhotoActionType;
  payload: Photos;
}
