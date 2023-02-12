import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./GlobalStyles";
import UiContextProvider from "./store/contexts/ui/UiContextProvider";
import PhotosContextProvider from "./store/contexts/photos/PhotosContextProvider";
import router from "./router/router";
import { RouterProvider } from "react-router-dom";

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
