import { PhotosStructure } from "../../data/types";

export enum PhotoActionType {
  loadPhotos,
  default,
}
export interface LoadPhotosAction {
  type: PhotoActionType;
  payload: PhotosStructure;
}
