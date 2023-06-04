import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home";
import Login from "../pages/login/Login";
import Profile from "../pages/profile";

let homeRoutes = [
      {
            path: "/home",
            element: <Home />,
      },
      {
            path: "/profile",
            element: <Profile />,
      },
      {
            path: "*",
            element: <Home />,
      },
]

export const privateRouter = createBrowserRouter([
      ...homeRoutes
]);