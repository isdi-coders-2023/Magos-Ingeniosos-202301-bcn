import { useCallback, useContext } from "react";
import { PhotoDataList } from "../data/types";
import { loadPhotosActionCreator } from "../store/actions/loadPhotosActionCreator";
import PhotosContext from "../store/contexts/PhotosContext";

const useApi = () => {
  const { dispatch } = useContext(PhotosContext);

  const getPhotos = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=1&per_page=10&query=magic&client_id=${process.env.REACT_APP_PHOTO_KEY}`
      );

      const photoApi = (await response.json()) as PhotoDataList;

      const photos = photoApi.results.map((result) => ({
        id: result.id,
        alt: result.alt_description,
        url: result.urls.regular,
        tags: result.tags.map((tag) => `#${tag.title}`),
        photographer: result.user.name,
      }));

      dispatch(loadPhotosActionCreator(photos));
    } catch (error) {
      return (error as Error).message;
    }
  }, [dispatch]);

  return { getPhotos };
};

export default useApi;
