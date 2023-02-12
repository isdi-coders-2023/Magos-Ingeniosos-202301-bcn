import { rest } from "msw";
import { PhotoData, PhotoDataList } from "../data/types";

export const handlerSuccess = rest.get(
  `${process.env.REACT_APP_API_URL!}`,
  (_, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        results: [
          {
            id: "",
            description: "",
            alt_description: "",
            urls: {
              small: "",
            },
            tags: [{ title: "" }, { title: "" }, { title: "" }],
            user: {
              username: "",
              name: "",
            },
          },
        ],
      } satisfies PhotoDataList)
    )
);

export const handlerDetailsSuccess = rest.get(
  `https://api.unsplash.com/photos/`,
  (_, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        id: "",
        description: "",
        alt_description: "",
        urls: {
          small: "",
        },
        tags: [{ title: "" }, { title: "" }, { title: "" }],
        user: {
          username: "",
          name: "",
        },
      } satisfies PhotoData)
    )
);

export const handlerError = rest.get(
  `${process.env.REACT_APP_API_URL!}`,
  (_, res, ctx) => res(ctx.status(500), ctx.json(null))
);
