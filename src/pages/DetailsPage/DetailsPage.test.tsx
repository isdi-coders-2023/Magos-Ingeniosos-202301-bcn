import DetailsPage from "./DetailsPage";
import { render, screen } from "@testing-library/react";
import MockContextProvider from "../../mocks/MockContextProvider";
import { mockStore } from "../../mocks/mockStore";

describe("Given a DetailsPage Component", () => {
  describe("When rendered", () => {
    test("Then it should show alt text", () => {
      render(
        <MockContextProvider mockStore={mockStore}>
          <DetailsPage />
        </MockContextProvider>
      );

      const expectedAltText = screen.getByRole("img");

      expect(expectedAltText).toBeInTheDocument();
    });
  });
});
