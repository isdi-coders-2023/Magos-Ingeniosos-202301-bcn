import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import HomePage from "../pages/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "details",
        element: <DetailsPage />,
      },
    ],
  },
]);

export default router;
