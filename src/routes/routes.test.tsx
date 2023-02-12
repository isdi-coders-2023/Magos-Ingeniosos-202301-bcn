import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import PhotosContextProvider from "../store/contexts/photos/PhotosContextProvider";
import UiContextProvider from "../store/contexts/ui/UiContextProvider";
import { routes } from "./routes";

describe("Given the router element", () => {
  describe("When the DetailsPage is rendered", () => {
    test("Then it should show an image", async () => {
      const router = createMemoryRouter(routes, {
        initialEntries: ["/details/:id"],
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
