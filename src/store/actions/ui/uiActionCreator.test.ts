import { setIsLoadingActionCreator } from "./uiActionCreator";

describe("Given the function setIsLoadingActionCreator", () => {
  describe("When invoked", () => {
    test("Then it should return an action object with property 'type'", () => {
      const result = setIsLoadingActionCreator();

      expect(result).toHaveProperty("type");
    });
  });
});
