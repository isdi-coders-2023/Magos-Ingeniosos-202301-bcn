import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Filter from "./Filter";

const filterFunctions = {
  filterCastlePhotos: jest.fn(),
  filterDragonPhotos: jest.fn(),
  filterSpellsPhotos: jest.fn(),
  deactivateFilter: jest.fn(),
};

describe("Given a Filter Component", () => {
  describe("When rendered", () => {
    test("Then it should show 4 buttons", () => {
      const numberOfButtons = 4;

      render(<Filter filterFunctions={filterFunctions} />);

      const buttons = screen.getAllByRole("button");

      expect(buttons).toHaveLength(numberOfButtons);
    });

    test("Then it should show a button to filter photos of castles", () => {
      const labelText = /castle/i;

      render(<Filter filterFunctions={filterFunctions} />);

      const castleFilterButton = screen.getByRole("button", {
        name: labelText,
      });

      expect(castleFilterButton).toBeInTheDocument();
    });

    test("Then it should show a button to filter photos of dragons", () => {
      const labelText = /dragon/i;

      render(<Filter filterFunctions={filterFunctions} />);

      const dragonFilterButton = screen.getByRole("button", {
        name: labelText,
      });

      expect(dragonFilterButton).toBeInTheDocument();
    });

    test("Then it should show a button to filter photos of spells", () => {
      const labelText = /spells/i;

      render(<Filter filterFunctions={filterFunctions} />);

      const spellsFilterButton = screen.getByRole("button", {
        name: labelText,
      });

      expect(spellsFilterButton).toBeInTheDocument();
    });

    test("Then it should show a button to show all photos without a filter", () => {
      const labelText = /show all/i;

      render(<Filter filterFunctions={filterFunctions} />);

      const showAllButton = screen.getByRole("button", {
        name: labelText,
      });

      expect(showAllButton).toBeInTheDocument();
    });
  });

  describe("When the user clicks on the castle filter button", () => {
    test("Then the filterCastlePhotos function should be invoked", () => {
      const labelText = /castle/i;

      render(<Filter filterFunctions={filterFunctions} />);

      const filterButton = screen.getByRole("button", {
        name: labelText,
      });

      userEvent.click(filterButton);

      expect(filterFunctions.filterCastlePhotos).toHaveBeenCalled();
    });
  });

  describe("When the user clicks on the dragon filter button", () => {
    test("Then the filterDragonPhotos function should be invoked", () => {
      const labelText = /dragon/i;

      render(<Filter filterFunctions={filterFunctions} />);

      const filterButton = screen.getByRole("button", {
        name: labelText,
      });

      userEvent.click(filterButton);

      expect(filterFunctions.filterDragonPhotos).toHaveBeenCalled();
    });
  });

  describe("When the user clicks on the spells filter button", () => {
    test("Then the filterSpellsPhotos function should be invoked", () => {
      const labelText = /spells/i;

      render(<Filter filterFunctions={filterFunctions} />);

      const filterButton = screen.getByRole("button", {
        name: labelText,
      });

      userEvent.click(filterButton);

      expect(filterFunctions.filterSpellsPhotos).toHaveBeenCalled();
    });
  });

  describe("When the user clicks on the 'Show all' button", () => {
    test("Then the deactivateFilter function should be invoked", () => {
      const labelText = /show all/i;

      render(<Filter filterFunctions={filterFunctions} />);

      const showAllButton = screen.getByRole("button", {
        name: labelText,
      });

      userEvent.click(showAllButton);

      expect(filterFunctions.deactivateFilter).toHaveBeenCalled();
    });
  });
});
