import { render, screen } from "@testing-library/react";
import Photo from "./Photo";

describe("Given a Component", () => {
  describe("When rendered", () => {
    test("Then it should show text Melquiades Heeringa", () => {
      render(
        <Photo id="" url="" tags={[]} photographer={"Melquiades Heeringa"} />
      );

      const expectedText = "Melquiades Heeringa";

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
