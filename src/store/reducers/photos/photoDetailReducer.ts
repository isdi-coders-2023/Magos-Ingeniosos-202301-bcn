import { PhotoStructure } from "../../../data/types";
import {
  LoadPhotoAction,
  PhotoActionType,
  PhotosAction,
} from "../../actions/photos/types";

const photoDetailReducer = (
  currentPhoto: PhotoStructure,
  action: PhotosAction
) => {
  let newPhoto;

  if (action.type === PhotoActionType.loadPhoto) {
    newPhoto = { ...(action as LoadPhotoAction).payload };
  } else newPhoto = currentPhoto;

  return newPhoto;
};

export default photoDetailReducer;
