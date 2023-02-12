import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import GlobalStyles from "./GlobalStyles";
import HomePage from "./pages/HomePage/HomePage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import UiContextProvider from "./store/contexts/ui/UiContextProvider";
import PhotosContextProvider from "./store/contexts/photos/PhotosContextProvider";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "details/:id",
        element: <DetailsPage />,
      },
    ],

    errorElement: <NotFoundPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UiContextProvider>
      <PhotosContextProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </PhotosContextProvider>
    </UiContextProvider>
  </React.StrictMode>
);
