import { PhotosStructure } from "../data/types";
import { PhotosAction, PhotoActionType } from "../store/actions/types";

export const dispatch: React.Dispatch<PhotosAction> = jest.fn();
export const photos: PhotosStructure = [
  { id: "", alt: "", url: "", tags: [], photographer: "" },
  { id: "", alt: "", url: "", tags: [], photographer: "" },
  { id: "", alt: "", url: "", tags: [], photographer: "" },
];

export const mockStore = { dispatch, photos };
export const mockDispatch = jest.spyOn(mockStore, "dispatch");

export interface MockAction {
  type: PhotoActionType;
  payload: PhotosStructure;
}

export const mockAction: MockAction = {
  type: PhotoActionType.loadPhotos,
  payload: [
    {
      id: "",
      alt: "",
      photographer: "",
      tags: [{ title: "" }, { title: "" }, { title: "" }].map(
        (tag) => `#${tag.title}`
      ),
      url: "",
    },
  ],
};
