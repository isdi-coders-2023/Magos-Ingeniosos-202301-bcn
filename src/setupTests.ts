import "@testing-library/jest-dom";
import { handlerListSuccess } from "./mocks/handlers";

import { server } from "./mocks/server";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers(handlerListSuccess));

afterAll(() => server.close());
