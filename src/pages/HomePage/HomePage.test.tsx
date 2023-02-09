import { render, screen } from "@testing-library/react";
import PhotosContextProvider from "../../store/contexts/PhotosContextProvider";
import HomePage from "./HomePage";

describe("Given a HomePage Component", () => {
  describe("When rendered", () => {
    test("Then it should show the heading 'All Photos'", () => {
      const headingText = /all photos/i;

      render(
        <PhotosContextProvider>
          <HomePage />
        </PhotosContextProvider>
      );
      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });
  });
});
