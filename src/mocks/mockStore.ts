import { PhotosStructure } from "../data/types";
import { PhotoActionType, PhotosAction } from "../store/actions/photos/types";
import { UiAction, UiActionType } from "../store/actions/ui/types";

export const dispatch: React.Dispatch<PhotosAction> = jest.fn();
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

export const mockStorePhotos = { dispatch, photos };
export const mockDispatchPhotos = jest.spyOn(mockStorePhotos, "dispatch");

export interface MockActionPhotos {
  type: PhotoActionType;
  payload: PhotosStructure;
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

export const dispatchUi: React.Dispatch<UiAction> = jest.fn();
export const isLoading = true;

export const mockUiStore = { dispatch: dispatchUi, isLoading };
export const mockUiDispatch = jest.spyOn(mockUiStore, "dispatch");

export interface mockUiAction {
  type: UiActionType;
}

export const mockUiUnsetIsLoadingAction = {
  type: UiActionType.unsetIsLoading,
};
export const mockUiSetIsLoadingAction = {
  type: UiActionType.setIsLoading,
};
