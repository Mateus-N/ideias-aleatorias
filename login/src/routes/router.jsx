import {
    createBrowserRouter,
} from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login/Index";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/cadastro",
        element: <Cadastro />
    }
])
