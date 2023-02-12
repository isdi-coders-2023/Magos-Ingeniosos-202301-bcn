import { setupServer } from "msw/node";
import {
  handlerDetailsError,
  handlerDetailsSuccess,
  handlerListError,
  handlerListSuccess,
} from "./handlers";

export const server = setupServer(
  handlerListSuccess,
  handlerDetailsSuccess,
  handlerListError,
  handlerDetailsError
);
