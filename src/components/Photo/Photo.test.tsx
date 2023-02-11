import { render, screen } from "@testing-library/react";
import Photo from "./Photo";

describe("Given a Photo component", () => {
  describe("When rendered", () => {
    test("Then it should show text Melquiades Heeringa", () => {
      render(
        <Photo
          id=""
          description=""
          alt=""
          url=""
          tags={[]}
          photographer={"Melquiades Heeringa"}
          username=""
        />
      );

      const expectedText = "Melquiades Heeringa";

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });

  test("Then it should show 3 tags", () => {
    const tags = ["magic", "wizard", "sabrina"];
    const expectedLength = 3;

    render(
      <Photo
        id={""}
        description={""}
        alt={""}
        url={""}
        tags={tags}
        username={""}
        photographer={""}
      />
    );
    const pageTags = screen.getAllByRole("listitem");

    expect(pageTags).toHaveLength(expectedLength);
  });
});
