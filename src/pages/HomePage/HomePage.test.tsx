import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("Given a HomePage Component", () => {
  describe("When rendered", () => {
    test("Then it should show buttons", () => {
      render(<HomePage />);

      const buttons = screen.getAllByRole("button");

      buttons.forEach((button) => expect(button).toBeInTheDocument());
    });
  });
});
