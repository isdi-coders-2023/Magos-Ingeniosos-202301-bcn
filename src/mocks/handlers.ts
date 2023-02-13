import { rest } from "msw";
import { PhotoData, PhotoDataList } from "../data/types";

const detailUrl = "https://api.unsplash.com/photos/";

const photoData = {
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
} satisfies PhotoData;

export const handlerListSuccess = rest.get(
  `${process.env.REACT_APP_API_URL!}`,
  (_, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        results: [photoData],
      } satisfies PhotoDataList)
    )
);

export const handlerDetailsSuccess = rest.get(`${detailUrl}`, (_, res, ctx) =>
  res(ctx.status(200), ctx.json(photoData))
);

export const handlerListError = rest.get(
  `${process.env.REACT_APP_API_URL!}`,
  (_, res, ctx) => res(ctx.status(404))
);

export const handlerDetailsError = rest.get(`${detailUrl}`, (_, res, ctx) =>
  res(ctx.status(404))
);
