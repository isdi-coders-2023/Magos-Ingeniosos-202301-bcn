import { useEffect } from "react";
import { PhotoData } from "./data/types";
import GlobalStyle from "./globalStyles";

const App = () => {
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=1&per_page=10&query=magic&client_id=zwvIFWNLhdhYKvJ9iVRXL-W6TU1gcT6TPqzT3YCRyKU`
      );

      const photoApi = (await response.json()) as PhotoData;

      const photos = photoApi.results.map((result) => ({
        url: result.urls.regular,
        tags: result.tags.map((tag) => `#${tag.title}`),
        photographer: result.user.name,
      }));

      return photos;
    })();
  });

  return (
    <>
      <GlobalStyle />
    </>
  );
};

export default App;
