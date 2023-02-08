import { renderHook } from "@testing-library/react";
import MockContextProvider from "../mocks/MockContextProvider";
import { mockStore, mockDispatch, mockAction } from "../mocks/mockStore";
import useApi from "./useApi";

const dispatch = mockDispatch;
const store = mockStore;
const action = mockAction;

describe("Given a useApi function", () => {
  describe("When getPhotos is called", () => {
    test("Then dispatch should be invoked", async () => {
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
});
