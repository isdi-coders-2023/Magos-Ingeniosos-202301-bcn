import { PhotosStructure, PhotoStructure } from "../../../data/types";

export enum PhotoActionType {
  loadPhotos,
  loadPhoto,
  default,
}

export interface PhotosAction {
  type: PhotoActionType;
  payload?: unknown;
}

export interface LoadPhotosAction extends PhotosAction {
  payload: PhotosStructure;
}

export interface LoadPhotoAction extends PhotosAction {
  payload: PhotoStructure;
}
