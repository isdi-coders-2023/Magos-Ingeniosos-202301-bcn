import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

export const routes = [
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
];

export const router = createBrowserRouter(routes);
