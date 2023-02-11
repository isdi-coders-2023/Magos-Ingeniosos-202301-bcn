import { renderHook } from "@testing-library/react";
import { handlerError } from "../mocks/handlers";
import MockContextProvider from "../mocks/MockContextProvider";
import {
  mockStorePhotos,
  mockDispatchPhotos,
  mockActionPhotos,
  mockUiDispatch,
  mockUiStore,
  mockUiSetIsLoadingAction,
  mockUiUnsetIsLoadingAction,
} from "../mocks/mockStore";
import { server } from "../mocks/server";
import PhotosContext from "../store/contexts/photos/PhotosContext";
import UiContext from "../store/contexts/ui/UiContext";
import useApi from "./useApi";

const dispatchPhotos = mockDispatchPhotos;
const storePhotos = mockStorePhotos;
const actionPhotos = mockActionPhotos;

const dispatchUi = mockUiDispatch;
const storeUi = mockUiStore;
const actionUiSetIsLoading = mockUiSetIsLoadingAction;
const actionUiUnsetIsLoading = mockUiUnsetIsLoadingAction;

describe("Given a useApi function", () => {
  describe("When getPhotos is called with a valid action", () => {
    test("Then dispatch should be invoked with that action", async () => {
      const {
        result: {
          current: { getPhotos },
        },
      } = renderHook(() => useApi("magic+dragon+wizard+castle+spells"), {
        wrapper: ({ children }) => {
          return (
            <UiContext.Provider value={storeUi}>
              <MockContextProvider mockStore={storePhotos}>
                {children}
              </MockContextProvider>
            </UiContext.Provider>
          );
        },
      });

      await getPhotos();

      expect(dispatchPhotos).toHaveBeenCalledWith(actionPhotos);
    });

    test("Then dispatchUi should be invoked with the action actionUiSetIsLoading and actionUiUnsetIsLoading", async () => {
      const {
        result: {
          current: { getPhotos },
        },
      } = renderHook(() => useApi("magic+dragon+wizard+castle+spells"), {
        wrapper: ({ children }) => {
          return (
            <UiContext.Provider value={storeUi}>
              <PhotosContext.Provider value={storePhotos}>
                {children}
              </PhotosContext.Provider>
            </UiContext.Provider>
          );
        },
      });

      await getPhotos();

      expect(dispatchUi).toHaveBeenCalledWith(actionUiSetIsLoading);
      expect(dispatchUi).toHaveBeenCalledWith(actionUiUnsetIsLoading);
    });
  });

  describe("When an error occurs", () => {
    test("Then dispatch should not be invoked", async () => {
      server.use(handlerError);

      const {
        result: {
          current: { getPhotos },
        },
      } = renderHook(() => useApi("magic+dragon+wizard+castle+spells"), {
        wrapper: ({ children }) => {
          return (
            <UiContext.Provider value={storeUi}>
              <MockContextProvider mockStore={storePhotos}>
                {children}
              </MockContextProvider>
            </UiContext.Provider>
          );
        },
      });

      await getPhotos();

      expect(dispatchPhotos).not.toHaveBeenCalled();
    });
  });
});
