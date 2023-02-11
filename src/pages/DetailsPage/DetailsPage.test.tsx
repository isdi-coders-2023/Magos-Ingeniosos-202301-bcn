import DetailsPage from "./DetailsPage";
import { render, screen } from "@testing-library/react";
import MockContextProvider from "../../mocks/MockContextProvider";
import { mockStorePhotos } from "../../mocks/mockStore";

describe("Given a DetailsPage Component", () => {
  describe("When rendered", () => {
    test("Then it should show alt text", () => {
      render(
        <MockContextProvider mockStore={mockStorePhotos}>
          <DetailsPage />
        </MockContextProvider>
      );

      const expectedAltText = screen.getByRole("img");

      expect(expectedAltText).toBeInTheDocument();
    });
  });
});
