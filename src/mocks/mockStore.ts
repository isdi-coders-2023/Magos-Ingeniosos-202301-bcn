import { PhotosStructure, PhotoStructure } from "../data/types";
import { PhotoActionType, PhotosAction } from "../store/actions/photos/types";
import { UiAction, UiActionType } from "../store/actions/ui/types";

export const dispatchPhotos: React.Dispatch<PhotosAction> = jest.fn();
export const dispatchPhoto: React.Dispatch<PhotosAction> = jest.fn();
export const photos: PhotosStructure = [
  {
    id: "",
    description: "",
    alt: "alternative text",
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
const photo = {
  id: "",
  description: "",
  alt: "",
  url: "",
  tags: [],
  photographer: "",
  username: "",
};

export const mockStorePhotos = {
  dispatch: dispatchPhotos,
  photos,
  dispatchDetail: dispatchPhoto,
  photo,
};
export const mockDispatchPhotos = jest.spyOn(mockStorePhotos, "dispatch");
export const mockDispatchPhoto = jest.spyOn(mockStorePhotos, "dispatchDetail");

export interface MockActionPhotos {
  type: PhotoActionType;
  payload: PhotosStructure;
}

export interface MockActionPhoto {
  type: PhotoActionType;
  payload: PhotoStructure;
}

export const mockActionPhotos: MockActionPhotos = {
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

export const mockActionPhoto: MockActionPhoto = {
  type: PhotoActionType.loadPhoto,
  payload: {
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
};

export const dispatchUi: React.Dispatch<UiAction> = jest.fn();
export const isLoading = true;

export const mockUiStore = { dispatch: dispatchUi, isLoading };
export const mockUiDispatch = jest.spyOn(mockUiStore, "dispatch");

export interface MockUiAction {
  type: UiActionType;
}

export const mockUiUnsetIsLoadingAction = {
  type: UiActionType.unsetIsLoading,
};
export const mockUiSetIsLoadingAction = {
  type: UiActionType.setIsLoading,
};
