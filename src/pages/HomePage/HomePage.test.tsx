import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PhotosContextProvider from "../../store/contexts/photos/PhotosContextProvider";
import HomePage from "./HomePage";

describe("Given a HomePage Component", () => {
  describe("When rendered", () => {
    test("Then it should show the heading 'All Photos'", () => {
      const headingText = /all photos/i;

      render(
        <PhotosContextProvider>
          <HomePage />
        </PhotosContextProvider>,
        { wrapper: BrowserRouter }
      );
      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });
  });
});
