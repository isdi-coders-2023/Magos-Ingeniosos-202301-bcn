import { useCallback, useContext } from "react";
import { PhotoData, PhotoDataList, PhotosStructure } from "../data/types";
import loadPhotoDetailActionCreator from "../store/actions/photos/loadPhotoDetailActionCreator";
import loadPhotosActionCreator from "../store/actions/photos/loadPhotosActionCreator";

import {
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../store/actions/ui/uiActionCreator";
import PhotosContext from "../store/contexts/photos/PhotosContext";
import UiContext from "../store/contexts/ui/UiContext";

const useApi = (keywords: string) => {
  const { dispatch: dispatchPhotos, dispatchDetail: dispatchPhoto } =
    useContext(PhotosContext);
  const { dispatch: dispatchUi } = useContext(UiContext);

  const getPhotos = useCallback(async () => {
    try {
      dispatchUi(setIsLoadingActionCreator());

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}?page=1&per_page=9&query=${keywords}&client_id=${process.env.REACT_APP_PHOTO_KEY}`
      );

      const photosApi = (await response.json()) as PhotoDataList;

      dispatchUi(unsetIsLoadingActionCreator());

      const photos: PhotosStructure = photosApi.results.map((result) => ({
        id: result.id,
        description: result.description,
        alt: result.alt_description,
        url: result.urls.small,
        tags: result.tags.map((tag) => `#${tag.title}`),
        photographer: result.user.name,
        username: result.user.username,
      }));

      dispatchPhotos(loadPhotosActionCreator(photos));
    } catch (error) {
      return (error as Error).message;
    }
  }, [dispatchPhotos, dispatchUi, keywords]);

  const getPhoto = useCallback(
    async (id: string) => {
      try {
        const photoDetailUrl = `https://api.unsplash.com/photos/${id}?client_id=${process.env.REACT_APP_PHOTO_KEY}`;
        dispatchUi(setIsLoadingActionCreator());

        const result = await fetch(photoDetailUrl);
        const photoApi = (await result.json()) as PhotoData;

        dispatchUi(unsetIsLoadingActionCreator());

        const photo = {
          id: photoApi.id,
          description: photoApi.description,
          alt: photoApi.alt_description,
          url: photoApi.urls.small,
          tags: photoApi.tags.map((tag) => `#${tag.title}`),
          photographer: photoApi.user.name,
          username: photoApi.user.username,
        };

        dispatchPhoto(loadPhotoDetailActionCreator(photo));
      } catch (error: unknown) {
        return (error as Error).message;
      }
    },
    [dispatchUi, dispatchPhoto]
  );

  return { getPhotos, getPhoto };
};

export default useApi;
