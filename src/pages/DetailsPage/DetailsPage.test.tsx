import DetailsPage from "./DetailsPage";
import { render, screen } from "@testing-library/react";
import MockContextProvider from "../../mocks/MockContextProvider";
import { mockStorePhotos } from "../../mocks/mockStore";
import { BrowserRouter } from "react-router-dom";

describe("Given a DetailsPage Component", () => {
  describe("When rendered", () => {
    test("Then it should show a photo", () => {
      render(
        <MockContextProvider mockStore={mockStorePhotos}>
          <DetailsPage />
        </MockContextProvider>,
        { wrapper: BrowserRouter }
      );

      const photoDetail = screen.getByRole("img");

      expect(photoDetail).toBeInTheDocument();
    });
  });
});
