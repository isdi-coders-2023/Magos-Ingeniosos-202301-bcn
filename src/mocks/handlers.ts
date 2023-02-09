import { rest } from "msw";
import { PhotoDataList } from "../data/types";

export const handlerSuccess = rest.get(
  `https://api.unsplash.com/search/photos`,
  (_, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        results: [
          {
            id: "",
            alt_description: "",
            urls: {
              regular: "",
            },
            tags: [{ title: "" }, { title: "" }, { title: "" }],
            user: {
              name: "",
            },
          },
        ],
      } satisfies PhotoDataList)
    )
);

export const handlerError = rest.get(
  `https://api.unsplash.com/search/photos`,
  (_, res, ctx) => res(ctx.status(500), ctx.json(null))
);
