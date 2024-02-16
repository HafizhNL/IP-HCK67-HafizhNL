import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "./pages/loginPage";
import Register from "./pages/registerPage";
import HomePublic from "./pages/homePublicPage";
import DetailPublic from "./pages/detailPage";

export const router = createBrowserRouter([
    {
        path: "/public",
        element: <HomePublic/>
    },
    {
        path: "/public/:id",
        element: <DetailPublic/>
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/login",
        element: <Login />
    }
])