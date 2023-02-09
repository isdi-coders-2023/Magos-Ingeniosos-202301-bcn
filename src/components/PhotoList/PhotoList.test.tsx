import { render, screen } from "@testing-library/react";
import MockContextProvider from "../../mocks/MockContextProvider";
import { mockStore } from "../../mocks/mockStore";
import PhotoList from "./PhotoList";

const store = mockStore;

describe("Given a PhotoList component", () => {
  describe("When rendered", () => {
    test("Then it should show a list of images", () => {
      render(
        <MockContextProvider mockStore={store}>
          <PhotoList />
        </MockContextProvider>
      );

      const photoList = screen.getAllByRole("img");

      photoList.forEach((photo) => expect(photo).toBeInTheDocument());
    });
  });
});
