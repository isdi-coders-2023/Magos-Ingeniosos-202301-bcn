import { render, screen } from "@testing-library/react";
import PhotoList from "./PhotoList";

describe("Given PhotoList component", () => {
  describe("When rendered", () => {
    test("Then it should show a list of images with alternative text", () => {
      const altText = "Melquiades the mage";
      const numberOfPhotos = 1;

      render(<PhotoList />);

      const expectedAlt = screen.getAllByAltText(altText);

      expect(expectedAlt).toHaveLength(numberOfPhotos);
    });
  });
});
