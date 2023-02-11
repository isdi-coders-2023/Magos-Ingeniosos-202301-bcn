import {
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "./uiActionCreator";

describe("Given the function setIsLoadingActionCreator", () => {
  describe("When invoked", () => {
    test("Then it should return an action object with property 'type'", () => {
      const result = setIsLoadingActionCreator();

      expect(result).toHaveProperty("type");
    });
  });

  test("Then it should return an action object with property 'type'", () => {
    const result = unsetIsLoadingActionCreator();

    expect(result).toHaveProperty("type");
  });
});
