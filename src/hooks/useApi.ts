import { PhotoDataList } from "../data/types";

const useApi = () => {
  (async () => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&per_page=10&query=magic&client_id=${process.env.REACT_APP_PHOTO_KEY}`
    );

    const photoApi = (await response.json()) as PhotoDataList;

    const photos = photoApi.results.map((result) => ({
      url: result.urls.regular,
      tags: result.tags.map((tag) => `#${tag.title}`),
      photographer: result.user.name,
    }));

    return photos;
  })();
};

export default useApi;
