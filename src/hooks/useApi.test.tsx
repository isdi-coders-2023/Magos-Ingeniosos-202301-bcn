import { renderHook } from "@testing-library/react";
import { handlerError } from "../mocks/handlers";
import MockContextProvider from "../mocks/MockContextProvider";
import { mockStore, mockDispatch, mockAction } from "../mocks/mockStore";
import { server } from "../mocks/server";
import useApi from "./useApi";

const dispatch = mockDispatch;
const store = mockStore;
const action = mockAction;

describe("Given a useApi function", () => {
  describe("When getPhotos is called with a valid action", () => {
    test("Then dispatch should be invoked with that action", async () => {
      const {
        result: {
          current: { getPhotos },
        },
      } = renderHook(() => useApi(), {
        wrapper: ({ children }) => {
          return (
            <MockContextProvider mockStore={store}>
              {children}
            </MockContextProvider>
          );
        },
      });

      await getPhotos();

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe("When an error occurs", () => {
    test("Then dispatch should not be invoked", async () => {
      server.use(handlerError);

      const {
        result: {
          current: { getPhotos },
        },
      } = renderHook(() => useApi(), {
        wrapper: ({ children }) => {
          return (
            <MockContextProvider mockStore={store}>
              {children}
            </MockContextProvider>
          );
        },
      });

      await getPhotos();

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
