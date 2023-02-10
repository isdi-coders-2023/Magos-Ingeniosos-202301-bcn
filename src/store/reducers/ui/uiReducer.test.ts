import { UiActionType } from "../../actions/ui/types";
import uiReducer from "./uiReducer";

describe("Given a uiReducer function", () => {
  describe("When it receives a positive loading state and an 'unsetIsLoading' action", () => {
    test("Then it should return a false loading state", () => {
      const currentIsLoading = true;
      const expectedIsLoading = false;
      const unsetIsLoadingAction = { type: UiActionType.unsetIsLoading };

      const result = uiReducer(currentIsLoading, unsetIsLoadingAction);

      expect(result).toStrictEqual(expectedIsLoading);
    });
  });

  describe("When it receives a negative loading state and a 'setIsLoading' action", () => {
    test("Then it should return a true loading state", () => {
      const currentIsLoading = false;
      const expectedIsLoading = true;
      const setIsLoadingAction = { type: UiActionType.setIsLoading };

      const result = uiReducer(currentIsLoading, setIsLoadingAction);

      expect(result).toStrictEqual(expectedIsLoading);
    });
  });

  describe("When it doesn't receive a valid action", () => {
    test("Then it should return the loading state unchanged", () => {
      const currentIsLoading = false;
      const defaultAction = { type: UiActionType.default };

      const result = uiReducer(currentIsLoading, defaultAction);

      expect(result).toStrictEqual(currentIsLoading);
    });
  });
});
