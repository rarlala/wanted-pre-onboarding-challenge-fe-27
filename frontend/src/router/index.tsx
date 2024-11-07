import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import AuthLayout from "../pages/auth";
import Login from "../pages/auth/login";
import ErrorPage from "../error-page";
import SignUp from "../pages/auth/signUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
