import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/login/Login";

let loginRoute = [
      {
            path: "/",
            element: <Login />,
      },
      {
            path: "*",
            element: <Login />,
      },
]

export const publicRouter = createBrowserRouter([
      ...loginRoute
]);