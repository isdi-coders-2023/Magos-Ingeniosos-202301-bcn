import { render, screen } from "@testing-library/react";
import MockContextProvider from "../../mocks/MockContextProvider";
import { mockStore, photos } from "../../mocks/mockStore";
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

  describe("When rendered with no alternative text from the Api", () => {
    test("Then it should show default alternative text", () => {
      const defaultAlt = "magic themed photography from unsplash";
      const pepe = [];
      photos.map((photo) => {
        if (photo.alt === "") {
          return pepe.push(1);
        }
        return null;
      });

      const numberOfPhotosInList = pepe.length;

      render(
        <MockContextProvider mockStore={store}>
          <PhotoList />
        </MockContextProvider>
      );

      const resultAlt = screen.getAllByAltText(defaultAlt);

      expect(resultAlt).toHaveLength(numberOfPhotosInList);
    });
  });

  describe("When rendered with an alternative text from the Api", () => {
    test("Then it should show image's alternative text", () => {
      const defaultAlt = "alternative text";
      const altTextCounter = [];
      photos.map((photo) => {
        if (photo.alt === "") {
          return altTextCounter.push(1);
        }
        return null;
      });

      const numberOfPhotosInList = photos.length - altTextCounter.length;

      render(
        <MockContextProvider mockStore={store}>
          <PhotoList />
        </MockContextProvider>
      );

      const resultAlt = screen.getAllByAltText(defaultAlt);

      expect(resultAlt).toHaveLength(numberOfPhotosInList);
    });
  });
});
