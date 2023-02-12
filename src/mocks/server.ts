import { setupServer } from "msw/node";
import {
  handlerDetailsSuccess,
  handlerError,
  handlerSuccess,
} from "./handlers";

export const server = setupServer(
  handlerSuccess,
  handlerDetailsSuccess,
  handlerError
);
