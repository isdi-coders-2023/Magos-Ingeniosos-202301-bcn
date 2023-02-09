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
            urls: {
              regular: "",
            },
            tags: [],
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
