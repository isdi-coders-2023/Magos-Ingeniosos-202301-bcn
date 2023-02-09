import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MainNavigation from "./MainNavigation";

describe("Given a MainNavigation component", () => {
  describe("When rendered", () => {
    test("Then it should show a list with two navigation links on the screen", () => {
      const expectedLength = 2;

      render(<MainNavigation />, { wrapper: BrowserRouter });
      const navigationList = screen.getAllByRole("navigation");

      expect(navigationList).toHaveLength(expectedLength);
    });
  });
});
