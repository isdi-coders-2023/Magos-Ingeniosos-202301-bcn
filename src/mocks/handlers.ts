import { rest } from "msw";
import { PhotoDataList } from "../data/types";

const handler = rest.get(
  `https://api.unsplash.com/search/photos`,
  (_, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        results: [
          {
            id: "",
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

export default handler;
