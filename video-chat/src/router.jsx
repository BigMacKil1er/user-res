import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import Room from "../components/room";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RegisterForm />
    },
    {
        path: '/join_room',
        element: <Room/>
    }
])