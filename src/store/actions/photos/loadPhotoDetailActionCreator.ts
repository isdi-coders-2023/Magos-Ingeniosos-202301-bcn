import { PhotoStructure } from "../../../data/types";
import { LoadPhotoAction, PhotoActionType } from "./types";

const loadPhotoDetailActionCreator = (
  photo: PhotoStructure
): LoadPhotoAction => ({
  type: PhotoActionType.loadPhoto,
  payload: photo,
});

export default loadPhotoDetailActionCreator;
