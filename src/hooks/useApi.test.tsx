import { renderHook } from "@testing-library/react";
import { handlerDetailsError, handlerListError } from "../mocks/handlers";
import MockContextProvider from "../mocks/MockContextProvider";
import {
  mockStorePhotos,
  mockDispatchPhotos,
  mockActionPhotos,
  mockUiDispatch,
  mockUiStore,
  mockUiSetIsLoadingAction,
  mockUiUnsetIsLoadingAction,
  mockDispatchPhoto,
  mockActionPhoto,
} from "../mocks/mockStore";
import { server } from "../mocks/server";
import PhotosContext from "../store/contexts/photos/PhotosContext";
import UiContext from "../store/contexts/ui/UiContext";
import useApi from "./useApi";

const dispatchPhotos = mockDispatchPhotos;
const dispatchPhoto = mockDispatchPhoto;
const storePhotos = mockStorePhotos;
const actionPhotos = mockActionPhotos;

const dispatchUi = mockUiDispatch;
const storeUi = mockUiStore;
const actionUiSetIsLoading = mockUiSetIsLoadingAction;
const actionUiUnsetIsLoading = mockUiUnsetIsLoadingAction;

describe("Given a useApi function", () => {
  describe("When getPhotos is called with a valid action", () => {
    test("Then dispatchPhotos should be invoked with that action", async () => {
      const {
        result: {
          current: { getPhotos },
        },
      } = renderHook(() => useApi(""), {
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
      } = renderHook(() => useApi(""), {
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

  describe("When getPhoto is called with a valid action", () => {
    test("Then dispatchPhoto should be invoked with that action", async () => {
      const id = "";
      const {
        result: {
          current: { getPhoto },
        },
      } = renderHook(() => useApi(id), {
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

      await getPhoto(id);

      expect(dispatchPhoto).toHaveBeenCalledWith(mockActionPhoto);
    });
  });

  describe("When an error occurs in the getPhotos function", () => {
    beforeEach(() => server.resetHandlers(handlerListError));

    test("Then dispatchPhotos should not be invoked", async () => {
      const {
        result: {
          current: { getPhotos },
        },
      } = renderHook(() => useApi(""), {
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

  describe("When an error occurs in the getPhoto function", () => {
    beforeEach(() => server.resetHandlers(handlerDetailsError));

    test("Then dispatchPhoto should not be invoked", async () => {
      const id = "";
      const {
        result: {
          current: { getPhoto },
        },
      } = renderHook(() => useApi(id), {
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

      await getPhoto(id);

      expect(dispatchPhoto).not.toHaveBeenCalled();
    });
  });
});
