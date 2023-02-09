import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When rendered", () => {
    test("It should show the text 'Casting...' on the screen", () => {
      const expectedText = "Casting...";

      render(<Loading />);

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
