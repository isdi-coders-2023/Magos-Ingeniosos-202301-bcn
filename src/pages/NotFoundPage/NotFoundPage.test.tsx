import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage component", () => {
  describe("When rendered", () => {
    test("Then it should show the text 'Not found' on the screen", () => {
      const expectedText = "Not found";

      render(<NotFoundPage />);
      const text = screen.getByRole("heading", { name: expectedText });

      expect(text).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Back to Home'", () => {
      const expectedText = "Back to Home";

      render(<NotFoundPage />);
      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });
  });
});
