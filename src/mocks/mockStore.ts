import { Photos } from "../data/types";
import { PhotosAction } from "../store/actions/types";

export const dispatch: React.Dispatch<PhotosAction> = jest.fn();
export const photos: Photos = [];

export const mockStore = { dispatch, photos };
export const mockDispatch = jest.spyOn(mockStore, "dispatch");
export const mockAction = {
  type: 0,
  payload: [
    {
      photographer: "",
      tags: [],
      url: "",
    },
  ],
};
