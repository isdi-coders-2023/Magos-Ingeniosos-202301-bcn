import { render, screen } from "@testing-library/react";
import Filter from "./FilterComponent";

describe("Given a Filter Component", () => {
  describe("When rendered", () => {
    test("Then it should show 3 buttons", () => {
      const numberOfButtons = 3;

      render(<Filter />);

      const buttons = screen.getAllByRole("button");

      expect(buttons).toHaveLength(numberOfButtons);
    });
  });
});
