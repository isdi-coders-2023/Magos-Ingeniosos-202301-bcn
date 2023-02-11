import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import UiContextProvider from "../../store/contexts/ui/UiContextProvider";

import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show text 'Wiztagram' in the header", () => {
      const expectedText = "Wiztagram";

      render(
        <UiContextProvider>
          <Layout />
        </UiContextProvider>,
        { wrapper: BrowserRouter }
      );

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
