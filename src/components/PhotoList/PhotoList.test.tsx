import { render, screen } from "@testing-library/react";
import PhotoList from "./PhotoList";

describe("Given PhotoList component", () => {
  describe("When rendered", () => {
    test("Then it should show an image with alternative text", () => {
      const altText = "Melquiades the mage";
      const numberOfPhotos = 9;
      render(<PhotoList />);

      const expectedAlt = screen.getAllByAltText(altText);

      expect(expectedAlt).toHaveLength(numberOfPhotos);
    });
  });
});
