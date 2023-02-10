import { PhotosStructure } from "../data/types";
import { PhotosAction, PhotoActionType } from "../store/actions/types";

export const dispatch: React.Dispatch<PhotosAction> = jest.fn();
export const photos: PhotosStructure = [
  {
    id: "",
    description: "",
    alt: "",
    url: "",
    tags: [],
    photographer: "",
    username: "",
  },
  {
    id: "",
    description: "",
    alt: "",
    url: "",
    tags: [],
    photographer: "",
    username: "",
  },
  {
    id: "",
    description: "",
    alt: "",
    url: "",
    tags: [],
    photographer: "",
    username: "",
  },
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
      description: "",
      alt: "",
      photographer: "",
      username: "",
      tags: [{ title: "" }, { title: "" }, { title: "" }].map(
        (tag) => `#${tag.title}`
      ),
      url: "",
    },
  ],
};
