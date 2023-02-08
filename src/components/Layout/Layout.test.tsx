import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show text 'Wiztagram' in the header", () => {
      const expectedText = "Wiztagram";

      render(<Layout />, { wrapper: BrowserRouter });

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
