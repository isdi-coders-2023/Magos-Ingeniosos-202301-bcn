import { render } from "@testing-library/react";
import GlobalStyles from "./GlobalStyles";

describe("Given a GlobalStyles component", () => {
  describe("When the document renders", () => {
    test("Then the document head should include those styles", () => {
      render(<GlobalStyles />);

      expect(document.head).toMatchSnapshot();
    });
  });
});
