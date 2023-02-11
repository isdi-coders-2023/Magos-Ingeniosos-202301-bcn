import { useCallback, useContext } from "react";
import { PhotoDataList } from "../data/types";
import { loadPhotosActionCreator } from "../store/actions/photos/loadPhotosActionCreator";
import {
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../store/actions/ui/uiActionCreator";
import PhotosContext from "../store/contexts/photos/PhotosContext";
import UiContext from "../store/contexts/ui/UiContext";

const useApi = (keywords: string) => {
  const { dispatch } = useContext(PhotosContext);
  const { dispatch: uiDispatch } = useContext(UiContext);

  const getPhotos = useCallback(async () => {
    try {
      uiDispatch(setIsLoadingActionCreator());

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}?page=1&per_page=30&query=${keywords}&client_id=${process.env.REACT_APP_PHOTO_KEY}`
      );

      const photoApi = (await response.json()) as PhotoDataList;

      uiDispatch(unsetIsLoadingActionCreator());

      const photos = photoApi.results.map((result) => ({
        id: result.id,
        description: result.description,
        alt: result.alt_description,
        url: result.urls.small,
        tags: result.tags.map((tag) => `#${tag.title}`),
        photographer: result.user.name,
        username: result.user.username,
      }));

      dispatch(loadPhotosActionCreator(photos));
    } catch (error) {
      return (error as Error).message;
    }
  }, [dispatch, uiDispatch, keywords]);

  return { getPhotos };
};

export default useApi;
