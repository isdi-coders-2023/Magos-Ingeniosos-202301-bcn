import { PhotoStructure } from "../../../data/types";
import { LoadPhotoAction, PhotoActionType } from "./types";

const loadPhotoActionCreator = (photo: PhotoStructure): LoadPhotoAction => ({
  type: PhotoActionType.loadPhoto,
  payload: photo,
});

export default loadPhotoActionCreator;
