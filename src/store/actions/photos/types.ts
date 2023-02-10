import { PhotosStructure } from "../../../data/types";

export enum PhotoActionType {
  loadPhotos,
  default,
}

export interface PhotosAction {
  type: PhotoActionType;
  payload?: unknown;
}

export interface LoadPhotosAction extends PhotosAction {
  payload: PhotosStructure;
}
