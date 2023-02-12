import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import PhotosContextProvider from "../store/contexts/photos/PhotosContextProvider";
import UiContextProvider from "../store/contexts/ui/UiContextProvider";
import { routes } from "./routes";

describe("Given router element", () => {
  describe("When rendered the DetailsPage", () => {
    test("Then it should show the header banner", async () => {
      const router = createMemoryRouter(routes, {
        initialEntries: ["/details/"],
      });

      render(
        <UiContextProvider>
          <PhotosContextProvider>
            <RouterProvider router={router} />
          </PhotosContextProvider>
        </UiContextProvider>
      );

      const expectedRole = screen.getByRole("img");

      await expect(expectedRole).toBeInTheDocument();
    });
  });
});
