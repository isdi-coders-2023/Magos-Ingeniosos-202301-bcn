import { render, screen } from "@testing-library/react";
import Filter from "./Filter";

describe("Given a Filter Component", () => {
  describe("When rendered", () => {
    test("Then it should show 3 buttons", () => {
      const numberOfButtons = 3;

      render(<Filter />);

      const buttons = screen.getAllByRole("button");

      expect(buttons).toHaveLength(numberOfButtons);
    });

    test("Then it should show a button to filter photos of castles", () => {
      const labelText = /castle/i;

      render(<Filter />);

      const castleFilterButton = screen.getByLabelText(labelText);

      expect(castleFilterButton).toBeInTheDocument();
    });

    test("Then it should show a button to filter photos of dragons", () => {
      const labelText = /dragon/i;

      render(<Filter />);

      const dragonFilterButton = screen.getByLabelText(labelText);

      expect(dragonFilterButton).toBeInTheDocument();
    });

    test("Then it should show a button to filter photos of spells", () => {
      const labelText = /spells/i;

      render(<Filter />);

      const spellsFilterButton = screen.getByLabelText(labelText);

      expect(spellsFilterButton).toBeInTheDocument();
    });
  });
});
