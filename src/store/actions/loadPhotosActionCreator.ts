import { Photos } from "../../data/types";
import { LoadPhotosAction } from "./types";

export const loadPhotosActionCreator = (photos: Photos): LoadPhotosAction => ({
  type: "loadPhotos",
  payload: photos,
});

const photos = [
  { url: "", tags: [], photographer: "" },
  { url: "", tags: [], photographer: "" },
  { url: "", tags: [], photographer: "" },
];

console.log(loadPhotosActionCreator(photos));
