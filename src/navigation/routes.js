import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home";
import Login from "../pages/login/Login";
import Profile from "../pages/profile";

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
let email = localStorage.getItem('email')
console.log("email", email);
let routesCondition = email ? loginRoute : homeRoutes

export const router = createBrowserRouter([
      ...routesCondition
]);