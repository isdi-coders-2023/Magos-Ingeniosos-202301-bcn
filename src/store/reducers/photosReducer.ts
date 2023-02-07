import { Photos } from "../../data/types";
import { LoadPhotosAction } from "../actions/types";

const photosReducer = (currentPhotos: Photos, action: LoadPhotosAction) => {
  let newPhotos;

  switch (action.type) {
    case "loadPhotos":
      newPhotos = [...(action as LoadPhotosAction).payload];
      break;
    default:
      newPhotos = currentPhotos;
  }
  return newPhotos;
};

export default photosReducer;
