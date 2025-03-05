import { createBrowserRouter } from "react-router-dom";

import MainLayOut from "../Main/MainLayOut";
import Home from "../Pages/Home";
import NoticesPage from "../Pages/NoticesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "notice",
        element: <NoticesPage></NoticesPage>,
      },
    ],
  },
]);
