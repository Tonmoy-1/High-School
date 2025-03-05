import { createBrowserRouter } from "react-router-dom";

import MainLayOut from "../Main/MainLayOut";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
]);
