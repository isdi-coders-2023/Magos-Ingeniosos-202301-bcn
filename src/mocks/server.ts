import { setupServer } from "msw/node";
import { handlerError, handlerSuccess } from "./handlers";

export const server = setupServer(handlerSuccess, handlerError);
