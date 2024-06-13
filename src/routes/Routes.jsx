import { createBrowserRouter } from "react-router-dom";
import MainFile from "../layout/MainFile";
import Home from "../pages/Home";
import Login from "../pages/Login";

 export const router =  createBrowserRouter([
    {
        path: '/',
        element: <MainFile></MainFile>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])
