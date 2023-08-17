import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import SingInResearcher from "./pages/SingIn pages/SingIn.researcher.view";
import LogIn from "./pages/LogInPages/LogIn.view";
import FormResearcher from "./pages/forms/Form.researcher.view";

export const router = createBrowserRouter([
    {
        path: '/sing-in',
        element: <SingInResearcher />
    },
    {
        path: '/log-in',
        element: <LogIn />
    },
    {
        path: '/researcher-form',
        element: <FormResearcher />
    }
])